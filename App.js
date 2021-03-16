import React from "react";
import { Button, PermissionsAndroid, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import {NetworkInfo} from 'react-native-network-info';
import wifi from 'react-native-android-wifi';
import publicIp from 'public-ip'
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      alert("Permission Granted");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const getBSSID = () => {
  NetworkInfo.getBSSID().then(bssid => alert(bssid));
}

const getSSID = () => {
  wifi.getSSID((ssid) => {
    alert(ssid);
  });
}

const getPublicIPv4 = async () => {
  alert(await publicIp.v4());
}

const getPublicIPv6 = async () => {
  alert(await publicIp.v6());
}
const App = () => (
  <View style={styles.container}>
    <Text style={styles.item}>SSID + BSSID</Text>
    <Button style={{margin: 10}} title="requestLocationPermission" onPress={requestLocationPermission} />
    <Button title="getSSID" onPress={getSSID} />
    <Button title="getBSSID" onPress={getBSSID} />
    <Button title="getIPv4" onPress={getPublicIPv4} />
    {/* <Button title="getIPv6" onPress={getPublicIPv6} /> */}
  </View>
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default App;