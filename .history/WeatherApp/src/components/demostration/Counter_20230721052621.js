import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"

const Counter = () => {
  const { container, title } = styles
  let count = 0
  return (
    <View style={container}>
      <Text style={title}>{`count: ${count}`}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },
  title:{
    alignSelf:
  }
})
export default Counter
