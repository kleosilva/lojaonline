import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { useFonts, Anton_400Regular} from '@expo-google-fonts/anton';
import { View, Text } from 'react-native';

import Routes from './src/router';

export default function App() {

  let [fontsLoading] = useFonts({
    Anton_400Regular,
  });


  return (
      <> 
      <StatusBar style="light" backgroundColor="#000" transLucent={true} />
      <Routes/>
      </>
    );
  }



