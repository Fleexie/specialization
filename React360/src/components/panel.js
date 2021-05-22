import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    VrButton,
    VrAnimated,
    Image,
    asset,

} from 'react-360';

import car from "../../data/carData";
import {connect, changeCar} from "../../store";

export default class Panel extends React.Component {

    changeCarName(car){
        changeCar(car)
    }

    createCarButtons(cars, carN){
        let buttons = [];

        cars.map(car => {
            console.log(car)
            console.log(carN[car].carName)
            buttons.push(
                <VrButton key={carN[car].carName + '-button'}
                          style={styles.changeCarBtn}
                          id={carN[car].carName}
                          onClick={() => this.changeCarName(car)}
                >
                    <View pointerEvents={'none'}>
                        <Image
                            style={styles.changeCarImg}
                            source={asset(carN[car].image)}>
                        </Image>
                        <Text style={{backgroundColor: 'rgba(88,203,84,0.4)', textAlign: 'center'}}>{ carN[car].carName }</Text>
                    </View>
                </VrButton>
            )
        })
        return buttons;
    }

    render() {
        return (
            <View style={styles.panels}>

                { this.createCarButtons(car.DodgeR1.cars, car) }

            </View>
        );
    }
};

const ConnectedPanel = connect(Panel)

const styles = StyleSheet.create({
    panels: {
        width: 800,
        height: 200,
        backgroundColor: 'rgba(0,0,0,.01)',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',

    },
    changeCarBtn:{
        width:200,
        margin: '5px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    changeCarImg:{
        width: 162,
        height: 70
    }
})
AppRegistry.registerComponent('ConnectedPanel', () => ConnectedPanel);
