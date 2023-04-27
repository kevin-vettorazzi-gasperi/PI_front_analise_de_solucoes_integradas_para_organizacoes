import { StyleSheet } from "react-native";
import theme from "../../../global/styles/theme";

export const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: theme.colors.primary_red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  }
})