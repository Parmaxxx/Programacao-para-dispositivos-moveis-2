import React from "react";
import { Text, View, StyleSheet } from "react-native";

const App = () => {
    return (
        <View
            style={styles.container}
        >
            <Text style={styles.tittle}> Bem vindo ao React Native</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#eaeaea',
    },
    tittle:{
        marginTop:16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#61dafb',
        color: '#20232a',
        textAlign: "center",
        fontSize: 30,
        fontWeight: 'bold',
    }
})

export default App;
