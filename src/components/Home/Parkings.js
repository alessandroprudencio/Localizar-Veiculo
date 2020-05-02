import React, { useEffect, createRef } from 'react';

import { StyleSheet, Picker, FlatList, Text, View } from 'react-native'

import Parking from './Parking'

const renderEmptyComponent = () => <Text>Nenhum veiculo disponivel</Text>;

const Parkings = (props) => {
    const { selectItem, scroll, data } = props
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
        <FlatList
            scrollEnabled
            pagingEnabled
            horizontal
            ref={flatList}
            centerContent
            extraData={selectItem}
            scrollEventThrottle={16}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            style={styles.parkings}
            data={data}
            keyExtractor={(item, index) => `${item.id}`}
            ListEmptyComponent={renderEmptyComponent}
            renderItem={({ item }) => <Parking data={item} key={item.id} />}
        />
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
