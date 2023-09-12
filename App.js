import React from 'react';
import { StyleSheet, View } from 'react-native';
import Profile from './componentes/semana04/Profile';


export default function App() {
  return (
    <View style={styles.container}>

      <Profile
       imgUri='https://www.fakepersongenerator.com/Face/female/female20131023623381989.jpg'
       genero='Feminino'
       nome='Felicia J Ochoa'
       email='aiyana1980@gmail.com'
       telefone='630-337-6439'
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
});