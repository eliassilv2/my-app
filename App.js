import { StatusBar } from 'expo-status-bar';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MeuComponente from './componentes/MeuComponente';
import MinMax from './componentes/MinMax';


export default function App() {
  return (

    <View style={styles.container}>
     
      <MinMax min='10' max='20'/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'red',
    margin: 2,
    fontSize: 45
  },

  text1: {
    color: 'white',
    margin: 2,
    fontSize: 35
  }
});
