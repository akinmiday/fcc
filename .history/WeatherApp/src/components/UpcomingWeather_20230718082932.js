import React from "react"
import { SafeAreaView, StyleSheet, Text, FlatList } from "react-native"


const DATA = [
    {},
    {},
    {}
]

const UpcomingWeather = () =>{
 return(
    <SafeAreaView style={styles.container} >
        <Text>Upcomig Weather</Text>
        <FlatList
        data={}
        renderItem={}
        />
    </SafeAreaView>
 )}


const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
export default UpcomingWeather