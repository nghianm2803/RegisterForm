import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { SignupSchema } from "./validation";
import { styles } from "./style";
import FormField from "./FormField";

export default function App() {
  function onSubmitHandler(values) {
    Alert.alert(
      "Register successfull!!!",
      "From data: " + JSON.stringify(values)
    );
  }

  function isFormValid(isValid, touched) {
    return isValid && Object.keys(touched).length !== 0;
  }

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
            <KeyboardAwareScrollView
              extraScrollHeight={200}
              style={styles.content}
              keyboardShouldPersistTaps="handled"
            >
              <Formik
                initialValues={{
                  username: "",
                  password: "",
                  email: "",
                  phone: "",
                  address: "",
                  description: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={onSubmitHandler}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                  isValid,
                }) => (
                  <>
                    <FormField
                      label="Username"
                      field="username"
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      values={values}
                      errors={errors}
                      touched={touched}
                    />

                    <FormField
                      label="Password"
                      field="password"
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      values={values}
                      errors={errors}
                      touched={touched}
                    />

                    <FormField
                      label="Email"
                      field="email"
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      values={values}
                      errors={errors}
                      touched={touched}
                    />

                    <FormField
                      label="Phone"
                      field="phone"
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      values={values}
                      errors={errors}
                      touched={touched}
                    />

                    <FormField
                      label="Address"
                      field="address"
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      values={values}
                      errors={errors}
                      touched={touched}
                    />

                    <TouchableOpacity
                      disabled={!isFormValid(isValid, touched)}
                      onPress={handleSubmit}
                    >
                      <View
                        style={[
                          styles.buttonRegister,
                          {
                            opacity: isFormValid(isValid, touched) ? 1 : 0.5,
                          },
                        ]}
                      >
                        <Text style={styles.buttonRegisterText}>Register</Text>
                      </View>
                    </TouchableOpacity>
                  </>
                )}
              </Formik>
            </KeyboardAwareScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}
