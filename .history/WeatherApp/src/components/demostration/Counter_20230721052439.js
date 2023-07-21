import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"

const Counter = () => {
  const { container } = styles
  let count = 0
  return (
    <View>
      <Text>{`count: ${count}`}</Text>
      <Button
        color={"red"}
        title={"Increase the count"}
        onPress={() => {
          count++
          console.log(count)
        }}
      ></Button>
      <Button
        color="green"
        title={"Decrease the count"}
        onPress={() => {
          count--
          console.log(count)
        }}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({})
export default Counter
