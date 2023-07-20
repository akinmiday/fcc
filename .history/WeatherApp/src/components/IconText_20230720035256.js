import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

const IconText = () => {
  const {} = styles
  return (
    <View>
      <Feather name="user" size={50} color="red" />
      <Text style={populationText}>8000</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
export default IconText
