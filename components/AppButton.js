import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import  Animated, { SlideInDown, SlideInUp, SlideInLeft, FadeIn, FadeInLeft } from 'react-native-reanimated';

export default function AppButton({icon, onPress, buttonText }) {
  return (
    <View style={styles.appButtonView}>
        <TouchableOpacity style={styles.appButtonButton} onPress={onPress} >
          <Animated.View entering={FadeIn.duration(1600)} >
              {icon}
          </Animated.View>
        </TouchableOpacity>
          <Animated.Text entering={SlideInDown.duration(3000)} style={styles.appButtonText}>{buttonText}</Animated.Text>
    </View>
  )
}

const styles = StyleSheet.create({

    appButtonButton: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowOffset: { x:10, y:10},
        elevation: 20
    
      },
      appButtonView: {
        padding: 0,
        margin: 10,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
      },
      
    appButtonText: {
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
      textAlign: 'center',
      fontWeight: '500',
      color: '#fff',
      elevation: 1,
      shadowColor: '#000',
      shadowOpacity: 0.9,
      shadowOffset: { x:10, y:10},
    },
})