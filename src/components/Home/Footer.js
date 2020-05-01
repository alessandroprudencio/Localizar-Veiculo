import React from 'react';

import { StyleSheet, ScrollView, Text, View } from 'react-native'


const Footer = () => {
    return (
        <View style={styles.footer}>
        </View >
    )
}

const styles = StyleSheet.create({
    footer: {
        position: "absolute",
        justifyContent: "center",
        left: 8,
        bottom: 0,
        right: 8
    },
});



export default Footer;
