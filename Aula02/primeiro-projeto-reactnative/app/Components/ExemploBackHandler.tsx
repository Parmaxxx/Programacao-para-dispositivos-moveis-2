import React , { useEffect } from 'react';
import { Text, View, StyleSheet, BackHandler, Alert} from "react-native";

const App = () => {
    useEffect(() => {
        const backAction = () => {
            Alert.alert('Espere um pouco!', 'Tem certeza que quer voltar?',[
                {
                    text: 'Cancelar',
                    onPress: () => null,
                    style: 'cancel',
                },
                {
                    text: 'Sim',
                    onPress: () => BackHandler.exitApp()
                },
            ]);
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    },
        []);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Aperte o Botão!</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default App;