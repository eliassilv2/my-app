import { Text, View } from "react-native"

export default function NumeroAleatorio(props) {

    const { min, max } = props;
    const maxValue = Math.max(parseInt(min), parseInt(max));

    return (
    <View>
        <Text min= {1} max= {20}/>
        <Text min= {50} max= {200}/>
    </View>
    )
}