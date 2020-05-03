import React, { useState, useEffect } from 'react';

import { View, StyleSheet, SafeAreaView, Text } from 'react-native'

import Map from '../components/Home/Map'
import Header from '../components/Home/Header'
import Parkings from '../components/Home/Parkings'

import parkings from '../services/data'

const Home = () => {
    const [active, setActive] = useState(null)
    const [location, setLocation] = useState({})
    const [scroll, setScroll] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [itemModal, setItemModal] = useState(null)

    const activeState = (id, index) => {
        setActive(id)
        setScroll(index)
    }

    const showModalState = (state, item) => {
        setShowModal(state)
        setItemModal(item)
    };

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
            <Map location={location} active={active} data={parkings} toogleActive={activeState} />
            <Parkings itemModal={itemModal} showModal={showModal} activeModal={showModalState} scroll={scroll} data={parkings} />
        </View>
    )
}

export default Home;
