

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    
  <View style={styles.container}>
 
    <Image style={styles.imageLogo} source={require('../assets/logo.png')}/>
    <Image style={styles.imageBouton} source={require('../assets/boutonEntreprise.png')}/>
    <Image style={styles.imageBouton} source={require('../assets/boutonInfluenceur.png')}/>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#1f1e1e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  /*taille de l'image du logo*/
  imageLogo:{
    marginBottom: 100,
    width: 110,
    height: 120,
  },
 /*taille de l'image des boutons*/
  imageBouton:{
    width: 170,
    height: 50,
  },
 
});
