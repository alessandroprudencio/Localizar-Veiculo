import React from 'react';

import { StyleSheet } from 'react-native'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps


const Map = () => {
    return (
        <MapView
            style={styles.map}
            region={{
                latitude: -20.435322,
                longitude: -54.5700551,
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0143,
            }}
            showsUserLocation
            loadingEnabled
        />
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 3,
    },
});



export default Map;
