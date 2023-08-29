import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function CalculadoraView({
    num1,
    num2,
    atualizarOPerando,
    selecionarOperacao,
    realizarCalculo,
    limpar,
    resueltado
}) {
    return (
        <View styles={styles.container}>
            <Text>Número 1</Text>
            <TextInput
            value = {num1}
            onChangeText={() => atualizarOPerando('num1', text)}
            keyboardType="numeric"
            />
            <Text>Número 2</Text>
            <TextInput
            value = {num2}
            onChangeText={text => atualizarOPerando('num2', text)}
            keyboardType="numeric"
            />
            <Button title="+" onPress={() => selecionarOperacao('+')} />
            <Button title="-" onPress={() => selecionarOperacao('-')} />
            <Button title="x" onPress={() => selecionarOperacao('*')} />
            <Button title="÷" onPress={() => selecionarOperacao('/')} />
            <Button title="=" onPress={realizarCalculo} />
            <Button title="LIMPAR" onPress={limpar} />
            <Text>Resultado: {resueltado}</Text>





        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

