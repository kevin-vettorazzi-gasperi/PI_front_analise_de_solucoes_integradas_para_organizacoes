import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
    title: {
        paddingTop: 90,
        alignSelf: "center",
        color: theme.colors.primary_black,
        fontSize: 30,
        fontFamily: 'Mogra-Regular',
        textAlign: "center",
    },
    description : {
        margin: 20,
        alignSelf: "center",
        color: theme.colors.primary_black,
        fontSize: 20,
        fontFamily: 'Mogra-Regular',
        textAlign: "center",
    },
    inputsToLogin: {
        marginTop: 110,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
 })