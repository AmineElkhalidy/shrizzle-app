import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// responsiveness
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//constants
import Colors from "../../constants/Colors";

//NFC
import NfcManager, { NfcTech } from "react-native-nfc-manager";

// Pre-step, call this before any NFC operations
NfcManager.start();

function AddProfile({ setIsAddModalOpen }) {
  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn("Tag found", tag);
    } catch (ex) {
      console.warn("Oops!", ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  return (
    <View style={styles.screen}>
      <TouchableOpacity>
        <View style={styles.addButton}>
          <Text style={styles.addButtonText}>Paste Profile Link</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={readNdef}>
        <View style={styles.shareButton}>
          <Text style={styles.buttonText}>Use NFC</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsAddModalOpen(false)}>
        <View style={styles.close}>
          <Text style={styles.closeText}>Close</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default AddProfile;

const styles = StyleSheet.create({
  screen: {
    position: "absolute",
    width: wp("90%"),
    height: hp("36%"),
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: wp("10%"),
    paddingVertical: wp("15%"),
    borderRadius: wp("5%"),
    top: wp("70%"),
    left: wp("5%"),
    borderColor: Colors.orange,
    borderWidth: 1,
    flex: 1,
  },

  addButton: {
    width: "100%",
    borderRadius: wp("8%"),
    padding: wp("4%"),
    marginRight: wp("4%"),
    marginBottom: wp("4%"),
    borderColor: Colors.blue,
    borderWidth: 1,
  },
  shareButton: {
    width: "100%",
    borderRadius: wp("8%"),
    padding: wp("4%"),
    marginBottom: wp("4%"),
    backgroundColor: Colors.blue,
  },

  addButtonText: {
    color: Colors.blue,
    fontWeight: "bold",
    fontSize: wp("4.5%"),
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: wp("4.5%"),
    textAlign: "center",
  },
  closeText: {
    color: "#111",
    textAlign: "center",
    marginTop: wp("6%"),
    textDecorationLine: "underline",
    fontSize: wp("4%"),
    fontFamily: "Poppins-Bold",
  },
});
