import { StyleSheet, Dimensions } from "react-native";
const DIMENSIONS_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    width: DIMENSIONS_WIDTH,
    padding: 25
  },
  top: {
    height: '17%',
    flexDirection: 'row'
  },
  bottom: {
    height: '27%'
  },
  left: {
    flex: 1
  },
  right: {
    flexDirection: 'row-reverse',
    flex: 1
  },
  photo: {
    width: '100%',
    height: '300%',
    // position: 'absolute',
    // right: 0,
    // bottom: 0,
    // top: 0,
  },
});
