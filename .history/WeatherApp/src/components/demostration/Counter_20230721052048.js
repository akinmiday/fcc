import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"

const Counter = () => {
  let count = 0
  return (
    <View>
      <Text>{`count: ${count}`}</Text>
      <Button color={"red"} title={"Increase the count"}></Button>
      <Button></Button>
    </View>
  )
}

const styles = StyleSheet.create({})
export default Counter
