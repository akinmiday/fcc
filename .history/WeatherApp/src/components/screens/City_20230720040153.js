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
            bodyText={8000}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={riseSetWrapper}>
          <Feather name="sunrise" size={50} color="white" />
          <Text style={riseSetText}>10:46:58am</Text>
          <Feather name="sunset" size={50} color="white" />
          <Text style={riseSetText}>17:28:15pm</Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red"
  },
  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: "white"
  }
})
export default City
