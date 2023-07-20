import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

const IconText = () => {
  const { iconName, iconColor, bodyText } = props
  return (
    <View>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={styles.textTheme}>{bodyText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: "bold"
  }
})
export default IconText
