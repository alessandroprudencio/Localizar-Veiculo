import React, { useState, useEffect } from 'react';

import { View, StyleSheet, SafeAreaView, Text } from 'react-native'

import Map from '../components/Home/Map'
import Header from '../components/Home/Header'
import Parkings from '../components/Home/Parkings'

import parkings from '../services/data'



const Home = () => {
    const [active, setActive] = useState(null)
    const [location, setLocation] = useState({})

    const activeState = (id) => {
        setActive(id)
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => { setLocation({ lat: position.coords.latitude, lng: position.coords.longitude }) },
            (error) => { console.log(error) },
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 10000
            }
        )
    });

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header />
            <Map location={location} active={active} data={parkings} toogleActive={activeState} />
            <Parkings toogleActive={activeState} data={parkings} />
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
        flex: 1
    },
});



export default Home;
