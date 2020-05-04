import React, { useEffect, createRef } from 'react';
import { StyleSheet, FlatList, Text, View, Dimensions } from 'react-native'
import Parking from './Parking'
import Modal from './Modal'
import parkings from '../../services/data';

const { width } = Dimensions.get('window')

const renderEmptyComponent = () => <Text>Nenhum veiculo</Text>;

const Parkings = (props) => {
    const { scroll, activeState, data, showModal, activeModal, carDelivered, itemModal, setPosition } = props
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
                keyExtractor={(item) => `${item.id}`}
                ListEmptyComponent={renderEmptyComponent}
                onMomentumScrollEnd={(e) => {
                    const scrolled = e.nativeEvent.contentOffset.x

                    const car = (scrolled > 0) ? scrolled / width : 0

                    const { latitude, longitude } = data[car].coordinate

                    activeState(data[car].id)

                    setPosition(latitude, longitude)

                }}
                renderItem={({ item }) => <Parking activeModal={activeModal} data={item} key={item.id} />}
            />
            {showModal && <Modal carDelivered={carDelivered} showModal={showModal} data={itemModal} activeModal={activeModal} />}
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
