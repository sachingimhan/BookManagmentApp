import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';

const SignupComponent = () => {
  return (
    <SafeAreaView>
      <View style={style.views}>
        <Text style={style.titles}>Create an Account</Text>
        <Text style={style.text}>Full Name:</Text>
        <TextInput style={style.textViews} placeholder="Ex: John Doe" />
        <Text style={style.text}>Email:</Text>
        <TextInput style={style.textViews} placeholder="Ex: example@example.com" />
        <Text style={style.text}>Password:</Text>
        <TextInput style={style.textViews} placeholder="Password" />
        <Text style={style.text}>Confirm Password:</Text>
        <TextInput style={style.textViews} placeholder="Confirm Password" />
        <Button title='Sign Up' color='#9500ae' onPress={()=>ToastAndroid.show('Working Prograss...',ToastAndroid.SHORT)}/>
      </View>
    </SafeAreaView>
  );
};
export default SignupComponent;
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
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
