import React from "react"
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View
} from "react-native"
import { Feather } from "@expo/vector-icons"
import IconText from "../IconText"

const City = () => {
  const {
    container,
    imageLayout,
    cityText,
    cityName,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText
  } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../../assets/city-background.jpg")}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>
        <View style={populationWrapper}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={"8000"}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={riseSetWrapper}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={"10:46:58am"}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={"17:28:15pm"}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    color: "white",
    fontWeight: "bold"
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red"
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: "white"
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center"
  }
})
export default City