import React, { useEffect, createRef } from 'react';

import { StyleSheet, ImageBackground, ActivityIndicator, View, Text, Image, Platform } from 'react-native'

import MapView, { AnimatedRegion } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const { Marker } = MapView


const Map = (props) => {

    const mapViewRef = createRef()

    const { data, setActive, activeState, active, positionMap } = props

    useEffect(() => {
        if (Object.entries(positionMap).length != 0) {
            const { latitude, longitude } = positionMap
            mapViewRef.current.animateToRegion({ latitude, longitude }, 1000)
        }

    }, [positionMap])

    const onMapReady = () => setActive(data[0].id)

    return (
        <>
            <MapView
                style={styles.map}
                ref={mapViewRef}
                userLocationAnnotationTitle={"Eu"}
                initialRegion={{
                    latitude: data[0].coordinate.latitude,
                    longitude: data[0].coordinate.longitude,
                    latitudeDelta: 0.0042,
                    longitudeDelta: 0.0200
                }}
                loadingEnabled
                loadingIndicatorColor={"blue"}
                loadingBackgroundColor={"#F7F6F0"}
                onMapReady={onMapReady}
                rotateEnabled={false}
                showsUserLocation
                showsPointsOfInterest={false}
                showsBuildings={false}
                showsCompass={false}
            >
                {data.map((parking, index) =>
                    <Marker
                        key={`marker-${parking.id}`}
                        coordinate={{ latitude: parking.coordinate.latitude, longitude: parking.coordinate.longitude }}
                    >
                        <TouchableWithoutFeedback onPress={() => activeState(parking.id, index)}>
                            <Image style={{ width: 40 }} resizeMode="contain" source={active === parking.id ? require('../../../assets/images/icon-car-find-active.png') : require('../../../assets/images/icon-car-find.png')} />
                        </TouchableWithoutFeedback>
                    </Marker>)}


            </MapView>

        </>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 3.5,
    },
});

export default Map;
