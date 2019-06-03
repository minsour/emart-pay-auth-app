import { StyleSheet, Dimensions } from "react-native";
const DIMENSIONS_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  imageContainer: {
    height: '90%'
  },
  buttonContainer: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: "#FAB400",
    borderRadius: 15,
    width: DIMENSIONS_WIDTH - 80,
    height: 50,
    marginTop: -20,
    marginBottom:-3,
    justifyContent: 'center'
  },
  buttonFont: {
    color: 'white'
  }
});
