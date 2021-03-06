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
const LoginComponent = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={style.views}>
        <Text style={style.titles}>Book Managment</Text>
        <TextInput style={style.textViews} placeholder="User Email" />
        <TextInput
          style={style.textViews}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button
          title="Login"
          color="#350869"
          onPress={() => {
            navigation.navigate('Details');
          }}
        />
      </View>
      <View style={style.views}>
        <Button
          color="#ff3d00"
          title="Create Account"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
      <View style={style.views}>
        <Button color="#b26500" title="Login with Google" onPress={()=>ToastAndroid.show('Coming Soon...',ToastAndroid.SHORT)}/>
      </View>
      <View style={style.views}>
        <Button color="#2a3eb1" title="Login with Facebook" onPress={()=>ToastAndroid.show('Coming Soon...',ToastAndroid.SHORT)}/>
      </View>
    </SafeAreaView>
  );
};
export default LoginComponent;
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
  btn: {
    marginBottom: '20',
  },
});
