import React from 'react';

import { View, StyleSheet, SafeAreaView, Text } from 'react-native'

import Map from '../components/Home/Map'
import Header from '../components/Home/Header'
import Parkings from '../components/Home/Parkings'
import Footer from '../components/Home/Footer'

const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header />
            <Map />
            <Parkings />
            <Footer />
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
