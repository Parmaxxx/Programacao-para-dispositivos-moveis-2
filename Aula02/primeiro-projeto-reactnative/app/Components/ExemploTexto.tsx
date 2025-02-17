import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const ExemploTexto = () => {
  const [text, onChangeText] = React.useState("Digite um texto");
  const [number, onChangeNumber] = React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="digite um número"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default ExemploTexto;
