import React, { useState} from "react";
import { Text, Button } from "react-native";
import estilo from "@/src/Estilo";

export default (comp: { initial: any; }) =>{
    const[numero, setNumero] = useState(comp.initial);

    const increment = ()=>setNumero(numero+1);
    const decrement = ()=>setNumero(numero-1);
    return (
        <>
            <Text style={estilo.FontGrande}>{numero}</Text>
            <Button title=" + " onPress={increment} color={'#00f'} />
            <Button title=" - " onPress={decrement} color={'#f00'} />
        </>
    )
}