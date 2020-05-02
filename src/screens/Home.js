import React, { useState } from 'react';

import { View, StyleSheet, SafeAreaView, Text } from 'react-native'

import Map from '../components/Home/Map'
import Header from '../components/Home/Header'
import Parkings from '../components/Home/Parkings'

import parkings from '../services/data'



const Home = () => {
    const [active, setActive] = useState(null)

    const activeState = (id) => {
        setActive(id)
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header />
            <Map active={active} data={parkings} toogleActive={activeState} />
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
