import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import RoundButton from './RoundButton';
import ProfilePicture from './ProfilePicture';
import coverpic from "./../Assets/TestPictures/testLogo.jpg"
import noImage from "./../Assets/TestPictures/NoImage.png"
export default function ProfileCard(props) {
  return (
    <View style={{
        backgroundColor:"black",
        height:210,
        marginHorizontal:10,
        borderRadius:8,
        padding:0,
        position:"relative",
        marginBottom:60,
    }}>
        <ImageBackground source={props.cover || noImage} resizeMode="cover" imageStyle={{ borderRadius: 8}} style={{width:"100%", height:"100%"}}>
            <Text style={{marginHorizontal:20,marginVertical:10, color:"white",fontSize:27,fontFamily:'Poppins'}}>{props.username}</Text>
            <View style={{flexDirection:"row",position:"absolute", bottom:0-27,right:10}}>
                <RoundButton name="sharealt"/>
            </View>     
            <View style={{flexDirection:"row",position:"absolute", bottom:0-52.5,left:5, justifyContent:"center", alignItems:"center"}}>
                <ProfilePicture profilepic={props.profilepic}/>
                <RoundButton name="idcard" selected={props.added}/>
                <RoundButton name="heart" selected={props.liked}/>
            </View>
        </ImageBackground>
    </View>
  );
}


var ProfileCardStyle={
    backgroundColor:"black",
}