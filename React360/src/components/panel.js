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
        activeCar: 'Car.gltf'
    }

    createCarButtons(cars){
        let buttons = [];
        carData.cars.map(car => {
            buttons.push(
                <VrButton key={`${car.name}` + '-button'} style={styles.changeCarBtn}>
                    <Image
                        style={styles.changeCarImg}
                        source={asset(`${car.image}`)}>
                    </Image>
                    <Text style={{backgroundColor: 'green'}}>{ car.name }</Text>
                </VrButton>
            )
        })
        return buttons;
    }
    // onClick={() => this.clickHandler(car)}

    render() {
        return (
            <View style={styles.panels}>
                <View style={styles.greetingBox}>
                    { this.createCarButtons(carData.cars) }
                    {/*<VrButton style={styles.changeCarBtn}>*/}
                    {/*    <Image style={styles.changeCarImg}*/}
                    {/*        source={asset('dodgeR1.jpg')}>*/}
                    {/*    </Image>*/}
                    {/*    <Text>Dodge R1</Text>*/}
                    {/*</VrButton>*/}
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
