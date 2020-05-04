import React, { useState } from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
const { width } = Dimensions.get('screen')

const Parking = (props) => {

    const { activeModal, data } = props

    return (
        <TouchableWithoutFeedback key={data.id} style={styles.parking}>
            <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{ fontSize: 14, marginBottom: 11, }}>{data.client.name}</Text>
                <View>
                    <FontAwesome name="clock-o" size={20} color="#91a1a9" > <Text style={{ color: "#000" }}>{data.devolution}</Text></FontAwesome>
                </View>
            </View>
            <View style={{ flex: 1.3, flexDirection: "row" }}>
                <View style={{ flex: 1, justifyContent: "center", }}>
                    <Ionicons name="ios-star" size={20} color="#91a1a9" > <Text style={{ color: "#000" }}>{data.rating}</Text></Ionicons>
                </View>
                <TouchableOpacity style={styles.buy} onPress={() => activeModal(true, data)}  >
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Text style={{ fontSize: 24, color: "white" }}>R${data.price * 2}</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 24, color: "white" }}> <Ionicons name="ios-arrow-forward" size={23} color="#fff" /></Text>
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback >

    )
}

const styles = StyleSheet.create({
    parking: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 6,
        padding: 12,
        height: 106,
        marginHorizontal: 22,
        width: width - (22 * 2)
    },
    buy: {
        flex: 1,
        width: 100,
        flexDirection: "row",
        padding: 6,
        backgroundColor: '#db5584',
        borderRadius: 6
    }
});

export default Parking;
