import React from "react";
import { Text, View , StyleSheet, SafeAreaView, ScrollView, StatusBar} from "react-native";

const App = () => {
    return (

        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>
                    Albert Einstein é conhecido por suas frases inspiradoras.
                    Algumas delas são:
                    A imaginação é mais importante que o conhecimento.
                    Duas coisas são infinitas: o universo e a estupidez
                    humana. Mas, em relação ao universo, ainda não tenho
                    certeza absoluta.
                    Insanidade é continuar fazendo sempre a mesma coisa
                    e esperar resultados diferentes.
                    No meio da confusão, encontre a simplicidade.
                    Quem nunca errou nunca experimentou nada novo.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: "pink",
        marginHorizontal: 20,
    },
    text:{
        fontSize: 42,
    },
});
export default App;
