import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from 'react-native';

const DATA =[
    {
        title: 'Pratos principais',
        data: ['Pizza', 'Hamburger', 'Risoto'],
    },
    {
        title: 'Pratos do Chefe',
        data: ['Frango Frito', 'Cebolas Empanadas', 'Batata Frita'],
    },
    {
        title: 'Bebidas',
        data: ['Água', 'Pepsi', 'Suco'],
    },
    {
        title: 'Sobremessas',
        data: ['Pudim', 'Sorvete'],
    },
];

const ExemploSectionList = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({
                    section: {title}
                }) =>(
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    )}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
            marginHorizontal: 16,
        },
        item: {
            backgroundColor: '#f9c200',
            padding: 20,
            marginVertical: 8,
            },
        header: {
            fontSize: 32,
            backgroundColor: '#fff',
        },
        title: {
            fontSize: 24,
        },
    });

export default ExemploSectionList;
