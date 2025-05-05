import React, { Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import parametros from "./Parametros";
import Field from "./componentes/Field";

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.bemvindo}>Iniciando campo Minado</Text>
                <Text style={styles.instrucoes}>
                    Tamanho da grade:
                    {parametros.getRowsAmount()}x{parametros.getColumnAmount()}
                </Text>
                <Field />
                <Field aberto />
                <Field aberto aoredor={1}/>
                <Field aberto aoredor={2}/>
                <Field aberto aoredor={3}/>
                <Field aberto aoredor={6}/>
                <Field mina />
                <Field mina aberto />
                <Field mina aberto explosao />
                <Field bandeirado />
                <Field bandeirado aberto />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    bemvindo: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    instrucoes: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
})