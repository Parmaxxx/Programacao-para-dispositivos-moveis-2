import React from "react";
import { Text, View } from "react-native";
import Exemplo3 from "./Components/Exemplo3";
import ViewBoxesWithColorAndText from "./Components/viewBoxeswithColorAndText";
import TesteTexto from "./Components/TesteTexto";
import DisplayAnImage from "./Components/TesteImage";
import ExemploTexto from "./Components/ExemploTexto";
const NomedoSeuApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> Bem vindo ao React Native!</Text>
      <Exemplo3 />
      <ViewBoxesWithColorAndText />
      <TesteTexto />
      <DisplayAnImage />
      <ExemploTexto />
    </View>
  );
};

export default NomedoSeuApp;
