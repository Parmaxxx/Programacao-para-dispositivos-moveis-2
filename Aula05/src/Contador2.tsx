import React from 'react';
import { Text, Button } from 'react-native';
import estilo from './Estilo';

export default (comp: { inicial: any; }) => {
    let numero = comp.inicial
    const inc = () =>{
        numero++;
        console.warn(numero);
    }
    const dec = () =>{
        numero--;
        console.warn(numero);
    }
    return (
        <>
            <Text style={estilo.FontGrande}>{numero}</Text>
            <Button title=" + " onPress={inc} color={'#00f'} />
            <Button title=" - " onPress={dec} color={'#f00'} />
        </>
    );

}