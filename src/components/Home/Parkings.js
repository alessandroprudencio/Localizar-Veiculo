import React from 'react';

import { StyleSheet, Picker, FlatList, Text, View } from 'react-native'

import Parking from './Parking'

const Parkings = (props) => {
    const { toogleActive } = props
    return (
        <FlatList
            scrollEnabled
            pagingEnabled
            horizontal
            centerContent
            scrollEventThrottle={16}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            style={styles.parkings}
            data={props.data}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item }) => <Parking toogleActive={toogleActive} data={item} key={item.id} />}
        />
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
