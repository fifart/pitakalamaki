import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';


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
        width: 300,
        height: 200,
        borderRadius: 20,
        backgroundColor: '#000',
        overflow: 'hidden',
        alignItems:'center',
        shadowColor: '#c3c3c3',
        shadowOffset: { x:10, y:10},
        shadowRadius: 20,
        shadowOpacity: 0.9,
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
        paddingTop: 5,
        fontWeight: '700',
        color: '#fff',
        fontSize: 13
    }
})

export default Card;