import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
  TouchableOpacity,
  SafeAreaView,
  Group,
} from 'react-native';

export default function BookRegComponent() {
  return (
    <SafeAreaView>
      <View style={style.views}>
        <Text style={style.titles}>Add New Book</Text>

        <Text style={style.text}>ISBN: </Text>
        <TextInput style={style.textViews} placeholder='ISBN No'/>
        <Text style={style.text}>Book Title: </Text>
        <TextInput style={style.textViews} placeholder='Book Title'/>
        <Text style={style.text}>Author: </Text>
        <TextInput style={style.textViews} placeholder='Author'/>
        <Text style={style.text}>Publisher: </Text>
        <TextInput style={style.textViews} placeholder='Publisher'/>
        <Button color='#035afc' title='Save' onPress={()=>ToastAndroid.show('Working Prograss..',ToastAndroid.SHORT)}/>
      </View>
    </SafeAreaView>
  );
}
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
  text:{
      fontSize:15,
      fontWeight:'bold'
  }
});
