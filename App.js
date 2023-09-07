import React from 'react';
import { StyleSheet, View } from 'react-native';
import BiscoitodaSorte from './componentes/semana04/children/BiscoitodaSorte';
import Familia from './componentes/semana04/children/children/Familia';
import Filho from './componentes/semana04/children/children/Filho';
import ParOuImpar from './componentes/semana04/ParOuImpar';
import Profile from './componentes/semana04/Profile';


export default function App() {
  return (
    <View style={styles.container}>

    {/* <BiscoitodaSorte/> */}

      {/* <Familia nomeFamilia="Silva"> 
        <Filho nome="Pedro" sobreNome="Silva"></Filho>
        <Filho nome="Joao" sobreNome="Silva"></Filho>
        <Filho nome="Davi" sobreNome="Silva"></Filho>
        <Filho nome="Miguel" sobreNome="Silva"></Filho>
      </Familia>


      <Familia nomeFamilia="Figueiredo">
        <Filho nome="Julia" sobreNome="Figueiredo"></Filho>
        <Filho nome="Joao" sobreNome="Figueiredo"></Filho>
        <Filho nome="Miguel" sobreNome="Figueiredo"></Filho>
        <Filho nome="Maria" sobreNome="Figueiredo"></Filho>
      </Familia>
      */}

      <ParOuImpar />

      <Profile
       imgUri='https://www.fakepersongenerator.com/Face/female/female20161024753601562.jpg'
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});