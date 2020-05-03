import React, { useEffect } from 'react';

import { Text, View, StyleSheet, Image, Dimensions, Platform } from 'react-native'

import { getRealWindowHeight } from 'react-native-extra-dimensions-android'

const { width } = Dimensions.get('screen')
const height = Platform.OS === "ios" ? Dimensions.get("window").height : getRealWindowHeight;

import { Ionicons, FontAwesome } from '@expo/vector-icons';

import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ModalComponent = (props) => {
    const { showModal, activeModal, data } = props

    return (
        <View>
            <Modal
                key={data.id}
                useNativeDriver
                // onBackButtonPress={() => activeModal(false)}
                // swipeToClose={() => activeModal(false)}
                onBackdropPress={() => activeModal(false)}
                // onSwipeComplete={activeModal(false)}
                style={styles.modal}
                isVisible>
                <View key={data.id} style={styles.viewModal}>
                    <View style={{ flexDirection: "row", marginBottom: 20, justifyContent: "space-between" }}>
                        <View style={{}}>
                            <Text style={{ fontSize: 20 }}>{data.name}</Text>
                        </View>
                        <View>
                            <Image resizeMode="contain" source={require('../../../assets/icons/menu-modal.png')} style={{ height: 23, width: 20 }} />
                        </View>
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={{ fontSize: 17, color: "#ccc" }}>{data.description}.</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 25, paddingBottom: 20, paddingTop: 20, justifyContent: "space-around", borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#ccc" }}>
                        <Ionicons name="ios-pricetag" size={16} color="#91a1a9" >  <Text style={{ fontSize: 19, color: "#000" }}>R${data.price}</Text></Ionicons>
                        <Ionicons name="ios-star" size={16} color="#91a1a9" >  <Text style={{ fontSize: 19, color: "#000" }}>{data.rating}</Text></Ionicons>
                        <FontAwesome name="map-marker" size={16} color="#91a1a9" >  <Text style={{ fontSize: 19, color: "#000" }}>{data.distance ? data.distance : 0}km</Text></FontAwesome>
                    </View>
                    <View style={{ alignItems: "center", padding: 15 }}>
                        <Text style={{ paddingBottom: 20 }}>Escolha o seu período de reserva:</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{ padding: 8, alignItems: "center", width: 60, borderRadius: 6, borderWidth: 0.5, borderColor: "grey" }}>
                                <Text style={{ fontSize: 14 }}> 05:00</Text>
                            </View>
                            <Text style={{ fontSize: 16, color: "#999" }}> hrs</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", position: 'absolute', bottom: 0, margin: 0 }}>
                        <TouchableOpacity style={styles.btn}>
                            <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-start" }}>
                                <Text style={{ fontSize: 19, color: "#FFF" }}>Efetuar pagamento R${data.price}</Text>
                            </View>
                            <View style={{ justifyContent: "flex-end", flex: 0.2, alignItems: "flex-end" }}>
                                <Text style={{ fontSize: 24, color: "white" }}> <Ionicons name="ios-arrow-forward" size={23} color="#fff" /></Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )

}

const styles = StyleSheet.create({
    modal: {
        margin: 0,
        justifyContent: "flex-end"
    },
    viewModal: {
        backgroundColor: "#fff",
        padding: 20,
        width: width,
        height: height * 0.75,
        borderRadius: 15
    },
    btn: {
        backgroundColor: "#db5584",
        borderRadius: 6,
        flexDirection: "row",
        padding: 25,
        marginHorizontal: 20,
        marginBottom: 50,
        width: width - 42
    }
})

export default ModalComponent