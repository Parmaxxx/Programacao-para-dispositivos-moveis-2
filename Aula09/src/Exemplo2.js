import React from 'react'
import { Text, StyleSheet, Dimensions,SafeAreaView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function TelaPrincipal() {
    return (
        <SafeAreaView style={styles.screen1}>
            <Text style={styles.text}>Tela Principal CPS</Text>
        </SafeAreaView>
    )
}

function Alunos(){
    return (
        <SafeAreaView style={styles.screen2}>
            <Text style={styles.text}>Cadastro de Alunos</Text>
        </SafeAreaView>
    )
}

function Notas(){
    return (
        <SafeAreaView style={styles.screen3}>
            <Text style={styles.text}>Nota dos Alunos</Text>
        </SafeAreaView>
    )
}

export default class TabViewExample extends React.Component {
    state = {
        index: 0,
        routes: [
            {key:'telaprincipal',title:'Principal', icon:'home'},
            {key:'alunos',title:'Alunos', icon:'account'},
            {key:'notas',title:'Notas', icon:'car'},
        ]
    }

    renderTabBar = (props) => (
        <TabBar
            {...props}
            renderIcon={({route, focused, color}) =>(
                <MaterialCommunityIcons
                    name={route.icon}
                    size={24}
                    color={focused ? '#4CAF50' : '#757575'}
                />
            )}
            indicatorStyle={{backgroundColor:'#4CAF50'}}
            style={styles.tabBar}
            labelStyle={styles.tabLabel}
        />
    )

    render(){
    return (
        <SafeAreaView style={styles.container}>
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    telaPrincipal: TelaPrincipal,
                    alunos: Alunos,
                    notas: Notas,
                })}
                onIndexChange={(index) => this.setState({index})}
                initialLayout={{width: Dimensions.get('window').width}}
                renderTabBar={this.renderTabBar}
                />
        </SafeAreaView>
    )}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        backgroundColor: '#007',
        shadowColor: '#000',
        shadowOffset:{width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    tabLabel: {
        fontSize: 12,
        fontWeight: '600',
    },
    screen1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    screen2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    screen3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    screen4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00796B',
    }
})