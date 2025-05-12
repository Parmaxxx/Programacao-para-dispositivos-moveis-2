import * as React from 'react'
import { Text, StyleSheet, View,Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaA from '../screens/TelaA';
import TelaB from '../screens/TelaB';
import TelaC from '../screens/TelaC';
import TelaD from '../screens/TelaD';

function Principal() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.texto}> Sejam Bem-Vindos ao CPS</Text>
            <Button
                title="Vamos para FATEC"
                onPress={() => navigation.navigate('FATEC')}
                />
        </View>
    )
}

function FATEC(){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Sejam Bem-Vindos a FATEC</Text>
            <Button
            title="Tela Principal"
            onPress={() => navigation.navigate('Principal')}
            />
        </View>
    )
}

function Gremio(){
    return (
        <View style={styles.container}>
            <TelaA />
        </View>
    )
}

function Secretaria(){
    return (
        <View style={styles.container}>
            <TelaB />
        </View>
    )
}

function Alunos(){
    return (
        <View style={styles.container}>
            <TelaC />
        </View>
    )
}

function Financeiro(){
    return (
        <View style={styles.container}>
            <TelaD />
        </View>
    )
}

const Drawer = createDrawerNavigator()

function MeuDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Principal" component={Principal} />
            <Drawer.Screen name="FATEC" component={FATEC} />
            <Drawer.Screen name="Gremio" component={Gremio} />
            <Drawer.Screen name="Secretaria" component={Secretaria} />
            <Drawer.Screen name="Alunos" component={Alunos} />
            <Drawer.Screen name="Financeiro" component={Financeiro} />
            </Drawer.Navigator>
    )

}

export default function App(){
    return (
        <NavigationContainer>
            <MeuDrawer/>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#Add8e6',
    },
    container2:{
        flex: 1,
    },
    texto: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    }
})