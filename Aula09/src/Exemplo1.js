import React from 'react'
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabView from './TabView';

export default ()=>(
    <NavigationContainer>
    <SafeAreaView style={{flex: 1}}>
        <TabView />
    </SafeAreaView>
    </NavigationContainer>
)