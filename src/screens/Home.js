import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native'
import Map from '../components/Home/Map'
import Header from '../components/Home/Header'
import Parkings from '../components/Home/Parkings'
import parkingsJson from '../services/data'


let parkings = parkingsJson

const Home = () => {
    const [active, setActive] = useState(null)
    const [location, setLocation] = useState({})
    const [scroll, setScroll] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [itemModal, setItemModal] = useState(null)
    const [positionMap, setPositionMap] = useState({})

    const activeState = (id, index) => {
        setActive(id)
        setScroll(parkings.findIndex(x => x.id === id))
    }

    const carDelivered = (data) => {
        parkings = parkings.filter(item => item.id !== data.id);
        setScroll(parkings[0])
        // setActive(parkings.findIndex(x => x.id === data.id))
    }


    const showModalState = (state, item) => {
        setShowModal(state)
        setItemModal(item)
    };

    const setPosition = (lat, lng) => {
        setPositionMap({ latitude: lat, longitude: lng })
    }

    // const locationToAddress = async (position) => {
    //     const url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyCN-L3LJ-fetIp6uNDwD6UC_jT9g198Mxc"
    //     console.log('vai buscar')
    //     const response = await fetch(url)
    //     console.log(response.json())
    // }


    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude })
        }, (error) => { console.log(error) },
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 0
            }
        )
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header />
            <Map setActive={setActive} positionMap={positionMap} location={location} active={active} data={parkings} activeState={activeState} />
            <Parkings activeState={activeState} setPosition={setPosition} itemModal={itemModal} showModal={showModal} activeModal={showModalState} scroll={scroll} carDelivered={carDelivered} data={parkings} />
        </View>
    )
}

export default Home;
