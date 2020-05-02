import React from 'react';

import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const Header = () => {
    return (
        <SafeAreaView style={styles.header}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 30 }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.iconHeader}>
                        <FontAwesome name="location-arrow" size={10} color="#fff" ></FontAwesome>
                    </View>
                    <View style={{}}>
                        <Text style={styles.headerTitle}>Local Detectado</Text>
                        <Text style={styles.headerLocation}>São Paulo, Brasil</Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 12, marginTop: 5 }}>
                    <TouchableWithoutFeedback>
                        <FontAwesome name="navicon" size={20} color="#666" ></FontAwesome>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 0.5,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    headerTitle: {
        fontSize: 13,
        color: "#666"
    },
    headerLocation: {
        fontSize: 16,
    },
    iconHeader: {
        width: 25,
        backgroundColor: "#db5584",
        marginTop: 5,
        marginHorizontal: 12,
        height: 25,
        justifyContent: "center",
        paddingLeft: 6,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#fff'
    }
});



export default Header;
