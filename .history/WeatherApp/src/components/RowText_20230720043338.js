import React from "react"
import { View, Text, StyleSheet } from "react-native"

const RowText = () => {
  return (
    <View style={containerStyles}>
      <Text style={styles.highLow}>{messageOne}</Text>
      <Text style={styles.highLow}>{messageTwo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
export default RowText
