import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

const IconText = () => {
  const {} = styles
  return (
    <View>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={populationText}>{bodyText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
export default IconText
