import React from "react"
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  StatusBar
} from "react-native"
import { Feather } from "@expo/vector-icons"

const DATA = [
  {
    dt_txt: "2023-02-18 12:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: "Clear"
      }
    ]
  },

  {
    dt_txt: "2023-02-18 15:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: "Clouds"
      }
    ]
  },
  {
    dt_txt: "2023-02-18 12:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: "Rain"
      }
    ]
  }
]

const Item = (props) => {
  const { dt_txt, min, max, condition } = props
  return (
    <View style={styles.item}>
      <Feather name="sun" size={50} color="white" />
      <Text>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcomig Weather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "red"
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "pink"
  }
})

export default UpcomingWeather
