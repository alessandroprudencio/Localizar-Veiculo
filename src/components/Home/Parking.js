import React, { useState } from 'react';

import { StyleSheet, Dimensions, Text, View } from 'react-native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('screen')

const Parking = (props) => {

    const [hours, setHour] = useState(10)

    return (
        <TouchableWithoutFeedback key={props.data.id} style={styles.parking} onPress={() => props.toogleActive(props.data.id)}>
            <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{ fontSize: 14, marginBottom: 11, }}>x{props.data.spots} {props.data.title}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ padding: 8, alignItems: "center", width: 60, borderRadius: 6, borderWidth: 0.5, borderColor: "grey" }}>
                        <Text style={{ fontSize: 14 }}> 05:00</Text>
                    </View>
                    <Text style={{ fontSize: 16, color: "#999" }}> hrs</Text>
                </View>
            </View>
            <View style={{ flex: 1.3, flexDirection: "row" }}>
                <View style={{ flex: 1, justifyContent: "center", }}>
                    <Ionicons style={{ marginBottom: 10, }} name="ios-pricetag" size={16} color="#91a1a9" > <Text style={{ marginLeft: 16, color: "#000" }}>R${props.data.price}</Text></Ionicons>
                    <Ionicons name="ios-star" size={15} color="#91a1a9" > <Text style={{ marginLeft: 15, color: "#000" }}>{props.data.rating}</Text></Ionicons>
                </View>
                <TouchableOpacity style={styles.buy}>
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Text style={{ fontSize: 24, color: "white" }}>R${props.data.price * 2}</Text>
                        <Text style={{ color: "white" }}>{props.data.price}X{hours} hrs</Text>
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
