import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
    title: {
        paddingTop: 90,
        alignSelf: "center",
        color: theme.colors.primary_black,
        fontSize: 40,
        fontFamily: 'Mogra-Regular',
        textAlign: "center",
    },
    inputsToLogin: {
        marginTop: 110,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    textRegister :{
        color: theme.colors.primary_red,
        fontSize: 18
    }
 })