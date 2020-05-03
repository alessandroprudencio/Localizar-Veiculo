import React, { useEffect, createRef } from 'react';

import { StyleSheet, Picker, FlatList, Text, View } from 'react-native'

import Parking from './Parking'

import Modal from './Modal'

const renderEmptyComponent = () => <Text>Nenhum veiculo disponivel</Text>;

const Parkings = (props) => {
    const { scroll, data, showModal, activeModal, itemModal } = props
    const flatList = createRef();

    useEffect(() => {
        if (scroll != null) {
            flatList.current.scrollToIndex({
                index: scroll,
                animated: true,
            })
        };

    })

    return (
        <View>
            <FlatList
                scrollEnabled
                pagingEnabled
                horizontal
                ref={flatList}
                centerContent
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                style={styles.parkings}
                data={data}
                keyExtractor={(item, index) => `${item.id}`}
                ListEmptyComponent={renderEmptyComponent}
                renderItem={({ item }) => <Parking activeModal={activeModal} data={item} key={item.id} />}
            />
            {showModal && <Modal showModal={showModal} data={itemModal} activeModal={activeModal} />}
        </View>
    )
}

const styles = StyleSheet.create({
    parkings: {
        position: "absolute",
        right: 0,
        left: 0,
        bottom: 45
    }
});

export default Parkings;
