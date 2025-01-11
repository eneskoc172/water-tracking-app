import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WaveAnimation from './component/wave-animation'

const HomeScreen = () => {
  return (
    <View style={{flex:1}}>
      <Text>HomeScreen</Text>
      <WaveAnimation />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})