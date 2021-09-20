import { StatusBar } from "expo-status-bar";
import React from "react";
import Constants from "expo-constants";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Register</Text>
          </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAwareScrollView extraScrollHeight={200} style={styles.content}>
              <View style={styles.form}>
                <Text style={styles.inputText}>Username</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="#cdcdcf"
                />
                <Text style={styles.inputText}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#cdcdcf"
                />
                <Text style={styles.inputText}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#cdcdcf"
                />
                <Text style={styles.inputText}>Phone</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Phone"
                  placeholderTextColor="#cdcdcf"
                />
                <Text style={styles.inputText}>Address</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Address"
                  placeholderTextColor="#cdcdcf"
                />
                <Text style={styles.inputText}>Description</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Description"
                  placeholderTextColor="#cdcdcf"
                />
                <TouchableOpacity style={styles.buttonRegister}>
                  <Text style={styles.buttonRegisterText}>Register</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAwareScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
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
    padding: 22,
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
    backgroundColor: "#1977f3",
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
