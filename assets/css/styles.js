/** @format */

import { StyleSheet, I18nManager } from "react-native";
import { COLORS } from "../../src/constant/Colors";
import { FONTS } from "../../src/constant/Font";
const isAndroidRTL = I18nManager.isRTL && Platform.OS === "android";
import { Dimensions } from "react-native";
const GlobalStyles = StyleSheet.create({
  /** intorslider css **/
  flexOne: {
    flex: 1,
    backgroundColor: COLORS.theme,
  },
  flatList: {
    flex: 1,
    flexDirection: isAndroidRTL ? "row-reverse" : "row",
  },
  paginationContainer: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
  },
  skipContainer: {
    right: 16,
    marginTop: 50,
    flex: 0.05,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: isAndroidRTL ? "row-reverse" : "row",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  leftButtonContainer: {
    position: "absolute",
    backgroundColor: "#F7F9FA",
    top: 0,
    right: 0,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  rightButtonContainer: {
    position: "absolute",
    backgroundColor: COLORS.button,
    right: 0,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    color: COLORS.white,
  },
  bottomButton: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, .3)",
    alignItems: "center",
    justifyContent: "center",
  },
  transparentBottomButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextSkip: {
    color: COLORS.button,
    fontSize: 15,
    padding: 5,
    fontFamily: FONTS.Medium,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 15,
    padding: 8,
    fontFamily: FONTS.Medium,
  },
  /** intorslider css - Ends **/
  mainContainer: {
    alignItems: "center",
    margin: 0,
    padding: 40,
  },

  signupContainer: {
    flex: 1,
    width: "100%",
    margin: 0,
    padding: 0,
  },
  backgrey: {
    paddingHorizontal: 35,
    paddingBottom: 28,
  },
  signupTitle: {
    backgroundColor: "#fff",
    width: "100%",
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 18,
  },
  signupTitleStyle: {
    fontFamily: FONTS.SemiBold,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 20,
  },
  signupParagraph: {
    textAlign: "left",
    paddingTop: 20,
    paddingLeft: 18,
    paddingBottom: 29,
    fontSize: 12,
    fontFamily: FONTS.Medium,
    color: "#546471",
    lineHeight: 15,
  },
  signupInputContainer: {
    backgroundColor: COLORS.white,
  },
  signupTextInput: {
    fontSize: 16,
  },
  signupPasswordInput: {
    fontSize: 16,
    width: "85%",
  },
  signupInputContainerButton: {
    padding: 10,
    paddingLeft: 35,
    paddingRight: 35,
    backgroundColor: COLORS.white,
    fontSize: 16,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  container: {
    marginTop: 60,
  },
  inputView: {
    marginBottom: 20,
  },
  logo: {
    paddingTop: 0,
    marginTop: 20,
    width: 185,
    height: 120,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: COLORS.textInputBorder,
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    padding: 5,
    marginBottom: 10,
    paddingLeft: 10,
    height: 45,
  },
  imageIcon: {
    // width: '100%',
    //height: 40,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageBox: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    width: 110,
    height: 60,
    backgroundColor: "#F7F9FA",
    borderRadius: 6,
  },
  logoIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 10,
    height: 10,
    //backgroundColor: '#F7F9FA',
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
  titleStyle: {
    textAlign: "center",
    fontSize: 22,
    marginTop: 0,
    marginBottom: 9,
    // fontFamily: FONTS.Bold,
  },
  paragraphStyle: {
    marginBottom: 25,
    textAlign: "center",
    fontSize: 15,
    color: COLORS.loginText,
    fontFamily: FONTS.Regular,
  },
  TextInput: {
    fontSize: 16,
  },
  passwordIcon: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 0,
    textAlign: "right",
  },
  passwordInput: {
    width: "80%",
    fontSize: 15,
  },
  labelText: {
    fontSize: 12,
    paddingBottom: 2,
    color: COLORS.loginTextInput,
    fontFamily: FONTS.Medium,
  },
  forgot_button: {
    textAlign: "right",
    color: COLORS.button,
    fontFamily: FONTS.Medium,
  },
  loginBtn: {
    width: "100%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.button,
    marginTop: 27,
    marginBottom: 56,
    borderRadius: 6,
  },
  loginText: {
    width: "100%",
    color: COLORS.white,
    fontFamily: FONTS.Medium,
    textAlign: "center",
    padding: 10,
  },
  labelSignin: {
    marginBottom: 26,
    textAlign: "center",
    fontFamily: FONTS.Regular,
    color: "#7B868A",
  },
  newSignup: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 12,
  },
  account: {
    color: "#7B868A",
    fontFamily: FONTS.Regular,
  },
  new_sign: {
    color: COLORS.button,
    fontFamily: FONTS.Regular,
  },

  frontcontainer: {
    flex: 1,
    backgroundColor: COLORS.theme,
    alignItems: "center",
    //padding: 10,
    justifyContent: "center",
  },
  // titleStyle: {
  //   padding: 10,
  //   textAlign: 'center',
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
  paragraphStyle: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
  introImageStyle: {
    width: 350,
    height: 450,
  },
  introTextStyle: {
    fontSize: 16,
    color: COLORS.introText,
    fontFamily: FONTS.Regular,
    textAlign: "center",
    marginTop: 40,
  },
  introTitleStyle: {
    fontSize: 20,
    fontFamily: FONTS.Bold,
    color: COLORS.introText,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 0,
    paddingBottom: 5,
    marginTop: 40,
  },

  /*** dashboard css **/
  dahboardHeader: {
    backgroundColor: COLORS.button,
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  width100: {
    width: "100%",
  },
  width: {
    width: 300,
  },
  flexRow: {
    flexDirection: "row",
  },
  alignCenter: {
    alignItems: "center",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  textWhite: {
    color: "#fff",
  },
  font12: {
    fontSize: 12,
    lineHeight: 15,
  },
  fontBold: {
    fontWeight: "700",
  },
  fontSemi: {
    fontWeight: "700",
  },
  dashboardLogo: {
    width: 41,
    height: 41,
  },
  sidemenuProfile: {
    width: 43,
    borderRadius: 43,
    height: 43,
  },
  unibicLogo: {
    width: 28,
    height: 28,
  },
  textCenter: {
    textAlign: "center",
  },
  width20: {
    width: "20%",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  marlft13: {
    marginLeft: 13,
  },
  marlft21: {
    marginLeft: 21,
  },
  notCount: {
    backgroundColor: COLORS.red,
    borderColor: COLORS.button,
    width: 9,
    height: 9,
    position: "absolute",
    borderRadius: 9,
    top: -2,
    right: 0,
    zIndex: 2,
    borderWidth: 1,
  },
  resizeContain: {
    resizeMode: "contain",
  },
  alignStart: {
    alignItems: "flex-start",
  },
  flex1: {
    flex: 1,
  },
  width50: {
    width: "50%",
  },
  padtop30: {
    paddingTop: 30,
  },
  marBtm4: {
    marginBottom: 4,
  },
  fontMed: {
    fontWeight: "500",
  },
  font18: {
    fontSize: 18,
    lineHeight: 21,
  },
  width60: {
    width: "60%",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  weekyDropDown: {
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 16,
    paddingVertical: 3.5,
    paddingLeft: 9,
    paddingRight: 26,
  },
  flexColumn: {
    flexDirection: "column",
  },
  popupOverlay: {
    backgroundColor: COLORS.overlayBG,
  },
  width300px: {
    width: 300,
  },
  marHorauto: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  textBlack: {
    color: COLORS.introText,
  },
  modalDropDown: {
    position: "absolute",
    right: 9,
    top: "50%",
    zIndex: 2,
  },
  grayBg: {
    backgroundColor: COLORS.grayBG,
  },
  pad20: {
    padding: 20,
  },
  pad25: {
    padding: 25,
  },
  padR7: {
    paddingRight: 7,
  },
  whiteBg: {
    backgroundColor: COLORS.white,
  },
  orderCol: {
    borderRadius: 8,
  },
  orderCircle: {
    backgroundColor: COLORS.CircleBG,
    width: 33,
    height: 33,
    borderRadius: 33,
  },
  mb16: {
    marginBottom: 16,
  },
  mb18: {
    marginBottom: 18,
  },
  textDefault: {
    color: COLORS.textInputBorder,
  },
  fontMed: {
    fontWeight: "500",
  },
  marBtm6: {
    marginBottom: 6,
  },
  textPri: {
    color: COLORS.button,
  },
  activeSKUBtn: {
    borderWidth: 1,
    borderColor: COLORS.ActiveSKUBorder,
    backgroundColor: COLORS.activeSKUBg,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  padL7: {
    paddingLeft: 7,
  },
  mr3: {
    marginRight: 3,
  },
  /*** dashboard css - Ends **/

  /*** Catalogue Screen css **/
  mr10: {
    marginRight: 10,
  },
  width80: {
    width: "80%",
  },
  padtop20: {
    paddingTop: 20,
  },
  tabActive: {
    backgroundColor: COLORS.white,
  },
  tabList: {
    paddingHorizontal: 11,
    paddingVertical: 9,
    borderRadius: 19,
  },
  font14: {
    fontSize: 14,
    lineHeight: 17,
  },
  tabwidth: {
    width: Dimensions.get("window").width - 20,
  },
  searchBarStyle: {
    backgroundColor: COLORS.white,
    shadowColor: 0,
    borderWidth: 1,
    borderColor: COLORS.searchBorderColor,
    borderRadius: 0,
    height: 38,
  },
  searchinput: {
    marginLeft: -25,
  },
  searchIcon: {
    position: "absolute",
    top: 13,
    left: 13,
  },
  filterBlk: {
    backgroundColor: COLORS.grayBG,
    width: 28,
    height: 25,
    top: 7,
    right: 7,
    position: "absolute",
    zIndex: 2,
  },
  catalogueCol: {
    paddingVertical: 25,
    paddingLeft: 13,
    paddingRight: 7,
    borderWidth: 1,
    borderColor: COLORS.searchBorderColor,
    marginBottom: 20,
  },
  catalogueLeft: {
    width: Dimensions.get("window").width - 114,
  },
  catalogueImg: {
    width: 78,
    height: 55,
  },
  mr8: {
    marginRight: 8,
  },
  mb2: {
    marginBottom: 2,
  },
  font10: {
    fontSize: 10,
    lineHeight: 12,
  },
  mb7: {
    marginBottom: 7,
  },
  textGreen: {
    color: COLORS.green,
  },
  pl2: {
    paddingLeft: 2,
  },
  cataloguergt: {
    width: 54,
  },
  stockView: {
    backgroundColor: COLORS.green,
    paddingVertical: 3.5,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  padR6: {
    paddingRight: 6,
  },
  padb80: {
    paddingBottom: 80,
  },
  sidemenuView: {
    width: 320,
  },
  sidemenuHeader: {
    backgroundColor: COLORS.button,
    paddingTop: 50,
    paddingLeft: 27,
    paddingRight: 30,
    paddingBottom: 35,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  font16: {
    fontSize: 16,
    lineHeight: 20,
  },
  padl15: {
    paddingLeft: 15,
  },
  sidemenuContent: {
    paddingTop: 22.5,
  },
  sidemenuMenu: {
    paddingVertical: 17.5,
    paddingLeft: 0,
    paddingRight: 18,
  },
  pl10: {
    paddingLeft: 10,
  },
  sidemenuFooter: {
    paddingLeft: 35,
  },
  sidemenuBorder: {
    borderTopWidth: 1,
    borderTopColor: COLORS.sidemnuBorder,
  },
  pb20: {
    paddingBottom: 20,
  },
  sidemenuOverlay: {
    position: "absolute",
    left: 0,
    Zindex: 1,
    width: Dimensions.get("window").width,
    height: "100%",
    top: 0,
  },
  padt50: {
    paddingTop: 50,
  },
  /*** Catalogue Screen css - Ends **/

  /*** splash Screen css **/
  primaryBg: {
    backgroundColor: COLORS.button,
  },
  /*** splash Screen css - Ends **/

  /*** add catalogue Screen css **/
  catalogueHeader: {
    paddingHorizontal: 17,
    paddingVertical: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  marlft17: {
    marginLeft: 17,
  },
  borderWhite: {
    borderColor: COLORS.white,
  },
  font15: {
    fontSize: 15,
    lineHeight: 19,
  },
  letterSpa33: {
    letterSpacing: 0.33,
  },
  saveBtn: {
    padding: 5,
    borderRadius: 6,
  },
  saveButtonFooter: {
    paddingHorizontal: 40,
    paddingVertical: 13,
    shadowColor: "#00000029",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 1,
    shadowRadius: 6,
    borderTopColor: "#00000029",
    borderTopWidth: 1,
  },
  saveButtonFooterLogin: {
    paddingHorizontal: 40,
    paddingVertical: 13,
    shadowColor: "#00000029",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  width33: {
    width: "33.33%",
  },
  pl4: {
    paddingLeft: 4,
  },
  pr4: {
    paddingRight: 4,
  },
  TabTextColor: {
    color: COLORS.tabtextColor,
  },
  tabBar: {
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.tabbarBG,
  },
  mb24: {
    marginBottom: 24,
  },
  pad16: {
    padding: 16,
  },
  mb4: {
    marginBottom: 4,
  },
  labelText: {
    color: COLORS.textInputBorder,
  },
  dragChooseFile: {
    padding: 15,
    backgroundColor: COLORS.DragBG,
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: COLORS.introText,
  },
  mb14: {
    marginBottom: 14,
  },
  borderRadius4: {
    borderRadius: 4,
  },
  mb20: {
    marginBottom: 20,
  },
  inputStyle: {
    borderColor: COLORS.textInputBorder,
    backgroundColor: COLORS.white,
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    height: 45,
    color: COLORS.loginTextInput,
  },
  textArae: {
    height: 67,
  },
  collapseCard: {
    borderWidth: 1,
    borderColor: COLORS.textInputBorder,
    padding: 15,
    borderRadius: 4,
    marginBottom: 19,
  },
  pt18: {
    paddingTop: 18,
  },
  borderActive: {
    borderColor: COLORS.button,
  },
  dnone: {
    display: "none",
  },
  rotateImg: {
    transform: [{ rotate: "180deg" }],
  },
  mb28: {
    marginBottom: 28,
  },
  font13: {
    fontSize: 13,
    lineHeight: 16,
  },
  catalogueForcheckbox: {
    padding: 13,
    borderWidth: 1,
    borderColor: COLORS.textInputBorder,
    borderRadius: 4,
    position: "relative",
  },
  mr10: {
    marginRight: 10,
  },
  checkboxBG: {
    backgroundColor: COLORS.checkboxBG,
  },
  checkboxTick: {
    position: "absolute",
    right: 4,
    top: 4,
  },
  mb12: {
    marginBottom: 12,
  },
  categoryImage: {
    width: 32,
    height: 32,
    borderRadius: 32,
  },
  /*** add catalogue Screen css - Ends **/

  /*** Dashboard Screen css **/
  categoryBlk: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  mb3: {
    marginBottom: 3,
  },
  padR8: {
    paddingRight: 8,
  },
  padL8: {
    paddingLeft: 8,
  },
  padR4: {
    paddingRight: 4,
  },
  padL4: {
    paddingLeft: 4,
  },
  recentuserImage: {
    width: 48,
    height: 48,
    borderRadius: 48,
  },
  AEDBtn: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  footerMenu: {
    shadowColor: "#00000015",
    shadowRadius: 12,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
    height: 70,
    paddingHorizontal: 8,
  },
  height70px: {
    height: 100,
  },
  footerActive: {
    position: "absolute",
    left: 0,
    top: -15,
    height: 2,
    Zindex: 2,
    width: 59,
  },
  pt8: {
    paddingTop: 8,
  },
  floatIcon: {
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "#00000029",
    shadowRadius: 3,
    fontSize: 20,
  },
  textCenter: {
    textAlign: "center",
  },
  mb44: {
    marginBottom: 44,
  },
  /*** Dashboard Screen css - Ends **/

  /*** Dashboard Screen css **/
  eyeIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 45,
    height: 45,
    zIndex: 2,
  },
  padR50: {
    paddingRight: 50,
  },
  /*** Dashboard Screen css - Ends **/

  /*** signup css **/
  befloginarrow: {
    position: "absolute",
    top: 44,
    left: 18,
    zIndex: 2,
  },
  width40: {
    width: "40%",
  },
  dragDropView: {
    borderColor: COLORS.introText,
    backgroundColor: COLORS.DragBG,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 4,
    padding: 15,
  },
  dragView: {
    backgroundColor: COLORS.dragboxBG,
    width: 65,
    height: 3,
  },
  rboverlayBG: {
    backgroundColor: COLORS.overlayBG,
  },
  rbContainer: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 9,
    paddingHorizontal: 40,
    paddingBottom: 40,
    height: 430,
  },
  font22: {
    fontSize: 22,
    lineHeight: 26,
  },
  uploadPercentage: {
    backgroundColor: COLORS.uploadBG,
    borderColor: COLORS.button,
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: "dashed",
    height: 73,
  },
  perBar: {
    height: 71,
    position: "absolute",
    left: 0,
    backgroundColor: COLORS.uploadedBG,
    borderRadius: 4,
  },
  cancelStyle: {
    borderWidth: 1,
    borderColor: COLORS.button,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    padding: 14,
  },
  headerShadow: {
    shadowColor: "#0000001A",
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
  },
  ph18: {
    paddingHorizontal: 18,
  },
  mt18: {
    marginTop: 18,
  },
  borderDefault: {
    borderColor: COLORS.searchBorderColor,
  },
  feedtextArae: {
    height: 84,
  },
  borderRadius0: {
    borderRadius: 0,
  },
  textred: {
    color: COLORS.red,
  },
  addPhotoCon: {
    borderColor: COLORS.searchBorderColor,
    width: 89,
    height: 79,
    borderWidth: 1,
  },
  /*** signup css - Ends **/

  /*** supplier profile css **/
  profileHeader: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  profilelogo: {
    width: 83,
    height: 83,
    borderRadius: 83,
    borderWidth: 3,
    borderColor: COLORS.searchBorderColor,
  },
  mb9: {
    marginBottom: 9,
  },
  editProfileBtn: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 19,
  },
  mb6: {
    marginBottom: 6,
  },
  profileprogressBg: {
    backgroundColor: COLORS.profileProgressBG,
    height: 4,
    borderRadius: 5,
  },
  progressBar: {
    height: 4,
    borderRadius: 5,
    position: "absolute",
    top: 0,
    left: 0,
  },
  profileContainer: {
    paddingHorizontal: 17,
    paddingVertical: 29,
  },
  borderLeftnone: {
    borderLeftWidth: 0,
  },
  mb30: {
    marginBottom: 30,
  },
  homeContainerBlk: {
    borderColor: COLORS.searchBorderColor,
    borderWidth: 1,
    padding: 15,
  },
  addHomeView: {
    borderColor: COLORS.button,
    borderWidth: 1,
    backgroundColor: COLORS.homeBg,
    borderRadius: 11,
    paddingVertical: 2,
    paddingHorizontal: 7,
  },
  pr15: {
    paddingRight: 15,
  },
  pl15: {
    paddingLeft: 15,
  },
  underline: {
    textDecorationLine: "underline",
  },
  uploadCsv: {
    borderColor: COLORS.button,
    paddingHorizontal: 25,
    paddingVertical: 25,
    backgroundColor: COLORS.chooseFileBG,
  },
  /*** supplier profile css - Ends **/

  /*** forgot Password css **/
  mb50: {
    marginBottom: 50,
  },
  mb37: {
    marginBottom: 37,
  },
  errorMsg: {
    color: "#EA375A",
    fontSize: 12,
    lineHeight: 15,
  },
  /*** forgot Password css - Ends **/

  //anil

  colorRed: {
    color: "red",
  },
  colorBlue: {
    color: "#25385F",
  },
  colorOne: {
    color: "#617191",
  },
  colorTwo: {
    color: "#1F222F",
  },

  changeFlexDirection: {
    flexDirection: "row",
  },
  paddingThree: {
    // paddingTop: 10,`
    paddingTop: 5,
  },
  paddingFour: {
    // paddingTop: 10,
    paddingTop: 3,
  },
  paddingTwo: {
    paddingTop: 2,
  },
  marginTopFive: {
    marginTop: 12,
  },
  marginTopSeven: {
    marginTop: 7,
  },
  marginTopSix: {
    marginTop: 20,
  },
  flexOne: {
    flex: 1,
  },
  flexTwo: {
    flex: 4,
  },
  orderContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    margin: 0,
    padding: 0,
    backgroundColor: "#F2F7FC",
  },
  headerContainer: {
    backgroundColor: "#1F9CEF",
    width: "100%",
    height: 147,
  },
  headerAligment: {
    marginTop: 41,
    marginLeft: 19,
    marginRight: 17,
  },
  headerDirection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuText: {
    paddingLeft: 20,
    color: "#FFFFFF",
    fontSize: 16,

    //  fontFamily:InterMedium,
  },
  orderTabDirection: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 22,
  },
  orderTabTextView: {
    width: 115,
    marginLeft: 22,
    backgroundColor: "#FFFFFF",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 19,
  },
  allOrderView: {
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 15,
    paddingRight: 14,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
  },
  allOrderOnpressText: {
    fontSize: 14,
    color: "#1F9CEF",
  },
  allOrderText: {
    fontSize: 14,
    color: "#FFFFFF",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 15,
    paddingRight: 14,
    borderRadius: 30,
  },
  prendingAccecptance: {
    marginLeft: 20,
  },
  pendingAcceptanceOnpressView: {
    backgroundColor: "#FFFFFF",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 14,
    paddingRight: 15,
    borderRadius: 30,
  },
  pendingAcceptanceView: {
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 14,
    paddingRight: 15,
  },
  pendingOnPressText: {
    color: "#1F9CEF",
  },
  pendingText: {
    color: "#FFFFFF",
  },
  searchBar: {
    alignItems: "center",
    paddingLeft: 19,
    backgroundColor: "black",
  },
  searchInput: {
    fontSize: 12,
    // lineHeight: 38,
    marginLeft: -13,
    height: 38,
  },
  searchContainer: {
    backgroundColor: "#FFFFFF",
    borderColor: "#DCDCDC",
    height: 38,
  },
  promotionsHeaderContainer: {
    backgroundColor: "#1F9CEF",
    width: "100%",
    height: 81,
  },
  promotionsHeaderText: {
    paddingLeft: 20,
    color: "#FFFFFF",
    fontSize: 16,
    alignItems: "center",
  },
  cardView: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 130,
    borderColor: "#DCDCDC",
    borderWidth: 1,
  },
  innerDimension: {
    paddingTop: 23,
    paddingLeft: 24.18,
    paddingRight: 15.24,
  },
  cardText: {
    fontSize: 12,
    color: "#0F141A",
    lineHeight: 15,
  },
  subText: {
    fontSize: 10,
    lineHeight: 12,
  },
  addButton: {
    position: "absolute",
    bottom: 58,
    right: 18,
    width: 64,
    height: 64,
    backgroundColor: "#1F9CEF",

    alignItems: "center",
    borderRadius: 50,
    alignSelf: "center",
    shadowColor: "#00000029",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  stictyText: {
    color: "#FFFFFF",
    fontSize: 39,
  },
  allOrderCardcardView: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 130,
    borderColor: "#DCDCDC",
    borderWidth: 1,
    marginBottom: 20,
    // marginTop: 10,
  },
  allOrderCardInnerDimension: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 15.24,
  },
  allOrdersImage: {
    width: 43,
    height: 43,
    marginLeft: 10,
    marginRight: 10,
  },
  textView: {
    marginLeft: 10,
    width: "65%",
  },
  justifyContent: {
    justifyContent: "space-between",
  },
  imagePadding: {
    paddingTop: 1.5,
  },
  orderCardHeading: {
    color: "#0F141A",
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 15,
  },
  outletText: {
    color: "#617191",
    fontSize: 10,
    lineHeight: 12,
    paddingTop: 2,
  },
  orderPaid: {
    height: 19,
    width: 45,
    borderRadius: 12,
    // backgroundColor: "#36B152",
    backgroundColor: "red",
    borderWidth: 1,
    // borderColor: "#36B152",
    borderColor: "red",
  },
  orderPaidStatus: {
    height: 19,
    width: 45,
    borderRadius: 12,
    backgroundColor: "#36B152",
    borderWidth: 1,
    borderColor: "#36B152",
  },
  paidText: {
    color: "#FFFFFF",
    fontSize: 10,
    textAlign: "center",
  },
  ratingView: {
    // marginTop: 7.5,
    marginTop: 5,
    paddingRight: 1,
  },
  ratingPadding: {
    paddingRight: 5,
  },
  emailText: {
    color: "#36B152",
    fontSize: 10,
    lineHeight: 12,
  },
  orderActiveView: {
    paddingLeft: 25,
  },
  bottomLineOrderCared: {
    flexDirection: "row",
    paddingLeft: 74,
    justifyContent: "space-between",
    // alignItems: "center",
    // marginTop: 5,
    marginTop: 3,
  },
  aedValueText: {
    color: "#153E73",
    fontWeight: "bold",
    fontSize: 14,
  },
  getTimeText: {
    color: "#617191",
    fontSize: 10,
    lineHeight: 12,
    paddingLeft: 50,
  },
  bottomPendingText: {
    flexDirection: "row",
    paddingLeft: 74,
    justifyContent: "space-between",
    marginTop: 5,
    paddingRight: 20,
  },
  paymentdueText: {
    color: "#617191",
    fontSize: 10,
    lineHeight: 12,
    paddingLeft: 25,
  },
  acticeView: {
    justifyContent: "center",
    paddingRight: 3,
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  orderDetailcontainer: {
    backgroundColor: "#F2F7FC",
  },
  headerDetailOrderView: {
    backgroundColor: "#1F9CEF",
    width: "100%",
    height: 277,
    paddingTop: 39,
    paddingLeft: 19,
  },
  headingRowDelivery: {
    flexDirection: "row",
    marginLeft: 22,
    marginTop: 17,
    alignItems: "center",
  },
  deliveryTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 21,
  },
  tabView: {
    marginTop: 19,
    marginLeft: 22,
  },
  orderDetailPaidStatus: {
    marginTop: 22,
    height: 24,
    width: 67,
    borderRadius: 16,
    backgroundColor: "#36B152",
    // backgroundColor: "red",
    borderWidth: 1,
    borderColor: "#36B152",
    // borderColor: "red",
    justifyContent: "center",
  },
  orderDetailPaidStatusColor: {
    borderColor: "red",
    backgroundColor: "red",
  },
  paidTextOrderDetail: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "center",
  },
  orderNumberText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 12.5,
    lineHeight: 21,
  },
  orderTitle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 17,
    lineHeight: 20,
  },
  orderOutlet: {
    color: "#E2E6EF",
    fontSize: 10,
    lineHeight: 12,
    marginTop: 3,
  },
  orderDetailCardOne: {
    height: 38,
    width: "100%",
    paddingLeft: 19,
    paddingRight: 18,
    marginTop: 19,
    backgroundColor: "red",
  },
  orderDetailCardGlobalView: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderColor: "#DCDCDC",
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 6,
  },
  orderDetailCardOneHeight: {
    height: 124,
  },
  orderDetailCardTwoHeight: {
    height: 72,
  },
  orderDetailCardThreeHeight: {
    height: 271,
  },
  onPressMarkReceived: {
    borderRadius: 6,
    backgroundColor: "#1F9CEF",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  onPressReceived: {
    borderRadius: 6,
    backgroundColor: "#1F9CEF",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
  },
  onPressedOrderText: {
    fontSize: 16,
    color: "#FFFFFF",
    lineHeight: 20,
  },
  cardThreeView: {
    marginTop: 18,
    marginLeft: 17,
    marginRight: 17,
    marginBottom: 18,
    // backgroundColor: "red",
  },
  orderDetailCardHeading: {
    fontSize: 12,
    lineHeight: 15,
    color: "#25385F",
    fontWeight: "bold",
  },
  orderDetailCardText: {
    fontSize: 10,
    lineHeight: 18,
    color: "#1F222F",
  },
  bottomLineOrderCared1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editView: {
    height: 19,
    width: 43,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E73B42",
  },
  editText: {
    color: "#E73B42",
    fontSize: 10,
    textAlign: "center",
  },
  requiredIconPadding: {
    paddingLeft: 3,
  },
  positionalAbsoluteCard: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderColor: "#DCDCDC",
    borderWidth: 1,
    borderRadius: 9,
    height: 30,
    position: "absolute",
    left: 19,
    top: -60,
  },
  positionalAbsoluteCardView: {
    // marginTop: 22,
    marginLeft: 19,
    marginRight: 15,
    marginBottom: 12,
    // backgroundColor: "red",
  },
  orderDetailPositionText: {
    fontSize: 10,
    lineHeight: 12,
    color: "##1F222F",
  },
  orderAmountText: {
    color: "#25385F",
    fontSize: 19,
    lineHeight: 23,
    fontWeight: "bold",
  },
  orderDetailCardInnerDimension: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 15.24,
    paddingBottom: 19,
  },
  orderCardflexView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
  },
  orderDetailAedText: {
    color: "#153E73",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
  },
  addSubView: {
    width: 60,
    height: 25,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    borderRadius: 4,
    marginRight: 10,
    flexDirection: "row",
  },
  addSubViewOne: {
    flexDirection: "row",
    justifyContent: "center",
  },
  addSubViewTwo: {
    borderRightWidth: 1,
    width: 20,
    alignItems: "center",
    borderColor: "#DCDCDC",
  },
  addSubViewFour: {
    width: 20,
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "#1F9CEF",
  },

  //anil
});

export default GlobalStyles;
