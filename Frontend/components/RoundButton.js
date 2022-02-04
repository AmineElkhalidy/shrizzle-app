import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AntDesign from "react-native-vector-icons/AntDesign"
export default function RoundButton(props) {
    const [buttonHighlighted, setButtonHighlight] = useState(props.selected)
    function handlePress()
    {
        setButtonHighlight(buttonHighlighted?false:true);
    }
  return (
    <View>
    <TouchableOpacity style={{
        backgroundColor:"white",
        margin:0,
        height:50,
        width:50,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 50,
        },
        color:"orange",
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 3,
        margin:4,
    }} onPress={handlePress}>
        <AntDesign name={props.name} style={{color:buttonHighlighted?"#FE9100":"#022859",fontSize:22}}/>
    </TouchableOpacity>
    </View>
  );
}
