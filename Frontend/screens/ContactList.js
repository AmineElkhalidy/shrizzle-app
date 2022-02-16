import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import contacts from "./fakeData";
import NormalContacts from "./../components/NormalContacts";
import Icon from "react-native-vector-icons/FontAwesome";
export default function ContactList() {
  const [searchValue, setSearchValue] = useState("");

  function renderContact() {
    var list = [];
    list = contacts
      .filter((item) => {
        return item.selected == true;
      })
      .concat(
        contacts.filter((item) => {
          return item.selected == false;
        })
      );
    list.filter((item) => {
      return item.name.includes(searchValue);
    });
    var filtered = [];
    list.map((item) => {
      if (item.name.toLowerCase().includes(searchValue.toLowerCase()))
        filtered.push(item);
    });
    filtered = filtered.map((item) => {
      return (
        <NormalContacts
          name={item.name}
          selected={item.selected}
          profilePic={item.profilepic}
          business={item.business}
          personal={item.personal}
        />
      );
    });
    return filtered;
  }

  return (
    <View>
      <View style={styles.ContactListHeader}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Type here..."
            onChangeText={(value) => setSearchValue(value)}
          ></TextInput>
          <Text style={styles.tsearchBarRightContent}>
            <Icon style={{ fontSize: 15, width: 20 }} name="search" /> search
          </Text>
        </View>
        <TouchableOpacity style={styles.Filter}>
          <Icon style={{ fontSize: 25, width: 20 }} name="filter" />
        </TouchableOpacity>
      </View>
      <ScrollView>{renderContact()}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#CECECE",
    padding: 7,
    paddingLeft: 15,
    borderRadius: 60,
    width: 265,
  },
  ContactListHeader: {
    backgroundColor: "white",
    padding: 20,
    position: "relative",
    flexDirection: "row",
  },
  tsearchBarRightContent: {
    position: "absolute",
    backgroundColor: "white",
    top: 6,
    right: 6,
    borderRadius: 50,
    padding: 5,
    paddingTop: 4,
    paddingBottom: 6,
  },
  Filter: {
    padding: 7,
    paddingLeft: 20,
  },
});
