import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const TesteTexto = () => {
  const [titleText, TesteTexto] = useState("Veja a mensagem [Aperte Aqui]");
  const bodyText = "Melhor Faculdade de Tecnologia";

  const onPressTitle = () => {
    TesteTexto("FATEC Zona Leste");
  };

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default TesteTexto;
