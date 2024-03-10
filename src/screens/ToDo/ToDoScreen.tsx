import {Text, View} from 'react-native-ui-lib';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FooterComponent from '../../components/FooterComponent';
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircle, faCircleCheck} from '@fortawesome/free-regular-svg-icons';
import ConfirmationDialog from './ConfirmationDialog';

const mockToDos = [
  {id: 1, text: 'Buy groceries'},
  {id: 2, text: 'Clean the house'},
  {id: 3, text: 'Go for a run'},
  {id: 7, text: 'Do the laundry'},
  {id: 8, text: 'Call mom'},
  {id: 9, text: 'Finish the project'},
  {id: 10, text: 'Buy groceries'},
  {id: 11, text: 'Clean the house'},
];

const mockToDosDone = [
  {id: 4, text: 'Do the laundry'},
  {id: 5, text: 'Call mom'},
  {id: 6, text: 'Finish the project'},
];

function ToDoScreen() {
  const [todos, setTodos] = useState(mockToDos);
  const [completedTodos, setCompletedTodos] = useState(mockToDosDone);
  const [text, setText] = useState('');
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editingTodoText, setEditingTodoText] = useState('');

  useEffect(() => {
    // Simulating backend call
    setTimeout(() => {
      setTodos(mockToDos);
    }, 1000);
  }, []);

  const addTodo = () => {
    if (text.trim() !== '') {
      const newTodo = {id: Date.now(), text};
      setTodos([...todos, newTodo]);
      setText('');
    }
  };

  const markAsCompleted = (id: number) => {
    const completedTodo = todos.find(todo => todo.id === id);
    if (completedTodo) {
      setCompletedTodos([...completedTodos, completedTodo]);
      const newTodos = todos.filter(todo => todo.id !== id);
      setTodos(newTodos);
    }
  };

  const markAsIncomplete = (id: number) => {
    const incompleteTodo = completedTodos.find(todo => todo.id === id);
    if (incompleteTodo) {
      setTodos([...todos, incompleteTodo]);
      const newCompletedTodos = completedTodos.filter(todo => todo.id !== id);
      setCompletedTodos(newCompletedTodos);
    }
  };

  const deleteAllCompletedTodos = () => {
    setShowConfirmationDialog(true); // Modal anzeigen, wenn alle erledigten To-Dos gelöscht werden sollen
  };

  const confirmDeleteAllCompletedTodos = () => {
    setCompletedTodos([]);
    setShowConfirmationDialog(false); // Modal schließen, nachdem die Aktion bestätigt wurde
  };

  const cancelDeleteAllCompletedTodos = () => {
    setShowConfirmationDialog(false); // Modal schließen, wenn die Aktion abgebrochen wird
  };

  const handleTodoTextChange = (id: number, newText: string) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, text: newText} : todo,
    );
    setTodos(updatedTodos);
  };

  const startEditingTodo = (id: number, text: string) => {
    setEditingTodoId(id);
    setEditingTodoText(text);
  };

  const finishEditingTodo = () => {
    if (editingTodoId !== null) {
      handleTodoTextChange(editingTodoId, editingTodoText);
      setEditingTodoId(null);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
      marginLeft: 20,
      marginRight: 20,
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
    },
    addButton: {
      backgroundColor: '#23303b',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    todos: {
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
    },
    todoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 18,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingVertical: 10,
      marginLeft: 20,
      marginRight: 20,
    },
    completedText: {
      textDecorationLine: 'line-through',
    },
    deleteButton: {
      backgroundColor: '#23303b',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
    },
    deleteButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    scrollView: {
      marginBottom: 90,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>To-Do Liste</Text>
        <TextInput
          style={styles.input}
          placeholder="Neues To-Do eingeben..."
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.buttonText}>To-Do hinzufügen</Text>
        </TouchableOpacity>
        <ScrollView style={styles.todos}>
          {todos.map(todo => (
            <View key={todo.id} style={styles.todoItem}>
              {editingTodoId === todo.id ? (
                <TextInput
                  style={{flex: 1}}
                  value={editingTodoText}
                  onChangeText={setEditingTodoText}
                  autoFocus={true}
                  onBlur={finishEditingTodo}
                />
              ) : (
                <TouchableOpacity
                  style={{flex: 1}}
                  onPress={() => startEditingTodo(todo.id, todo.text)}>
                  <Text>{todo.text}</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={() => markAsCompleted(todo.id)}>
                <FontAwesomeIcon icon={faCircle} size={25} />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        {completedTodos.length > 0 && (
          <>
            <Text style={styles.title}>Erledigte To-Dos</Text>
            <ScrollView style={styles.todos}>
              {completedTodos.map(todo => (
                <View key={todo.id} style={styles.todoItem}>
                  <Text style={styles.completedText}>{todo.text}</Text>
                  <TouchableOpacity onPress={() => markAsIncomplete(todo.id)}>
                    <FontAwesomeIcon icon={faCircleCheck} size={25} />
                  </TouchableOpacity>
                </View>
              ))}
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={deleteAllCompletedTodos}>
                <Text style={styles.deleteButtonText}>Alle Löschen</Text>
              </TouchableOpacity>
            </ScrollView>
          </>
        )}
      </ScrollView>
      <ConfirmationDialog
        isVisible={showConfirmationDialog}
        onConfirm={confirmDeleteAllCompletedTodos}
        onCancel={cancelDeleteAllCompletedTodos}
      />
      <FooterComponent />
    </View>
  );
}
export default ToDoScreen;
