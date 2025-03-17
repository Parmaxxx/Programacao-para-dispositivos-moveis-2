import React from 'react'
import { Button } from 'react-native'

export default () => {
    function executar(){
        console.warn("Executando #1!!")
    }
    return (
    <>
        <Button title="Executar!" onPress={executar}/>
        <Button
        title="Executar #2!!"
        onPress={() =>{
         console.warn("Executando #2!!")
        }}
        />
        <Button
            title="Executar #3!!"
            onPress={() =>{
                console.warn("Executando #3!!")
            }}
        />
    </>
    )}