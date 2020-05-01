import React, { useState } from 'react';

import { StyleSheet, Dimensions, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('screen')

const Parking = (props) => {

    const { hours, setHour } = useState(0)

    return (
        <View key={`parking-${props.item.id}`} style={styles.parking}>
            <View style={{ flex: 1, flexDirection: "column" }}>
                <Text>x  {props.item.spots} {props.item.title}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <Text>{props.item.price}</Text>
                    <Text>{props.item.rating}</Text>
                </View>
                <TouchableWithoutFeedback>
                    <View style={styles.buy}>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 20, color: "white" }}> R$ {props.item.price * hours}</Text>
                            <Text style={{ color: "white" }}>{props.item.price} X  {hours} h</Text>
                        </View>
                        <View style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white" }}></Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    parking: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 6,
        padding: 12,
        marginHorizontal: 24,
        width: width - (24 * 2),

    },
    buy: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        backgroundColor: 'red',
        borderRadius: 6,

    }
});



export default Parking;
