import React, {useState} from "react";
import { View, Button } from "react-native";
import estilo from "@/src/Estilo";

const MudaCor =()=>{
    const [color , setColor] = useState("blue");

    const changeColor = () =>{
        setColor((prevColor) => (prevColor === 'blue'?'green':'blue'));
    }
    return (
        <View style={estilo.container}>
            <View style={[estilo.quadrado, { backgroundColor: color }]} />
            <Button title="Mudar Cor" onPress={changeColor} />
        </View>
    )
}

export default MudaCor;