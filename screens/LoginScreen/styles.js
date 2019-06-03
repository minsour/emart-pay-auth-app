import { StyleSheet, Dimensions } from "react-native";
const DIMENSIONS_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  logoContainer: {
    flex: 4,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 240,
    height: 45,
    resizeMode: 'contain'
  },
  button :{
    flex: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  bottom: {
    flex: 1
  },
  createButton: {
    width:250,
    height:40,
    backgroundColor:"#030066",
    margin:15
  },
  importButton:{
    width:250,
    height:40,
    backgroundColor:"#fff",
    margin:15
  },
  list: {
    flex: 7,
    marginTop: -40,
    alignItems: 'center',
    justifyContent: 'center',
    width: DIMENSIONS_WIDTH,
  },
  listTab: {
    //flex: 2.7,
    height: 35,
    paddingBottom: 23,
    flexDirection: "row",
    // backgroundColor: BG_COLOR,
    alignItems: "center",
    width: DIMENSIONS_WIDTH,
    // borderBottomWidth: 1,
    // borderColor: "#858585",
    paddingLeft: 40
  },
  listBody: {
    flex: 20,
    // backgroundColor: BG_COLOR,
    alignItems: "center",
    justifyContent: "center",
    width: DIMENSIONS_WIDTH - 90,
    borderWidth: 1,
    borderColor: '#858585'
  },
  tabButton: {
    marginLeft:5,
    paddingRight:14,
    paddingLeft:14,
    paddingTop:8,
    paddingBottom:8,
    marginBottom:-10
  },
  selectedFont: {
    fontSize: 20,
    fontWeight: "900",
    color:'#FAB400'
  },
  unselectedFont: {
    fontSize: 18,
    fontWeight: "100",
    color: "#4c4c4c"
  },
});
