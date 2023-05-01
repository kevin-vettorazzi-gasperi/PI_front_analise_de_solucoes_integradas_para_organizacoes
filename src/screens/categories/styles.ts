import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: theme.colors.primary_white,
    alignItems: 'center',
    paddingBottom: 20
  },
  container: {
    backgroundColor: theme.colors.primary_white,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    alignSelf: 'center',
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
    height: 60,
    flexDirection: 'row',
  },
  modalView: {
    width: '90%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  viewButtonsModal: {
    flexDirection: "row",
    width: 150,
    justifyContent: "space-between"
  }
})