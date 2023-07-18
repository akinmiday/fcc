import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () =>{
  return(
   <SafeAreaView style={styles.wrapper} >
     <View style={styles.container} >
      <Text>Current Weather</Text>
      <Text>6</Text>
      <Text>fe</Text>
      <Text></Text>
      <Text></Text>
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
  }
})

export default App

