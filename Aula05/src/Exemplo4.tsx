import React,{ useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import estilo from "@/src/Estilo";
const Pisca = (Comp: { text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
    const [isShowingText, setIsShowingText] = useState(true);

    useEffect(() => {
        const toggle = setInterval(() => {
            setIsShowingText(!isShowingText);
        }, 1000);
        return () => clearInterval(toggle)
    })
    if (!isShowingText) {
        return null
    }
    return <Text>{Comp.text}</Text>
}

const PiscaApp = () =>{
    return (
        <View style={estilo.tela1}>
            <Pisca text="Vamos piscar"/>
            <Pisca text="Sim, piscando e bom"/>
        </View>
    )
}
export default PiscaApp;