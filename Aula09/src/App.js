
import * as React from 'react'
import { Text, StyleSheet, View,Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'
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

const Drawer = createDrawerNavigator()

function MeuDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={({ route})=>({
                drawerIcon: ({ color, size}) =>{
                    let iconName
                    switch(route.name){
                        case 'Principal':
                            iconName = 'home-outline';
                            break;
                        case 'FATEC':
                            iconName = 'school-outline';
                            break;
                        case 'Tela A':
                            iconName = 'book-outline';
                            break;
                        case 'Tela B':
                            iconName = 'briefcase-outline';
                            break;
                        case 'Tela C':
                            iconName = 'people-outline';
                            break;
                        case 'Tela D':
                            iconName = 'cash-outline';
                            break;
                        default:
                            iconName = 'help-circle-outline';
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                }
            })}>
            <Drawer.Screen name="Principal" component={Principal} />
            <Drawer.Screen name="FATEC" component={FATEC} />
            <Drawer.Screen name="Tela A" component={TelaA} />
            <Drawer.Screen name="Tela B" component={TelaB} />
            <Drawer.Screen name="Tela C" component={TelaC} />
            <Drawer.Screen name="Tela D" component={TelaD} />
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
    texto: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    }
})