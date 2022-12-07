import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function PoweredBy() {
  return (
    <View style={styles.poweredbyContainer}>
        <Text style={styles.poweredbyText}>Powered By</Text>
        <Image source={require("../assets/header.logo.thelosouvlakia.png")} style={styles.poweredbyLogo} />
    </View>
  )
}

const styles = StyleSheet.create({
    poweredbyContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 10,
      },
      poweredbyText: {
        color: '#fff',
        textShadowColor: '#000',
        textShadowOffset: {x:5, y:15},
        marginBottom: 5,
        shadowColor: '#000',
        shadowOffset: {with: 10, height: 5},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 10 
      },
      poweredbyLogo: {
        width: 140,
        resizeMode: 'contain',
        shadowColor: '#000',
        shadowOffset: {with: 10, height: 5},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 10
      }
})