import React from "react"
import { View, Text, StyleSheet } from "react-native"

const RowText = () => {
  return (
    <View style={styles.highLowWrapper}>
      <Text style={styles.highLow}>High: 8 </Text>
      <Text style={styles.highLow}> Low: 6</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
export default RowText
