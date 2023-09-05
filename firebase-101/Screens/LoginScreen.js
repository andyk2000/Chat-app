import React, {useState} from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

import AntDesign from 'react-native-vector-icons/AntDesign';


const LoginScreen = ({navigation}) =>{
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
      <Image source={require('../images/chatlogo.png')} style={styles.logo}/>
      <Text style={styles.text}>Andy's private chat</Text>

      <FormInput 
        labelValue= {email}
        placeHolderText= 'Email'
        onChangeText={(userEmail)=>{setEmail(userEmail)}}
        iconType = 'user'
        keyboardType = 'email-address'
        autoCapitalize= "none"
        autoCorrect= {false}
      />
      <FormInput 
        labelValue= {password}
        placeHolderText= 'Password'
        onChangeText={(userPassword)=>{setPassword(userPassword)}}
        iconType = 'lock'
        secureTextEntry= {true}
      />

    <FormButton 
      buttonTitle= 'Sign in'
      onPress= {()=>{alert('Signed in')}}
    />

    <TouchableOpacity style={styles.forgotButton} onPress={()=>{}}>
      <Text style={styles.navButtonText}>Forgot Password?</Text>
    </TouchableOpacity>

    <SocialButton 
      buttonTitle="Sign in with Facebook"
      btnType='facebook'
      color='#4867aa'
      backgroundColor= '#e6eaf4'
      onPress={()=>{}}
    />

    <SocialButton 
      buttonTitle="Sign in with Google"
      btnType='google'
      color='#de4d41'
      backgroundColor= '#f5e7ea'
      onPress={()=>{}}
    />
    <TouchableOpacity style={styles.forgotButton} onPress={()=>navigation.navigate('Signup')}>
      <Text style={styles.navButtonText}>Don't have an account? Create Here</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles =StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f9fafd',
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
})

export default LoginScreen;