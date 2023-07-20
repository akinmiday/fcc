import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CurrentWeather from "./src/components/screens/CurrentWeather"
import UpcomingWeather from "./src/components/screens/UpcomingWeather"
import City from "./src/components/screens/City"

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          ta
        }}
      >
        <Tab.Screen name={"Current"} component={CurrentWeather} />
        <Tab.Screen name={"Upcoming"} component={UpcomingWeather} />
        <Tab.Screen name={"City"} component={City} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
