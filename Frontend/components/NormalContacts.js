import { View, Text } from 'react-native';
import React from 'react';
import ProfilePicture from './ProfilePicture';
import RoundButton from './RoundButton';
import { useFonts, Poppins_400Regular} from '@expo-google-fonts/poppins';

export default function NormalContacts(props) {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
      });
      
  return (
    <View style={{flexDirection:"row",alignItems:"center", position:"relative", marginHorizontal:15}}>
    <View style={{marginRight:5}}>
    <ProfilePicture type="contact" profilepic={props.profilepic}/>
    </View>
      
      <View>
      <Text style={{fontFamily:'Poppins'}}>{props.name}</Text>
      <View style={{flexDirection:"row"}}>
      <Text style={{fontFamily:"Poppins",backgroundColor:"#022859", width:75, fontSize:11, color:"white", textAlign:"center", textAlignVertical:"center",borderRadius:5,marginRight:5, display:props.personal==true?"flex":"none"}}>Personal</Text>
      <Text style={{fontFamily:"Poppins",backgroundColor:"#022859", width:75, fontSize:11, color:"white", textAlign:"center", textAlignVertical:"center",borderRadius:5,display:props.business==true?"flex":"none"}}>Business</Text>
      </View>
      </View>
      <View style={{position:"absolute", right:0}}>
      <RoundButton name="heart" selected={props.selected}/>
      </View>
    </View>
  );
}
