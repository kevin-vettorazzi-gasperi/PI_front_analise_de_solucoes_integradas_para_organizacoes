import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ButtonStandardProps {
    title: string
    onPress: () => void
    isRedButton?: boolean
    
}
export function ButtonStandard({title, onPress, isRedButton } : ButtonStandardProps) {

    return (
        <TouchableOpacity style={isRedButton? styles.buttonRed : styles.button}  onPress={ onPress }>
            <Text style={isRedButton? styles.buttonRedText : styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}