import { View, Text, FlatList, TouchableOpacity, Image, Linking } from 'react-native';
import React from 'react';
import Facebook from "./../Assets/SocialMediaIcons/Facebook.png"
import Tiktok from "./../Assets/SocialMediaIcons/Tiktok.png"
import Instagram from "./../Assets/SocialMediaIcons/Instagram.png"
import Discord from "./../Assets/SocialMediaIcons/Discord.png"
import Snapchat from "./../Assets/SocialMediaIcons/Snapchat.png"
import LinkedIn from "./../Assets/SocialMediaIcons/LinkedIn.png"
import { useFonts, Poppins_400Regular} from '@expo-google-fonts/poppins';
const SocialMediaList = [
    {key:'1', image : Facebook, name:"Facebook", url:"https://www.facebook.com/kasai.tsuki.7"},
    {key:'2', image : Tiktok, name:"Tiktok"},
    {key:'3', image : Instagram, name:"Instagram", url:"https://www.instagram.com/hajib.diae"},
    {key:'4', image : Discord, name:"Discord"},
    {key:'5', image : Snapchat, name:"Snapchat"},
    {key:'6', image : LinkedIn, name:"LinkedIn"}
]

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
  
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
  
    return data;
  };

export default function SocialMedia() {
    const numColumns=3;
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
      });
    var renderItem = ({item,index}) => {
        return (
            <View style={{
                flex: 1,
                margin: 10,
                alignItems:"center",
            }}>
                <TouchableOpacity style={{alignItems:"center", alignSelf:"center"}} onPress={()=>{
                    Linking.canOpenURL("https:www.facebook.com/kasai.tsuki.7").then(supported => {
                        if (supported) {
                          return Linking.openURL("https:www.facebook.com/kasai.tsuki.7");
                        } else {
                          return Linking.openURL("https:www.facebook.com/kasai.tsuki.7");
                        }
                      })
                    }}>
                    <Image source={item.image} style={{width:55,height:55,borderRadius:55}}/>
                    <Text style={{fontSize:12,fontFamily:'Poppins'}}>{item.name}</Text>
                </TouchableOpacity>
                
            </View>
        )
    }

  return (
    <View style={{
        margin: 10,
        }}>
      <Text style={{fontSize:22,fontFamily: 'Poppins-Medium', marginBottom:15}}>Social Media</Text>
      <FlatList
        style={{marginHorizontal:25, marginRight:40}}
        data={formatData(SocialMediaList,numColumns)}
        renderItem={renderItem}
        numColumns={numColumns}
      />
    </View>
  );
}
