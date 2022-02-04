import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
export default function Bio(props) {
    const [isExpended, setExpended] = useState(false)
    const [text, setText] = useState(props.text.slice(0,45))
    

    
    function handleExpand(){
        if(isExpended) setText(props.text.slice(0,45))
        else setText(props.text)
        setExpended(isExpended?false:true)
        
    }
  return (
    <View style={{marginHorizontal:10,fontSize:20}}>
      <Text style={{fontSize:12,color:"#545454", fontFamily: 'Poppins'}}>{text} <Text style={{color:"#FE9100"}} onPress={handleExpand}>{isExpended?" ...Show less":"...Show more"}</Text></Text>
    </View>
  );
}
