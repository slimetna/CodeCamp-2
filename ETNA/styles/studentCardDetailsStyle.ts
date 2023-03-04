import { StyleSheet } from "react-native";

export const studentCardDetailsStyle = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignContent: "center",
    flexDirection: "column",
    height: "97.5%",
    backgroundColor: "#fff",
    padding: 10,
    margin: 9,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 90,
    borderRadius: 10,
  },
  containerMain: {
    flexDirection: "row",
  },
  containerMainText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 5,
    alignItems: "center",
    height: 90,
  },
  nameText: {
    textAlign: "right",
    fontFamily: "RobotoSlab-Regular",
    fontSize: 15,
  },
  nameTextV2: {
    textAlign: "right",
    fontFamily: "RobotoSlab-Regular",
    fontSize: 13,
  },
  login: {
    textAlign: "left",
    fontFamily: "RobotoSlab-SemiBold",
  },
  trait: {
    width: "100%",
    height: 2,
    backgroundColor: "#E5E5E5",
    marginTop: 15,
  },
  absenceText: {
    textAlign: "left",
    fontFamily: "RobotoSlab-Regular",
    fontSize: 15,
    marginTop: 10,
    color: "#AAAAAA",
  },
  retardText: {
    textAlign: "left",
    fontFamily: "RobotoSlab-Regular",
    fontSize: 15,
    color: "#AAAAAA",
  },
  retardContainer: {
    height: 540,
    flexDirection: "column",
    borderWidth: 2,
    backgroundColor: "#F5F5F5",
    borderColor: "#E5E5E5",
    borderTopRightRadius: 10,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
  },
  retardMainText: {
    textAlign: "center",
    fontFamily: "RobotoSlab-Regular",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 15,
  },
  punctualityContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  filterButtonActive: {
    borderWidth: 2,
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: "#E5E5E5",
    borderBottomWidth: 0,
    padding: 2,
    marginRight: 5,
    zIndex: 1,
  },
  filterButtonInactive: {
    borderWidth: 2,
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: "#E5E5E5",
    borderBottomWidth: 0,
    padding: 2,
    marginRight: 5,
    zIndex: 1,
    opacity: 0.5,
  },
  runButtonStyle: {
    borderWidth: 2,
    margin: 5,
    marginLeft: 11,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    borderColor: "#E5E5E5",
    height: 30,
    padding: 2,
    zIndex: 1,
  },
});
