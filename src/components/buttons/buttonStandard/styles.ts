import { StyleSheet } from "react-native";
import theme from "../../../global/styles/theme";

export const styles = StyleSheet.create({
  button: {
    width: '80%',
    height: 50,
    borderRadius: 8,
    backgroundColor: theme.colors.primary_white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRed:{
    width: '80%',
    height: 50,
    borderRadius: 8,
    backgroundColor: theme.colors.primary_red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Mogra-Regular',
    color: theme.colors.primary_black,
    fontSize: 26,
  },
  buttonRedText: {
    fontFamily: 'Mogra-Regular',
    color: theme.colors.primary_white,
    fontSize: 26,
  }
})