import React from "react"
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar
} from "react-native"

const City = () => {
  const { container, imageLayout, cityName, countryName } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../../assets/city-background.jpg")}
        style={imageLayout}
      >
        <Text style={cityName}>London</Text>
        <Text style={countryName}>UK</Text>
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
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "white"
  },
  countryName: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 30,
    color: "white",
    fontWeight: "bold"
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    color: "white",
    fontWeight: "bold"
  }
})
export default City
