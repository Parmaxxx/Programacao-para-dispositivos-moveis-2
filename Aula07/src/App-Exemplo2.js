import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TelaA from './src/TelaA';
import TelaB from './src/TelaB';
import TelaC from './src/TelaC';
import TelaD from './src/TelaD';

function TelaPrincipal(){
    return(
        <View style={styles.TelaPrincipal}>
            <Text style={styles.textoBranco}>FATEC</Text>
            <Text style={styles.textoBranco}>Tela Principal</Text>
        </View>
    )
}

function Secretaria() {
    return (
        <View style={styles.flexContainer}>
            <TelaA />
        </View>
    );
}

function Alunos() {
    return (
        <View style={styles.flexContainer}>
            <TelaB />
        </View>
    );
}

function Professores(){
    return(
        <View style={styles.flexContainer}>
            <TelaC />
        </View>
    )
}

function Administracao(){
    return(
        <View style={styles.flexContainer}>
            <TelaD />
        </View>
    )
}

const Tab = createBottomTabNavigator()
function MinhaTab(){
    return(
        <Tab.Navigator
            initialRouteName="FACULDADE - CPS"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                tabBarInactiveTintColor: '#000',
                tabBarLabelStyle: { fontSize: 15 },
            }}>
            <Tab.Screen
                name="FACULDADE - CPS"
                component={TelaPrincipal}
                options={{
                    tabBarLabel: 'Principal',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Secretaria"
                component={Secretaria}
                options={{
                    tabBarLabel: 'Secretaria',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Alunos"
                component={Alunos}
                options={{
                    tabBarLabel: 'Alunos',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Professores"
                component={Professores}
                options={{
                    tabBarLabel: 'Professores',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="school" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Administração"
                component={Administracao}
                options={{
                    tabBarLabel: 'Admionistração',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="briefcase" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
export default function AppFINAL() {
    return (
        <NavigationContainer>
            <MinhaTab />
        </NavigationContainer>
    );
}

const styles = {
    TelaPrincipal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
    },
    textoBranco: {
        color: '#FFF',
    },
    flexContainer: {
        flex: 1,
    },
};
