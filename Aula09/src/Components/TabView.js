import React from 'react'
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import TelaA from '../screens/TelaA'
import TelaB from '../screens/TelaB'
import TelaC from '../screens/TelaC'
import TelaD from '../screens/TelaD'

const Rota1 =() =>(
    <View style={{ flex:1}}>
        <TelaA />
    </View>
)

const Rota2 =() =>(
    <View style={{ flex:1}}>
        <TelaB />
    </View>
)

const Rota3 =() =>(
    <View style={{ flex:1}}>
        <TelaC />
    </View>
)

const Rota4 =() =>(
    <View style={{ flex:1}}>
        <TelaD />
    </View>
)

export default class TabViewFATEC extends React.Component {
    state = {
        index: 0,
        routes: [
            {key: 'posicao1', title: 'TelaA'},
            {key: 'posicao2', title: 'TelaB'},
            {key: 'posicao3', title: 'TelaC'},
            {key: 'posicao4', title: 'TelaD'},
        ],
    };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                        posicao1: Rota1,
                        posicao2: Rota2,
                        posicao3: Rota3,
                        posicao4: Rota4,
                                       })}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get('window').width}}
                    style={menu.container}
                    />
        )
    }
}

const menu = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
    }
})