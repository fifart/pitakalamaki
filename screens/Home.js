import { View, StyleSheet, ImageBackground, Image, ScrollView, Platform, FlatList } from 'react-native'
import React, { useState, useCallback } from 'react'
import Constants  from 'expo-constants'
import { MaterialCommunityIcons, Foundation, MaterialIcons, EvilIcons, AntDesign, Entypo } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import  Animated, { FadeIn, FadeInLeft } from 'react-native-reanimated';


import Card from '../components/Card';
import AppButton from '../components/AppButton';
import PoweredBy from '../components/PoweredBy';  
import SocialButton from '../components/SocialButton';
import menu from '../assets/menu';

export default function Home() {

 
  const [order, setOrder] = useState(null);

  const _handlePressButtonAsync = async () => {
    let orderUrl = await WebBrowser.openBrowserAsync('https://online.thelosouvlakia.gr/pitakalamaki');
    setOrder(orderUrl);
  };
  
  return (
    
      <ImageBackground
        resizeMode='cover'
        source = {require("../assets/bg.jpg")} 
        style = { styles.bgimage }
        >
          <View style={styles.container}>  
          </View>
          
          <View style={styles.mainContent}>
              <Image source={require("../assets/logo_pitakalamaki.png")} style={styles.logo} />
              <Animated.Text entering={FadeIn.duration(4000)} style={styles.welcome}>Υπέροχες γεύσεις για όλη την ημέρα!</Animated.Text>
             
            <Animated.View entering={FadeInLeft} style={styles.slider}>
            <Animated.Text entering={FadeIn.duration(4000)} style={styles.featured}>Αγαπημένα Πιάτα</Animated.Text>
            
            <FlatList
              horizontal = {true}
              data = {menu}
              keyExtractor = {menuitem => menuitem.id.toString()}
              renderItem = { 
                ({item}) => <Card image={item.menuImage} title={item.menuTitle} price={item.menuPrice} />
              }
              />
            </Animated.View>
           </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between' , marginTop: 20 }}>
          <AppButton 
          icon={<Foundation name="telephone" size={46} color="#000" />} 
          onPress={()=>Linking.openURL('tel:+302105911151')}
          buttonText={'Άμεση Κλήση'}
          />
          <AppButton 
          icon={<MaterialCommunityIcons name="map-marker" size={46} color="black" />} 
          onPress={()=>Linking.openURL('https://www.google.com/maps/dir//%CE%A0%CE%AF%CF%84%CE%B1+%CE%9A%CE%B1%CE%BB%CE%B1%CE%BC%CE%AC%CE%BA%CE%B9+Al.+Papanastasiou+6+Egaleo+122+41/@37.9909822,23.6820248,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x14a1bcbae2bb33c9:0xbb9264ad3cf15f3e')}
          buttonText={'Πλοήγηση'}
          />
          <AppButton 
          icon={<MaterialIcons name="delivery-dining" size={46} color="#000" />} 
          onPress={_handlePressButtonAsync}
          buttonText={'Online Delivery'}
          />
          </View>
          <Animated.Text entering={FadeIn.duration(4000)} style={styles.socials}>Follow Our Socials</Animated.Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between' , marginTop: 2 }}>
            <SocialButton 
              icon={<EvilIcons name="sc-facebook" size={34} color="black" />}
              onPress={()=>Linking.openURL('https://www.facebook.com/pitakalamakiaigalew')}
            />
            <SocialButton 
              icon={<AntDesign name="instagram" size={34} color="black" />}
              onPress={()=>Linking.openURL('https://www.instagram.com/pita_kalamaki_aigaleo')}
            />
            <SocialButton 
              icon={<Entypo name="tripadvisor" size={24} color="black" />}
              onPress={()=>Linking.openURL('https://www.tripadvisor.com/Restaurant_Review-g1772175-d19098176-Reviews-Pita_Kalamaki_Aigaleo-Egaleo_Attica.html')}
            />
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center' , marginTop: 50, position: 'absolute', bottom: 10 }}>
            <PoweredBy />
          </View>
          
        </ImageBackground>
      
  )
}

const styles = StyleSheet.create({
  bgimage: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
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
    opacity: 0.3

  },
  logo: {
    marginTop: Constants.statusBarHeight+10,
    width: '100%',
    resizeMode: 'contain',
    marginTop: Constants.statusBarHeight+40,
    shadowColor: '#424242',
    shadowOffset: { width: 2, height: 3  },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  } ,

  welcome: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {width:1, height: 2},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 20,
    width: 300,
    alignSelf: 'center',
    marginBottom: 20,
  },
  featured: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width:1, height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
    width: 300,
    alignSelf: 'center'
  },

  socials: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width:1, height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
    width: 300,
    alignSelf: 'center'
  },

  mainContent: {
    marginTop: 0,
    width: '100%',
  },
  slider: {
    marginTop: 5,
    elevation: 1
  },
  
})