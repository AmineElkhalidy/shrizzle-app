import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ProfilePicture from './ProfilePicture';
import Icon from 'react-native-vector-icons/FontAwesome'
import AntDesign from "react-native-vector-icons/AntDesign"
import { useFonts, Poppins_400Regular,Poppins_600SemiBold} from '@expo-google-fonts/poppins';

const fakeDataList = [
    {key:'1', icon : "birthday-cake", title:"birthday", info:"10/5/2000"},
    {key:'2', icon : "clock-o", title:"age", info:"20"},
    {key:'3', icon : "map", title:"Address", info:"Lorem ipsum dolor sit amet, consectetur adipiscing "},
    {key:'4', icon : "paper-plane", title:"Birthday", info:"Lorem ipsum dolor sit amet, consectetur adipiscing"}
]

export default function PersonalInfo() {
    const numColumns = 2;
    const [show,setShow] = useState(false)
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
      });
    var renderItem = ({item,index}) => {
        return (
            <View style={{
                flex: 1,
                margin:10
            }}>
                <View>
                    <Text style={{fontSize:18, color:"#022859",fontFamily:'Poppins'}}><Icon style={{fontSize:20, width:20}} name={item.icon}/>  {item.title}</Text>
                    <Text style={{color:"#383838", marginLeft:30,fontSize:13,fontFamily:'Poppins'}}>{item.info}</Text>
                </View>
                
            </View>
        )
    }
  return (
    <View style={{
        margin:10,
        marginVertical:20,
        position:"relative"
    }}>
      <Text style={{fontSize:22, fontFamily: 'Poppins-Medium'}}>Personal info</Text>
      <Text style={{position:"absolute", right:10, top:5}}><TouchableOpacity onPress={()=>{setShow(show?false:true)}}><AntDesign style={{fontSize:25}} name={show?"up":"down"}/></TouchableOpacity></Text>
      <FlatList
        style={{marginHorizontal:25, marginRight:0, display:show?"flex":"none"}}
        data={fakeDataList}
        renderItem={renderItem}
        numColumns={numColumns}
      />
    </View>
  );
}
