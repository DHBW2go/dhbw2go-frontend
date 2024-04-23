import {Button, Text, View} from 'react-native-ui-lib';
import {FlatList, StyleSheet} from 'react-native';
import FooterComponent from '../components/FooterComponent';
import React, {useState} from 'react';

const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    //borderBottomColor: '#ccc',
    marginBottom: 5,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    //borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#23303b',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});

function GradesScreen() {
  const [summaryVisible, setSummaryVisible] = useState(true);
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  function componentDidMount() {
    const mockData = [
      {moduleId: 1, moduleName: 'IT-Sicherheit', credits: '5', grade: '1.7', examsReferenceArguments: 'bestanden'},
      {moduleId: 2, moduleName: 'Theoretische Informatik', credits: '5', grade: '2.3', examsReferenceArguments: 'bestanden'},
      {moduleId: 3, moduleName: 'Software Engineering', credits: '5', grade: '2.0', examsReferenceArguments: 'bestanden'},
      {moduleId: 4, moduleName: 'Compilerbau', credits: '5', grade: '1.5', examsReferenceArguments: 'bestanden'},
      {moduleId: 5, moduleName: 'Mathematik', credits: '5', grade: '3.0', examsReferenceArguments: 'bestanden'},
    ];
    const columns = Object.keys(mockData[0]).filter(key => key !== 'id');
    setData(mockData);
    setColumns(['Nr.', 'Modul', 'Credits', 'Note', 'Status']);
  }

  return (
    <View style={style.view}>
      <Button
        label={summaryVisible ? 'Leistungsübersicht' : 'Semesteransicht'}
        onPress={() => setSummaryVisible(!summaryVisible)}
        style={style.button}
      />
      {summaryVisible ? (
        <>
          <View style={style.container}>
            <View style={style.tableHeader}>
              {/* Rendere die Tabellenüberschriften basierend auf den Spalten */}
              {columns.map(column => (
                <Text key={column} style={style.headerCell}>
                  {column}
                </Text>
              ))}
            </View>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <View style={style.tableRow}>
                  {/* Rendere die Zellen basierend auf den Spalten */}
                  {columns.map(column => (
                    <Text key={column} style={style.cell}>
                      {item[column.toLowerCase()]}
                    </Text>
                  ))}
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </>
      ) : (
        <>
          <Text>Semesteransicht</Text>
        </>
      )}
      <FooterComponent />
    </View>
  );
}
export default GradesScreen;
