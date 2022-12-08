import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, Platform} from 'react-native';


function Card({image, title, price}) {
    

    return (
        
        <View style={styles.cardContainer}>
            <Image source={image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{title} <Text style={{fontWeight:'400'}}>{price}€</Text></Text>
        </View>
        
        
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 200,
        height: 120,
        backgroundColor: '#000',
        overflow: 'hidden',
        alignItems:'center',
        shadowColor: '#000',
        shadowOffset: { width: 24, height: 26  },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 30,
        opacity: 1,
        margin: 10
    }
,
    cardImage: {
        width: '100%',
        height: '80%',
        
    }
    ,
    cardTitle: {
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        paddingTop: 5,
        fontWeight: '700',
        fontSize: 13,
        color: '#fff',
    }
})

export default Card;