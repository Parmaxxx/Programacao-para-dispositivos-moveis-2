import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaA from '../src/TelaA';
import TelaB from '../src/TelaB';
import TelaC from '../src/TelaC';
import TelaD from '../src/TelaD';

const Tab = createBottomTabNavigator();

export default (comp) => (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'blue',
            tabBarLabelStyle: { fontSize: 20 },
        }}
        initialRouteName="Tela C"
    >
        <Tab.Screen name="Tela A" component={TelaA} />
        <Tab.Screen name="Tela B" component={TelaB} />
        <Tab.Screen name="Tela C" component={TelaC} />
        <Tab.Screen name="Tela D" component={TelaD} />
    </Tab.Navigator>
);
