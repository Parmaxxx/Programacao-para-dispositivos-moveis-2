import React from "react";
import {StyleSheet, Button, View, SafeAreaView, Text, Alert} from 'react-native';

const Separator = () => <View style={[styles.separator]} />;

const ExemploButton = () => (
    <SafeAreaView style={[styles.container]}>
        <View>
            <Text style={[styles.title]}>
                O título e o manipulador onPress são necessários.
                Recomenda-se definir acessibilityLabel para ajudar a tornar seu Aplicativo utilizável por todos.
            </Text>
            <Button title="Aperte Aqui"
                    onPress={() => Alert.alert('Saída simples de um botão')}
            />
        </View>
        <Separator />
        <View>
            <Text style={[styles.title]}>
                Ajuste a cor de um forma que pareça padrão em cada plataforma.
                No iOS, o acessório de cor controla a cor do texto.
                No Android, a cor ajusta a cor de fundo do botão.
            </Text>
            <Button title="Aperte Aqui"
                    color='#f194ff'
                    onPress={() => Alert.alert('Botão com cor ajustada pressionada')}
            />
        </View>
        <Separator />
        <View>
            <Text style={[styles.title]}>
                Todas as interações para o componente são desabilitadas.
            </Text>
            <Button title="Aperte Aqui"
                    disabled
                    onPress={() => Alert.alert('Não é possivel pressionar!')}
            />
        </View>
        <Separator />
        <View>
            <Text style={[styles.title]}>
                Essa estratégia de layout permite que o título defina a largura do botão.
            </Text>
            <View style={styles.fixToText}>
                <Button title="Botão da Esquerda"
                        onPress={() => {Alert.alert('Botão da Esquerda, aperte.')}}
                />
                <Button title="Botão da Direita"
                        onPress={() => {Alert.alert('Botão da Direita, aperte.')}}
                />
            </View>
        </View>
    </SafeAreaView>
)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default ExemploButton;