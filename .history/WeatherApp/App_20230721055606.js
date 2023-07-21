import React from "react"
import Tabs from "./src/components/Tabs"
import { NavigationContainer } from "@react-navigation/native"
import Counter from "./src/components/demostration/Counter"

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

export default App
