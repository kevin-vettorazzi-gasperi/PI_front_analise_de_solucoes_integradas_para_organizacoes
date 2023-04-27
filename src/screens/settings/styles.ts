import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    paddingTop: 20,
    alignSelf: "center",
    color: theme.colors.primary_black,
    fontSize: 30,
    fontFamily: 'Mogra-Regular',
    textAlign: "center",
  },
  buttons: {
    marginTop: 110,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  }
})