import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Botao from './Botao'

export default () => (
    <View style={style.App}>
        <Botao />
    </View>
)

const style = StyleSheet.create({
    App: {
        backgroundColor: '#AC9',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})