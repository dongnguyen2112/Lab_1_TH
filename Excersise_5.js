import React from "react";
import {Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"; 

const Exersise5 =()=>{
        const Square =({text, bgcolor = "aqua"})=>(
            <View style={[myStyle.box, {backgroundColor: bgcolor}]}>
                <Text>{text}</Text>
            </View>

    )
    return(
        <View style={myStyle.container}>
            <Square text="Square 1"></Square>
            <Square text="Square 2" bgcolor="yellow"></Square>
            <Square text="Square 3" bgcolor="pink"></Square>
        </View>
    )

}
export default Exersise5;
const myStyle= StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:"center",
            flexDirection:"row",
            justifyContent:"space-around",
        },
        box:{
            width:100,
            height:100,
            border:2,
            backgroundColor: "red",
            alignItems:"center",
            justifyContent:"center",
        },
    }
)