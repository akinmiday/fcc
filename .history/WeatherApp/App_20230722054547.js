import React, { useState, useEffect } from "react"
import { ActivityIndicator, View, StyleSheet } from "react-native"
import Tabs from "./src/components/Tabs"
import { NavigationContainer } from "@react-navigation/native"
import * as Location from "expo-location"
import { WEATHER_API_KEY } from "./api"

const App = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState()
  const [lon, setLon] = useState()

  const fetchWeatheData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
      )
      const data = await res.json()
      setWeather(data)
      setLoading(false)
    } catch (e) {
      setError("Could not fetch weather")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    ;(async function () {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        setError("Permission to access location was denied")
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)

      await fetchWeatheData()
    })
  }, [])

  if (weather) {
    console.log(weather)
  }

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
