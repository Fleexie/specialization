import React from "react";
import {AppRegistry, StyleSheet, View, Cylinder, Sphere} from 'react-360';
import Entity from 'Entity';
import React360 from "./index";


export default class Test extends React.Component{
    render() {

        return(
            <View>
                <Cylinder radiusTop={2} radiusBottom={2} dimHeight={5} segments={12} style={{color:'white'}}/>
            </View>
        );

    }
};

AppRegistry.registerComponent('Test', () => Test);
