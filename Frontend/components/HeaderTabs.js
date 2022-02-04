import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useFonts, Poppins_400Regular} from '@expo-google-fonts/poppins';
export default function HeaderTabs() {

    let [fontsLoaded] = useFonts({
      Poppins_400Regular,
    });
    const [activeTab, setActiveTab] = useState("Business");
    return (
    <View style={{flexDirection:"row", alignSelf:"center", marginVertical:10}}>
      <HeaderButton content="Business" btnColor="black" textColor="white" activeTab={activeTab} setActiveTab={setActiveTab}/>
      <HeaderButton content="Personal" btnColor="white" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab}/>
    </View>
  );
}

const HeaderButton =(props) => (
    <TouchableOpacity 
    style={{
        backgroundColor:props.content==props.activeTab?"#022859":"white",
        paddingVertical:6,
        paddingHorizontal:16,
        borderRadius:30,
        }}
    onPress={()=> props.setActiveTab(props.content)}
    >
        <Text style={{color:props.content==props.activeTab?"white":"#022859", fontSize:15 ,fontFamily:'Poppins-Medium'}}>{props.content}</Text>
    </TouchableOpacity>
)