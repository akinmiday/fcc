import React from "react"
import { SafeAreaView, Text, StyleSheet, ImageBackground } from "react-native"

const City = () => {
  const { container } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require("../../../assets/city-background.jpg")}>
        <Text>Yeeeee!!!</Text>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default City
