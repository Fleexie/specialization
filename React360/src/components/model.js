import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Cylinder,
    Sphere
} from 'react-360';

export class Model extends React.Component {
    render() {
        return (
            <View>
                <Cylinder radiusTop={.2} radiusBottom={.5} dimHeight={2} segments={9} style={{ color:'red',opacity:.3 , transform: [{translate: [.7, -5, 1]}]}}/>
                <Cylinder radiusTop={.2} radiusBottom={.7} dimHeight={2} segments={6} style={{ color:'yellow',opacity:.3 , transform: [{translate: [.7, -5.5, 1]}]}}/>
            </View>
        );
    }

}

AppRegistry.registerComponent('Model', () => Model);
