import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"
import RowText from "../RowText"

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    highLowWrapper,
    highLow,
    feels,
    temp,
    bodyWrapper,
    description,
    message
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="#000" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>

        <RowText
          messageOne={"High: 8 "}
          messageTwo={" Low: 6"}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>

      <RowText
        messageOne={"Its Sunny"}
        messageTwo={"Its perfect T-shirt Weather"}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    color: "#000",
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: "#000"
  },
  highLow: {
    color: "#000",
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: "row"
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})

export default CurrentWeather
