import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

export default function Botao() {

    function executarBotao2() {
        alert('Botão 2');
    }

    return (
        <View>
            <Text style={styles.texto}>Botões</Text>
            <Button
                title='Clique Aqui'
                onPress={() => alert('Botão 1')}
            />

            <Button
                title='Clique Aqui'
                onPress={executarBotao2}
            />

            <Button
                title='Clique Aqui'
                onPress={
                    function executarBotao3() {
                        alert('Botão 3');
                    }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

texto: {
    fontSize: 40,
    color: 'red'
}
});