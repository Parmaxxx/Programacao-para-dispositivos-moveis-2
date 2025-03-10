import React from "react";
import {View, StyleSheet } from "react-native";
import Titulo from "@/src/Aula03-pt02/Titulo";

export default () => (
    <View style={styles.App}>
        <Titulo
        principal="Cadastro de Produto"
        secundario="Tela de Cadastro"
        />
    </View>
)

const styles = StyleSheet.create({
    App:{
        backgroundColor: "#AC9",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})

/*
Aula 03 parte 01
import Pagina1 from "@/src/Aula03-pt01/Pagina1";
import Pagina2 from "@/src/Aula03-pt01/Pagina2";
import {Comp1, Comp2, Comp3} from "@/src/Aula03-pt01/Pagina3";
export default function Index() {
    return (
        <View style = {style.Pagina1}>
            <Pagina1/>
            <Pagina2/>
            <Comp1/>
            <Comp2/>
            <Comp3/>
        </View>
    )
}
    const style = StyleSheet.create({
        Pagina1:{
            backgroundColor: '#AC0',
            flexGrow:1,
            justifyContent:'center',
            alignItems: 'center',
        }
    })

*/