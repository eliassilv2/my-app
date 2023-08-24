import React from 'react'
import { StyleSheet, Text } from 'react-native'


export default function MinMax(props) {
    const { min, max } = props;

    if (max > min) {
        message = `o valor maior é:  ${max}`;
    } else if (min > max) {
        message = `o valor maior é:  ${min}`;
    } else {
        message = 'os valores são iguais';
    }

    return (
        <Text style={[styles.text]}>{message}</Text>
    );
}

const styles = StyleSheet.create({


    text: {
        fontSize: 40,
        color: 'red'
    }
});
