import React from "react"
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native"

const Counter = () => {
  const { container, title } = styles
  let count = 0
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange"
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    marginTop: 25
  }
})
export default Counter
