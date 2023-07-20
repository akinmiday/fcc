import React from "react"
import { View, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CurrentWeather from "./src/components/screens/CurrentWeather"
import UpcomingWeather from "./src/components/screens/UpcomingWeather"
import City from "./src/components/screens/City"

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <View style={styles.container}>
          <Tab.Screen name={"CurrentWeather"} component={CurrentWeather} />
        </View>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
