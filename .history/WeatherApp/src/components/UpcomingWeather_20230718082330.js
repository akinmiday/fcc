import React from "react"
import { SafeAreaView, StyleSheet, Text } from "react-native"


const UpcomingWeather = () =>{
 return(
    <SafeAreaView style={styles.container} >
        <Text>Upcomig Weather</Text>
    </SafeAreaView>
 )}


const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
export default UpcomingWeather