import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <Text style={{ color: 'red', margin: 2 }}>
        Faz uuuu Eliiii!
      </Text>
      <Image
        source={require('./assets/fla2.jpg/',)}
        style={{
          width: 100,
          height: 100,
          padding: 130,
          margin: 5
        }}
      />
      <Image
        source={require('./assets/flagremio.jpg/',)}
        style={{
          width: 100,
          height: 100,
          padding: 130
        }}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
