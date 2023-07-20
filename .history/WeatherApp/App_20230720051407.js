import React from "react"
import { View, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CurrentWeather from "./src/components/screens/CurrentWeather"
import UpcomingWeather from "./src/components/screens/UpcomingWeather"
import City from "./src/components/screens/City"

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <CurrentWeather />
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
