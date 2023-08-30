import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MinMax from './componentes/semana01/MinMax';
import MeuComponente from './componentes/semana02/MeuComponente';
import NumeroAleatorio from './componentes/semana02/NumeroAleatorio';
import Botao from './componentes/semana03/Botao';
import Contador from './componentes/semana03/Contador';
import DigiteSeuNome from './componentes/semana03/DigiteSeuNome';



export default function App() {
  return (

    <View style={styles.container}>
      <Contador/>
      <DigiteSeuNome/>
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
