import React from 'react';

import { StyleSheet, ScrollView, Text, View } from 'react-native'

import Parking from './Parking'

const parkings = [
    {
        id: 1,
        title: "Paide Parking",
        price: 10,
        rating: 4.2,
        spots: 20,
        free: 10,
        location: {
            lat: -20.435322,
            lng: -54.5700551,
        }
    },
    {
        id: 2,
        title: "Parking. 2",
        price: 10,
        rating: 4.2,
        spots: 20,
        free: 10,
        location: {
            lat: -20.435312,
            lng: -54.5700551,
        }
    },
    {
        id: 3,
        title: "Parking. 3",
        price: 50,
        rating: 5,
        spots: 20,
        free: 10,
        location: {
            lat: -20.435332,
            lng: -54.5700551,
        }
    }
]


const Parkings = () => {
    return (
        <ScrollView pagingEnabled
            scrollEnabled
            horizontal
            centerContent
            scrollEventThrottle={16}
            // onScrollEndDrag={props =>}
            snapToAlignment="center"
            // contentInset={{ top: 0, left: 12, bottom: 0, right: 12 }}
            showsHorizontalScrollIndicator={false}
            style={styles.parkings}>
            {parkings.map(parking => <Parking item={parking} key={parking.id} />)}
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    parkings: {
        position: "absolute",
        right: 0,
        left: 0,
        bottom: 45
    }
});



export default Parkings;
