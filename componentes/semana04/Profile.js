import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Profile({ imgUri, genero, nome, telefone, email }) {
    const img = imgUri
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imgUri }}
                style={styles.img}
            />

            <View style={styles.labelContainer}>
                <Text style={[styles.texto, styles.textoLabel]}>Gênero: </Text>
                <Text style={styles.texto}>{genero}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.texto, styles.textoLabel]}>Nome: </Text>
                <Text style={styles.texto}>{nome}</Text>
            </View>


            <View style={styles.labelContainer}>
                <Text style={[styles.texto, styles.textoLabel]}>Telefone: </Text>
                <Text style={styles.texto}>{telefone}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.texto, styles.textoLabel]}>Email: </Text>
                <Text style={styles.texto}>{email}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'start',
        justifyContent: 'center',
        backgroundColor: 'teal',
    },

    img: {
        width: 250,
        height: 250,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 500,
        padding: 50,
        
        
    },

    labelContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
    },

    texto: {
        fontSize: 20
    },

    textoLabel: {
        color: 'white',
        fontWeight: 'bold',

    }
})