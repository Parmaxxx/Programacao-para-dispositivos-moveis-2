import React from 'react'
import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'

const Comp = () => {
    const clickHandler = () => {
        alert('Saida do botão clicado.')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.Titulo1}>
                    Botão de Ação Flutuante
                </Text>
                <Text style={styles.Titulo2}>
                    Vlique no Botão para ver a mensagem de saída
                </Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={clickHandler}
                    style={styles.Botao}>
                    <Image
                        source={{
                            uri:
                                "https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-Vector-PNG-Pic.png"
                        }}
                        style={styles.Tela3}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Comp
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0CF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    Titulo1: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    Titulo2: {
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
    },
    Botao: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    Tela3: {
        resizeMode: 'contain',
        width: 70,
        height: 70,
    }
})