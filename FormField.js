import React from "react";
import { Text, View, TextInput } from "react-native";
import { styles } from "./style";

export default function FormField({
  label,
  field,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
}) {
  return (
    <View>
      <Text style={styles.inputText}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#cdcdcf"
        onChangeText={handleChange(field)}
        onBlur={handleBlur(field)}
        value={values[field]}
      />
      {errors[field] && touched[field] ? (
        <Text style={{ color: "red", marginLeft: 12 }}>{errors[field]}</Text>
      ) : null}
    </View>
  );
}
