import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import HeaderTabs from '../components/HeaderTabs.js';
import ProfileCard from '../components/ProfileCard.js';
import Bio from '../components/Bio.js';
import PersonalInfo from '../components/PersonalInfo.js';
import SocialMedia from '../components/SocialMedia.js';
import NormalContacts from '../components/NormalContacts.js';
import profilepic from "./../Assets/TestPictures/testpdp.jpg"
import coverpic from "./../Assets/TestPictures/testLogo.jpg"
export default function MyProfile() {
  return (
    <ScrollView>
      <HeaderTabs/>
      <ProfileCard cover={coverpic} profilepic={profilepic} username="Diae Hajib" added={true} liked={true}/>
      <Bio text="This is supposed to a bio... I guess? to loooooooooooong for testing."/>
      <PersonalInfo/>
      <SocialMedia/>
      <NormalContacts name="diae hajib" personal={true} business={true} selected={true} profilepic={profilepic}/>
      <NormalContacts name="diae hajib" personal={true}/>
      <NormalContacts name="diae hajib" business={true}/>
    </ScrollView>
  );
}
