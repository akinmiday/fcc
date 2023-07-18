import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () =>{
  return(
   <SafeAreaView>
     <View style={styles.container} >
      <Text>Current Weather</Text>
    </View>
   </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  container:{
    backgroundColor: 'lightblue',
    width: 100,
    height: 100,
    flex: 1
  }
})

export default App

