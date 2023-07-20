import React from "react"
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View
} from "react-native"
import { Feather } from "@expo/vector-icons"

const City = () => {
  const { container, imageLayout, cityText, cityName, countryName } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../../assets/city-background.jpg")}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>
        <View style>
          <Feather name="user" size={50} color="red" />
          <Text>1000</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    color: "white",
    fontWeight: "bold"
  }
})
export default City
