import React, { useState, useEffect } from "react"
import { ActivityIndicator, View, StyleSheet } from "react-native"
import Tabs from "./src/components/Tabs"
import { NavigationContainer } from "@react-navigation/native"

const App = () => {
  const [loading, setLoading] = useState(true)
  const []
  // if (loading) {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator size={"large"} color={"blue"} />
  //     </View>
  //   )
  // }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  }
})

export default App
