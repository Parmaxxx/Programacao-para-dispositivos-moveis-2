import React from 'react';
import { View, Text } from 'react-native';
import estilo from "@/src/Estilo";

// @ts-ignore
export default comp =>{
    return (
    <>
            <Text style={estilo.FontGrande}>
            {comp.principal}
            </Text>
            <Text>
                {comp.secundario}
            </Text>
    </>
    )
}