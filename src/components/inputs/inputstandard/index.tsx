import { Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface CircularButtonProps {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}
export function InputStandard(props: CircularButtonProps) {

    return (
        <TextInput
            placeholderTextColor={'black'}
            placeholder={props.placeholder}
            style={styles.textInput}
            value={props.value}
            onChangeText={props.onChange}
        />
    )
}