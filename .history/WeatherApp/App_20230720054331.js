import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from "@expo/vector-icons"

import CurrentWeather from "./src/components/screens/CurrentWeather"
import UpcomingWeather from "./src/components/screens/UpcomingWeather"
import City from "./src/components/screens/City"

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "grey"
        }}
      >
        <Tab.Screen
          name={"Current"}
          component={CurrentWeather}
          options={{
            tabBarIcon: ({ focused }) => <Feather name={"droplet"} />
          }}
        />
        <Tab.Screen name={"Upcoming"} component={UpcomingWeather} />
        <Tab.Screen name={"City"} component={City} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
