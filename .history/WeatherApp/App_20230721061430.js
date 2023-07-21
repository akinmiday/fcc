import React, { useState } from "react"
import { ActivityIndicator, View } from "react-native"
import Tabs from "./src/components/Tabs"
import { NavigationContainer } from "@react-navigation/native"

const App = () => {
  const [loading, setLoading] = useState(true)
  if (loading) {
    return (
      <View>
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

export default App
