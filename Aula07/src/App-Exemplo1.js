import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Tabe from '../components/Tab';
import TelaA from '../src/TelaA';
import TelaB from '../src/TelaB';

function TelaPrincipal() {
    return (
        <View style={styles.TelaPrincipal}>
            <Text style={styles.textoBranco}>FATEC</Text>
            <Text style={styles.textoBranco}>Tela Principal</Text>
        </View>
    );
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

const Tab = createBottomTabNavigator();

function MinhaTab() {
    return (
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
                name="Uma TAB chamando outra Tab"
                component={Tabe}
                options={{
                    tabBarLabel: 'Teste',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="airplane" color={color} size={size} />
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
        backgroundColor: '#00F',
    },
    textoBranco: {
        color: '#FFF',
    },
    flexContainer: {
        flex: 1,
    },
};
