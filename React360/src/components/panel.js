import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    VrButton,
    VrAnimated,
    Image,
    asset
} from 'react-360';
import carData from "../../data/carData";

export default class Panel extends React.Component {
    state = {
        cars: car.cars
    }

    createCarButtons(cars){

    }

    render() {
        return (
            <View style={styles.panels}>
                <View style={styles.greetingBox}>
                    <VrButton style={styles.changeCarBtn}>
                        <Image style={styles.changeCarImg}
                            source={asset('dodgeR1.jpg')}>
                        </Image>
                        <Text>Dodge R1</Text>
                    </VrButton>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    panels: {
        width: 800,
        height: 200,
        backgroundColor: 'rgba(0,0,0,.3)'
    },
    changeCarBtn:{
    },
    changeCarImg:{
        width: 162,
        height: 70
    }
})
AppRegistry.registerComponent('Panel', () => Panel);
