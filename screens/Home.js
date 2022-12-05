import { View, StyleSheet, ImageBackground, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Constants  from 'expo-constants'
import { MaterialCommunityIcons, Foundation, MaterialIcons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import  Animated, { SlideInDown, SlideInUp, SlideInLeft, FadeIn, FadeInLeft } from 'react-native-reanimated';
import Card from '../components/Card';

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
          </View>
          
          <View style={styles.mainContent}>
          <Image source={require("../assets/logo_pitakalamaki.png")} style={styles.logo} />

              <Animated.Text entering={FadeIn.duration(4000)} style={styles.welcome}>Υπέροχες γεύσεις για όλη την ημέρα!</Animated.Text>
            <Animated.View entering={FadeInLeft} style={styles.slider}>
            <ScrollView horizontal>
              <Card image={require('../assets/poikilia-orektikon.jpeg')} title={'Ποικιλία Ορεκτικών'} price={'6.00'}/>
              <Card image={require('../assets/psomakia-me-kalampokalevro.jpeg')} title={'Ψωμάκια με Καλ/λευρο'} price={'7.90'}/>
              <Card image={require('../assets/salata-roka.jpeg')} title={'Σαλάτα Ρόκα'} price={'11.00'}/>
              <Card image={require('../assets/poikilia-orektikon.jpeg')} title={'Ποικιλία Ορεκτικών'} price={'6.00'}/>
              <Card image={require('../assets/psomakia-me-kalampokalevro.jpeg')} title={'Ψωμάκια με Καλ/λευρο'} price={'7.90'}/>
              <Card image={require('../assets/salata-roka.jpeg')} title={'Σαλάτα Ρόκα'} price={'11.00'}/>
            </ScrollView>
            </Animated.View>
            <View style={styles.poweredbyContainer}>
            <Text style={styles.poweredbyText}>Powered By</Text>
            <Image source={require("../assets/header.logo.thelosouvlakia.png")} style={styles.poweredbyLogo} />
            </View>
            </View>
           
          <TouchableOpacity style={styles.orderButton} onPress={_handlePressButtonAsync} >
          <Animated.View entering={FadeIn.duration(2000)} >
            
            <MaterialIcons name="delivery-dining" size={46} color="#fff" />
          </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mapButton} onPress={()=>Linking.openURL('https://www.google.com/maps/dir//%CE%A0%CE%AF%CF%84%CE%B1+%CE%9A%CE%B1%CE%BB%CE%B1%CE%BC%CE%AC%CE%BA%CE%B9+Al.+Papanastasiou+6+Egaleo+122+41/@37.9909822,23.6820248,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x14a1bcbae2bb33c9:0xbb9264ad3cf15f3e')} >
          <Animated.View entering={FadeIn.duration(1600)} >
          <MaterialCommunityIcons name="map-marker" size={46} color="black" />
          </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.phoneButton} onPress={()=>Linking.openURL('tel:+302105911151')} >
          <Animated.View entering={FadeIn.duration(1600)} >
          <Foundation name="telephone" size={46} color="#000" />
          </Animated.View>
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
    padding: 30,
    opacity: 1,
    borderRadius: 25,
    backgroundColor: '#000',
    opacity: 0.3

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
  mapButton: {
    width: 80,
    height: 80,
    backgroundColor: '#c3c3c3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    shadowColor: '#c3c3c3',
    shadowOpacity: 0.9,
    shadowOffset: { x:10, y:10},
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
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
  },

  mainContent: {
    marginTop: 40,
    width: '100%',
  },
  slider: {
    marginTop: 20
  },
  poweredbyContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 40
  },
  poweredbyText: {
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: {x:5, y:15},
    marginBottom: 5
  },
  poweredbyLogo: {
    width: 140,
    resizeMode: 'contain'

  }
})