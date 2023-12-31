import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () =>{
  return(
   <SafeAreaView style={styles.wrapper} >
     <View style={styles.container} >
      <Text style={styles.temp} >6</Text>
      <Text style={styles.feels} >Feels like 5</Text>
      <Text>High: 8 Low: 6</Text>
    </View>
   </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  wrapper:{
    flex:1,
  },
  container:{
    backgroundColor: 'pink',
    alignItems: 'center'
  },
  temp:{
    color:'black',
    fontSize:48
  },
  feels:{
    fontSize: 30,
    color:'black'
  }
})

export default App

