import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

// подключение шрифтов
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainStack from './navigate';

const fonts = () => Font.loadAsync({
  //асинхронная загрузка шрифтов
  'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'mt-light': require('./assets/fonts/Montserrat-Light.ttf')
});

export default function App() {

  //нужно дождаться момента, когда загрузятся шрифты
  const [font, setFont] = useState(false);


  if(font) {
    return (
      <MainStack />

  );
  } else {
    return (
      //показ экрана загрузки AppLoading. Когда шрифты загрузятся обработчик событий onFinish вызывается функция fonts
      <AppLoading 
      startAsync={fonts} 
      onFinish={() => setFont(true)}
      onError={console.warn}
      />
    );
  }
  
}

const styles = StyleSheet.create({

});
