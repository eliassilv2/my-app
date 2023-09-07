import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default ParOuImpar

const ParOuImpar = () => {

    // const numero = props.numero
    // let resultado = ''

    // if (numero % 2 == 0){
    //     resultado = 'Par'
    // } else {
    //     resultado = 'Impar'
    // }

    return (
        <View>
            <Text style={{ fontSize: 30 }}>O numero {numero} é: </Text>
            <Text style={{ color: numero % 2 === 0 ? 'blue' : 'red', fontSize: 30 }}>{numero % 2 === 0 ? 'Par' : 'Impar' }</Text>
        </View>
    )
}


const styles = StyleSheet.create({})