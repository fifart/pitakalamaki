import { View, StyleSheet, ImageBackground, Image, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Constants  from 'expo-constants'
import { MaterialCommunityIcons, Foundation } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

export default function Home() {

  const [order, setOrder] = useState(null);

  const _handlePressButtonAsync = async () => {
    let orderUrl = await WebBrowser.openBrowserAsync('https://online.thelosouvlakia.gr/pitakalamaki');
    setOrder(orderUrl);
  };

  return (
      <ImageBackground
        resizeMode='cover'
        source = {require("../assets/p5.jpg")} 
        style = { styles.bgimage }
        >
          <View style={styles.container}> 
              <Image source={require("../assets/logo_pitakalamaki.png")} style={styles.logo} />
              <Text style={styles.welcome}>Υπέροχες γεύσεις για όλη την ημέρα!</Text>

          </View>
          <TouchableOpacity style={styles.orderButton} onPress={_handlePressButtonAsync} >
          <View>
            
            <MaterialCommunityIcons name="border-color" size={46} color="#fff" />
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.phoneButton} onPress={()=>Linking.openURL('tel:+302105911151')} >
          <View>
            
          <Foundation name="telephone" size={46} color="#000" />
          </View>
          </TouchableOpacity>
        </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
  bgimage: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  } ,
  container: {
    // marginTop: Constants.statusBarHeight+10,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 30,
    opacity: 0.5,
    borderRadius: 25


  },
  logo: {
    width: '100%',
    resizeMode: 'contain',
    marginTop: Constants.statusBarHeight+40,
  } ,

  orderButton: {
    width: 80,
    height: 80,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    shadowColor: '#c3c3c3',
    shadowOpacity: 0.9,
    shadowOffset: { x:10, y:10},
    position: 'absolute',
    bottom: 50,
    right: 30,
    padding: 0

  },

  phoneButton: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    shadowColor: '#c3c3c3',
    shadowOpacity: 0.9,
    shadowOffset: { x:10, y:10},
    position: 'absolute',
    bottom: 50,
    left: 30,
    padding: 0

  },

  order: {
    fontSize: 8,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 5,
  },
  welcome: {
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center',
    color: '#fff',
    marginTop: 20
  }
})