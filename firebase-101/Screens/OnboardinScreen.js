import React from 'react';
import {View, Text, Button, StyleSheet, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = ({navigation}) => {

  return(
    <Onboarding 
      onSkip={()=>navigation.replace('Login')}
      onDone={()=> navigation.navigate('Login')}
      pages={[
      {
        backgroundColor: '#a6e4d0',
        image: <Image source={require('../images/welcome.png')} />,
        title: 'onboarding 1',
        subtitle: 'done with react native swiper'
      },
      {
        backgroundColor: '#fdeb93',
        image: <Image source={require('../images/confidential.png')} />,
        title: 'onboarding 2',
        subtitle: 'done with react native swiper'
      },
      {
        backgroundColor: '#fdeb93',
        image: <Image source={require('../images/congratulation.jpg')} />,
        title: 'onboarding 2',
        subtitle: 'done with react native swiper'
      },
    ]}
      />
  )

}
export default OnboardingScreen;