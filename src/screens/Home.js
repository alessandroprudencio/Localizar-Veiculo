import React, { useState, useEffect } from 'react';

import { View, StyleSheet, SafeAreaView, Text } from 'react-native'

import Map from '../components/Home/Map'
import Header from '../components/Home/Header'
import Parkings from '../components/Home/Parkings'

import parkings from '../services/data'

const Home = () => {
    const [active, setActive] = useState(null)
    const [location, setLocation] = useState({})
    const [selectItem, setItem] = useState(null)
    const [scroll, setScroll] = useState(null)

    const activeState = (id, index) => {
        setActive(id)
        setItem(id)
        setScroll(index)
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude })
        }, (error) => { console.log(error) },
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 10000
            }
        )
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header />
            <Map selectItem={selectItem} location={location} active={active} data={parkings} toogleActive={activeState} />
            <Parkings scroll={scroll} selectItem={selectItem} data={parkings} />
        </View>
    )
}

export default Home;
