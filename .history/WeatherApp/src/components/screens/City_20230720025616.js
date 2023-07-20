import React from "react"
import { SafeAreaView, Text, StyleSheet } from "react-native"

const City = () => {
  const { container } = styles
  return (
    <SafeAreaView style={container}>
      <Text>City</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {}
})
export default City
