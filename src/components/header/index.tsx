import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface HeaderProps {
    text: string;
}
export function HeaderStandard(item: HeaderProps) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.text}</Text>
        </View>
    )
}