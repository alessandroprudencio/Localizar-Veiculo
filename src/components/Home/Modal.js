import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Platform, Linking } from 'react-native'
import { getRealWindowHeight } from 'react-native-extra-dimensions-android'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width } = Dimensions.get('screen')

const height = Platform.OS === "ios" ? Dimensions.get("window").height : getRealWindowHeight;

const ModalComponent = (props) => {
    const { activeModal, data, carDelivered } = props

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
                            <Text style={{ fontSize: 20 }}>{data.client.name}</Text>
                        </View>
                        <View>
                            <Image resizeMode="contain" source={require('../../../assets/icons/menu-modal.png')} style={{ height: 23, width: 20 }} />
                        </View>
                    </View>
                    <View >
                        <Text style={{ fontSize: 17, color: "#ccc" }}>{data.description}.</Text>
                    </View>
                    <View style={{ flex: 0.6, flexDirection: "column", justifyContent: "space-around" }}>
                        <View>
                            <Ionicons name="ios-pricetag" size={20} color="#91a1a9" >  <Text style={{ fontSize: 17, color: "#000" }}>R$ {data.price}</Text></Ionicons>
                        </View>
                        <View>
                            <Ionicons name="ios-star" size={20} color="#91a1a9" >  <Text style={{ fontSize: 17, color: "#000" }}>{data.rating}</Text></Ionicons>
                        </View>
                        <View>
                            <FontAwesome name="clock-o" size={20} color="#91a1a9" >  <Text style={{ fontSize: 17, color: "#000" }}>{data.departure_date}</Text></FontAwesome>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => Linking.openURL(Platform.OS === 'android' ? `tel:${data.client.phone}` : `telprompt:${data.client.phone}`)}>
                                <FontAwesome
                                    name='phone'
                                    size={20}
                                    color='#91a1a9' >  <Text style={{ fontSize: 17, color: "#e55b8b" }}> {data.client.phone}</Text></FontAwesome>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", position: 'absolute', bottom: 0, margin: 0 }}>
                        <TouchableOpacity style={styles.btn} onPress={() => { carDelivered(data); activeModal(false) }}>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontSize: 19, color: "#FFF" }}>Carro Entregue</Text>
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