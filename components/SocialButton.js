import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import  Animated, { SlideInDown, SlideInUp, SlideInLeft, FadeIn, FadeInLeft } from 'react-native-reanimated';

export default function SocialButton({icon, onPress, buttonText }) {
  return (
    <View style={styles.socialButtonView}>
        <TouchableOpacity style={styles.socialButtonButton} onPress={onPress} >
          <Animated.View entering={FadeIn.duration(1600)} >
              {icon}
          </Animated.View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

    socialButtonButton: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowOffset: { x:10, y:10},
        elevation: 14
    
      },
      socialButtonView: {
        padding: 0,
        margin: 10,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
      },
})