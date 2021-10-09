import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text>inscritption Entreprise</Text>
        <TextInput underlineColorAndroid='transparent ' style={styles.formulaire}>
        </TextInput>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {     
      flex: 1,
      backgroundColor: '#1f1e1e',
      alignItems: 'center',
      justifyContent: 'center' ,
    },
    formulaire: {
      height: 40,
      borderColor:'grey',
      borderWidth: 1,
    },
  });