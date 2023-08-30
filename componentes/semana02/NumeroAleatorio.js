import { Text, StyleSheet } from "react-native";

export default function NumeroAleatorio(props) {

    const { min, max } = props;

    let num_aleatorio;
    num_aleatorio = Math.random()
    console.warn(num_aleatorio)
    num_aleatorio = Math.floor(Math.random() * 100);

    let message;

    if (num_aleatorio > min && num_aleatorio < max) {
        message = `O número aleatório é:  ${num_aleatorio}`;
    } else {
        message = "Numero invalido";
    }
    return (
        <Text style={{fontSize: 30}}>{message}</Text>
    )
}

const styles = StyleSheet.create({})