import { StyleSheet, Dimensions } from 'react-native';
const DIMENSIONS_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  // container: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  // },
  container: {
    // flex: 0.5,
    width: DIMENSIONS_WIDTH,
    alignItems: 'center'
  },
  listBody: {
    height: 300,
    // backgroundColor: BG_COLOR,
    alignItems: "center",
    width: DIMENSIONS_WIDTH - 90,
    borderWidth: 1,
    borderColor: '#858585'
  },
  bodyContainer: {
    flex: 5,
    width: DIMENSIONS_WIDTH,
    alignItems: 'center'
  },
  inputContainer: {
    // backgroundColor: BG_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: DIMENSIONS_WIDTH,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: DIMENSIONS_WIDTH,
    marginTop: 60,
  },
  textInputContainer: {
    width: DIMENSIONS_WIDTH - 100
  },
  radioContainer: {
    flexDirection: 'row',
    height: 50,
    marginTop: -30,
    marginLeft: 10,
    alignSelf: 'flex-start'
  },
  radioButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
    marginRight: 6
  },
  bottomContainer: {
    flex: 3,
    width: DIMENSIONS_WIDTH,
    alignItems: 'center',
  },
  amountInput: {
    margin: 15,
    backgroundColor: "#fff",
    width: DIMENSIONS_WIDTH - 150,
  },
  accountInput: {
    margin: 30,
    backgroundColor: '#fff',
    width: DIMENSIONS_WIDTH - 150,
    marginBottom: -3,
    marginTop: 25
  },
  button: {
    backgroundColor: "#FAB400",
    borderRadius: 15,
    width: DIMENSIONS_WIDTH - 160,
    height: 55,
    marginTop: -20,
    marginBottom:-3,
    justifyContent: 'center'
  },
  buttonFont: {
    color: "#fff",
    fontSize: 17,
  },
  notButton: {
    backgroundColor: "#d5d5d5",
    borderRadius: 15,
    width: DIMENSIONS_WIDTH - 160,
    height: 55,
    marginTop: -20,
    marginBottom:-3,
    justifyContent: 'center'
  },
  notButtonFont: {
    fontSize: 17,
    color: "grey"
  },
  label: {
    fontSize: 14,
    color: "#a6a6a6",
    marginLeft: 12,
    marginBottom:-13
  },
  summaryFont: {
    fontSize: 20,
    margin: 15,
    marginBottom: -5,
  },
  feeSwitch: {
    marginTop: 15,
  },
  subscription: {
    marginTop: 18,
    width: DIMENSIONS_WIDTH - 60,
    borderBottomColor: "#4c4c4c",
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  total: {
    flexDirection: 'row',
  },
  totalText: {
    fontSize: 14,
    width: 100,
    marginRight: DIMENSIONS_WIDTH - 360
  },
  totalNumber: {
    fontSize: 14,
    width: 150,
    textAlign: 'right',
    paddingRight: 5
  },
  totalSymbol: {
    fontSize: 14,
    width: 40,
    color: "#4c4c4c"
  },
  transfer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  transferText: {
    fontSize: 14,
    width: 100,
    marginRight: DIMENSIONS_WIDTH - 360
  },
  transferNumber: {
    fontSize: 14,
    width: 150,
    textAlign: 'right',
    paddingRight: 5
  },
  transferSymbol: {
    fontSize: 14,
    width: 40,
    color: "#4c4c4c"
  },
  gasfee: {
    flexDirection: 'row',
    marginTop: 4,
  },
  gasfeeText: {
    fontSize: 14,
    width: 100,
    marginRight: DIMENSIONS_WIDTH - 360
  },
  gasfeeNumber: {
    fontSize: 14,
    width: 150,
    textAlign: 'right',
    paddingRight: 5
  },
  gasfeeSymbol: {
    fontSize: 14,
    width: 40,
    color: "#4c4c4c"
  },
  balance: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 12
  },
  balanceText: {
    fontSize: 14,
    width: 100,
    marginRight: DIMENSIONS_WIDTH - 360
  },
  balanceNumber: {
    fontSize: 14,
    width: 150,
    textAlign: 'right',
    paddingRight: 5
  },
  balanceSymbol: {
    fontSize: 14,
    width: 40,
    color: "#4c4c4c"
  },
  cancleFont: {
    color: '#a6a6a6',
    margin: 50
  },
  addFont: {
    margin: 50
  }
});