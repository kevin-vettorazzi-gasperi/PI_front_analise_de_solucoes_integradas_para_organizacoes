import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary_white,
      flex: 1,
      alignItems: 'center',
    },
    title: {
      marginTop: 20,
      marginBottom: 20,
      fontSize: 30,
      color: theme.colors.primary_black,
      fontFamily: 'Mogra-Regular',
    },
    flatlistView: {
      width: '80%',
      height: '100%',
    },
   
    viewInput: {
      position: "absolute",
      bottom: 60,
      height: 50,
      flexDirection: 'row',
    }
  })