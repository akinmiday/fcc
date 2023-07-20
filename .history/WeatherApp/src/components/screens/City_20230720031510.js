import React from "react"
import { SafeAreaView, Text, StyleSheet, ImageBackground } from "react-native"

const City = () => {
  const { container, imageLayout } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../../assets/city-background.jpg")}
        style={imageLayout}
      ></ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageLayout: {
    flex: 1
  }
})
export default City
