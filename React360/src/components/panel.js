import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    VrButton,
    VrAnimated,
    Image
} from 'react-360';

export default class Panel extends React.Component {
    render() {
        return (
            <View style={styles.panels}>
                <View style={styles.greetingBox}>
                    <VrButton>
                        <Image source={r360.getAssetURL('dodgeR1.jpg')} />
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
    }
})
AppRegistry.registerComponent('Panel', () => Panel);
