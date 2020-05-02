import React, { useEffect } from 'react';

import { StyleSheet, ActivityIndicator, View, Text, Image } from 'react-native'

import MapView from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const { Marker } = MapView

const Map = (props) => {

    return (
        <>
            {props.location.latitude !== undefined ? <MapView
                style={styles.map}
                onMapReady={() => {
                    console.log('terminou'); // Undefined
                }}
                region={{
                    latitude: props.location.latitude,
                    longitude: props.location.longitude,
                    latitudeDelta: 0.0143,
                    longitudeDelta: 0.0143,
                }}
                showsUserLocation
            >
                {props.data.map((parking, index) =>
                    <Marker
                        key={`marker-${parking.id}`}
                        coordinate={parking.coordinate}
                    >
                        <TouchableWithoutFeedback onPress={() => props.toogleActive(parking.id, index)}>
                            <Image style={{ width: 40 }} resizeMode="contain" source={props.active === parking.id ? require('../../../assets/images/icon-car-find-active.png') : require('../../../assets/images/icon-car-find.png')} />
                        </TouchableWithoutFeedback>
                    </Marker>)}
            </MapView> : <ActivityIndicator size="large" style={{ flex: 1 }} color="#0000ff" />}

        </>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 3,
    },
});

export default Map;
