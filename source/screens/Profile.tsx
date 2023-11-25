import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

export default function Profile() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#C637D9", "#5928A2"]} style={styles.background}>
        <Text style={{ marginTop: 25, fontSize: 25, color: "white" }}>
          Profile
        </Text>
      </LinearGradient>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={styles.button}>
          
          <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingHorizontal: 10}}>
            <Image source={require("../../assets/icon.png")} style={styles.profilePicture}/>
            <Text style={{fontSize: 20, color: "white", paddingHorizontal: 10}}>Change your info</Text>
          </View>
        </TouchableOpacity>
        <Text></Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: 300,
    height: 60,
    borderRadius: 20,
    backgroundColor: "gray",
    marginVertical: 50,
  },
  profilePicture: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginVertical: 10
  },
  background: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
});