import { StyleSheet, StatusBar } from "react-native";
import { DIMENSIONS_HEIGHT, DIMENSIONS_WIDTH } from "../../constants/dementions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: DIMENSIONS_WIDTH,
    height: DIMENSIONS_HEIGHT
  },
  userBody: {
    flex: 28,
    alignItems: "center",
    justifyContent: "center",
    width: DIMENSIONS_WIDTH
  },
  searchBarContainer: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: DIMENSIONS_WIDTH,
    marginTop: StatusBar.currentHeight - 4
  },
  searchBar: {
    backgroundColor: "#fff",
    elevation: 0,
    flex: 6,
    height: '85%',
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
  },
  searchBarRight: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    height: '85%',
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
  },
  searchRightFont: {
    color: '#8041d9',
    fontSize: 15
  },
  loadingContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    width: DIMENSIONS_WIDTH,
    height: DIMENSIONS_HEIGHT
  },
  description: {
    marginTop: 16,
    color: "#fff",
    fontSize: 16
  },
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});