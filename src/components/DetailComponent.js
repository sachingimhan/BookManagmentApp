import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const DetailComponent = ({navigation}) => {
  
  const tableState={
    tableHeader:['ISBN','Book Title','Author','Publisher','Update','Delete'],
    tableData:[
      ['B-485635','Fifty Shade of Gray','Unknown','Unknown',
      <Button title='Update' color='#fcba03' />,
      <Button title='Delete' color='#fc034e' />
    ],
      ['B7859665','Fifty Shade of Daker','Unknown','Unknown',
      <Button title='Update' color='#fcba03' />,
      <Button title='Delete' color='#fc034e' />
    ]
    ]
  };

  return (
    <SafeAreaView>
      <View style={style.views}>
        <Text style={style.titles}>Books Details</Text>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={tableState.tableHeader} style={{ height: 40, backgroundColor: '#f1f8ff' }} textStyle={{ margin: 6 }}/>
          <Rows data={tableState.tableData} textStyle={{ margin: 6 }}/>
        </Table>
      </View>
      <View style={style.views}>
        <Button color='#1d7538'  title='Add New Book' onPress={()=>navigation.navigate('BookReg')} />
      </View>
    </SafeAreaView>
  );
};

export default DetailComponent;

const style = StyleSheet.create({
  views: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  titles: {
    textAlign: 'center',
    fontSize: 30,
    color: '#035afc',
    marginTop: 20,
    marginBottom: 20,
  },
  textViews: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 8,
    textAlign: 'center',
  },
  btnTxt:{
    fontSize:8
  }
});
