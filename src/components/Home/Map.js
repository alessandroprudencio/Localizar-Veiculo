import React, { useEffect } from 'react';

import { StyleSheet, View, Text, Image } from 'react-native'

import MapView from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const { Marker } = MapView

const Map = (props) => {

    return (
        <MapView
            style={styles.map}
            region={{
                latitude: props.location.lat,
                longitude: props.location.lng,
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0143,
            }}
            showsUserLocation
            loadingEnabled
        >
            {props.data.map(parking =>
                <Marker
                    key={`marker-${parking.id}`}
                    coordinate={parking.coordinate} >
                    <TouchableWithoutFeedback onPress={() => props.toogleActive(parking.id)}>
                        <Image style={{ width: 40 }} resizeMode="contain" source={props.active === parking.id ? require('../../../assets/images/icon-car-find-active.png') : require('../../../assets/images/icon-car-find.png')} />
                    </TouchableWithoutFeedback>
                </Marker>)}
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 3,
    },
});

export default Map;
