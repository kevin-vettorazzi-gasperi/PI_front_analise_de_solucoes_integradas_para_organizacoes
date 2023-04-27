import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        backgroundColor: theme.colors.primary_red,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: theme.colors.primary_white,
        fontSize: 24,
        fontFamily: 'Mogra-Regular',
    }
})
