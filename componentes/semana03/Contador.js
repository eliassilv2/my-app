import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Contador() {
    
    const [valor, setValor]= useState(0)

    //let valor = 0

    function incrementar(){
        setValor = (valor +1);
    };

    function decrementar(){
        setValor = (valor -1);
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Volumes</Text>
            <Text style={styles.valor}>0</Text>

            <View style={styles.botao}>
                <Button title='+ Incrementar' />
                <Button title='- Decrementar' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})