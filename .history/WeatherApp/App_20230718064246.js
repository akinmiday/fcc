import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () =>{
  return(
   <SafeAreaView>
     <View style={{backgroundColor: 'pink'}} >
      <Text>Current Weather</Text>
    </View>
   </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  container:{
    backgroundColor: ''
  }
})

export default App

