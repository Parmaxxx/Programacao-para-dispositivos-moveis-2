import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import parametros from "../Parametros";
import Mina from './Mina'
import Bandeira from './Bandeira'

export default comp => {
    const {mina, aberto, aoredor, explosao, bandeirado} = comp

    const styleField = [styles.field]
    if (aberto) styleField.push(styles.aberto)
    if (explosao) styleField.push(styles.explosao)
    if (bandeirado) styleField.push(styles.bandeira)
    if ( !aberto && !explosao ) styleField.push(styles.regular)
    if (styleField.length === 1) styleField.push(styles.regular)
    let color = null
    if (aoredor > 0) {
        if (aoredor === 1) color = '#2A28D7'
        if (aoredor === 2) color = '#2B520F'
        if (aoredor > 2 && aoredor < 6) color = '#F9060A'
        if (aoredor >= 6) color = '#F221A9'
    }
    return (
        <View style={styleField}>
            {!mina && aberto && aoredor > 0 ?
            <Text style={[styles.label, { color: color }]}>
                {aoredor}
            </Text>
            : false}
            {mina && aberto ? <Mina /> : false}
            {bandeirado && !aberto ? <Bandeira /> : false }
        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        height: parametros.blocoSize,
        width: parametros.blocoSize,
        borderWidth: parametros.bordaSize,
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
        borderTopColor: '#CCC',
    },
    aberto: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems:'center',
        justifyContent: 'center',
    },
    label:{
        fontWeight: 'bold',
        fontSize: parametros.fonteSize,
    },
    explosao:{
        backgroundColor: 'red',
        borderColor: 'red',
    }
})