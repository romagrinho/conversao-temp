import React, {useState} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from "react-native"

export default function Home(){
    
   
    let [celsius,setCelsius ] = useState();
    let [total, setTotal]   = useState();

    function CalcularTotal(){

        let resultado = (9 * parseFloat(celsius) + 160) /5; 
        setTotal(resultado);

        alert("A temperatura em Fahrenheit é: " + total+"° F");
    }

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Conversor de Temperatura</Text>

        <TextInput
          onChangeText={setCelsius}
          style={styles.campo}
          placeholder="Digite a temperatura em Celsius "
        />

        <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>
          <Text style={styles.botaoTexto}> Calcular Temperatura </Text>
        </TouchableOpacity>
      </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#87CEEB',
            flex:1,
            justifyContent:'center',
            alignItems: 'center'
    },

    titulo:{
        fontSize:25,
        color:'#FFF',
        fontWeight: 'bold',
        marginBottom:40
    },
    campo:{
        backgroundColor: '#FFF',
        alignItems: 'center',
        padding: 15,
        borderRadius: 7,
        marginTop: 20,
        width:250
    },
    botao:{
        backgroundColor: '#FF0000',
        alignItems:'center',
        padding:15,
        borderRadius: 7,
        marginTop: 20,
        width:250
    },

    botaoTexto:{
        color:'#FFFF',
        fontSize: 17,
        fontWeight:'700',
    }
});