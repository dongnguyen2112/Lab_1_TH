import React from "react";
import {
    TouchableOpacity,
    Text,
    View }
    from "react-native";
const Button = (props) => (
    <TouchableOpacity
    onPress={props.onPress}
    style={{
        backgroundColor:"pink",
        alignSelf:"center",
        padding:10,
        margin:10,
        ...props.buttonStyle,
    }}
    >
        <Text style={{ color: "blue" }}>{props.text}</Text>
    </TouchableOpacity>
);

export default () => (
    <View style ={ {flex:1}}>
        <Button text="Say Hello" onPress={() => alert("Hello!")}/>
        <Button
        text="Say goodbye"
        onPress={() => alert("Goodbye!")}
        buttonStyle={{ backgroundColor:"#4dc2c2"}}/>
    </View>
);