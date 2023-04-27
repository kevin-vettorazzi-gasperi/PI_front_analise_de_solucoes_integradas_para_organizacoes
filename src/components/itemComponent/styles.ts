import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
      width: '100%',
      minHeight: 50,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: theme.colors.primary_grey,
      padding: 15,
      marginBottom: 10,
    },
    buttonContainer: {
      backgroundColor: theme.colors.primary_white,
      position: 'absolute',
      left: 10,
      top: 12,
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewButton: {
      width: 20,
      height: 20,
      borderWidth: 1,
      borderRadius:10
    },
    viewText: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 20,
      // backgroundColor: 'purple',
    
    },
    text: {
      fontSize: 15,
      color: 'black',
    }
  })