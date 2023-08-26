import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MinMax from './componentes/semana01/MinMax';
import MeuComponente from './componentes/semana02/MeuComponente';
import NumeroAleatorio from './componentes/semana02/NumeroAleatorio';



export default function App() {
  return (

    <View style={styles.container}>
      <MinMax min= {5} max= {20}/>
      <MeuComponente/>
      <NumeroAleatorio min={1} max={50}/>
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

});
