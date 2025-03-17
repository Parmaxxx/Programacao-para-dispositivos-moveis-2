import React, { useState }from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'

const App = () => {
    const [count, setCount] = useState(0)
    const onPress = () => setCount(prevCount => prevCount + 1)

    return (
        <View style={styles.Tela1}>
            <View style={styles.Tela2}>
                <Text>Contador: {count}</Text>
            </View>
            <TouchableOpacity style={styles.botao} onPress={onPress}>
                <Text>Pressione aqui!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Tela1: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#AFF',
        paddingHorizontal: 10,
    },
    Tela2: {
        alignItems: 'center',
        padding: 10,
    },
    botao: {
        alignItems: 'center',
        backgroundColor: '#0AF',
        padding: 10
    }
})
export default App;

