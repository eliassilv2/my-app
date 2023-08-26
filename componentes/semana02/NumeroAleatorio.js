import { Text } from "react-native";

export default function NumeroAleatorio(props) {

    const { min, max } = props;

    let num_aleatorio;
    num_aleatorio = Math.random()
    console.warn(num_aleatorio)
    num_aleatorio = Math.floor(Math.random() * 100);

    let message;

    if (num_aleatorio > min && num_aleatorio < max) {
        message = `O número:  ${num_aleatorio}`;
    } else {
        message = "Numero invalido";
    }
    return (
        <Text style={[styles.text]}>{message}</Text>
    )
}

const styles = StyleSheet.create({


    text: {
        fontSize: 40,
        color: 'red'
    }
});