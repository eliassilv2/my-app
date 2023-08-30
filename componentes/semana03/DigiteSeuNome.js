import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function DigiteSeuNome() {
  return (
    <View>
      <Text style={styles.texto}>Digite Seu Nome</Text>
      <Text style={styles.texto}>Nome</Text>

      <TextInput style={styles.input}/>

    <Button
        title='Enviar'
        onPress={()=>alert('Enviar')}
    />     

    </View>
  )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    input:{
        fontSize: 30,
        color: 'red',
        borderWidth: 2,
        margin: 10
    }
    
})