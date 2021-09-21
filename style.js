import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  form: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cdcdcf",
    color: "#333333",
    fontSize: 16,
    width: 300,
    height: 44,
    paddingHorizontal: 15,
    margin: 10,
  },
  inputText: {
    paddingHorizontal: 15,
  },
  buttonRegister: {
    height: 42,
    backgroundColor: "#2980b9",
    borderRadius: 6,
    justifyContent: "center",
    marginVertical: 15,
  },
  buttonRegisterText: {
    color: "#b4cafb",
    textAlign: "center",
    fontSize: 16,
  },
});
