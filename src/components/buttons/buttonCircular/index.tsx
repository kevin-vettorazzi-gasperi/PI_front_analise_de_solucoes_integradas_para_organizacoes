import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ButtonCircularProps {
    onPress: () => void
}
export function ButtonCircular( props: ButtonCircularProps) {

    return (
        <TouchableOpacity style={styles.button} onPress={ props.onPress }>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
    )
}