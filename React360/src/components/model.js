import React from 'react';
import {
    AppRegistry,
    View,
    asset,
    PointLight,
    AmbientLight,
    Box
} from 'react-360';
import Entity from 'Entity';
import Panel from "./panel";

export class Model extends React.Component {
    state = {
        activeCar: Panel.activeCar
    }

    render() {
        return (
            <View>
                <Entity source={{gltf2: asset(`${this.state.activeCar}`)}}
                    style={
                        {transform:[
                            {scaleX: .2 },
                            {scaleY: .2 },
                            {scaleZ: .2 },
                                {rotateY: 45}
                        ]}
                    }
                />

                <PointLight intensity={3}/>
                <AmbientLight intensity={2}/>
            </View>
        );
    }

}

AppRegistry.registerComponent('Model', () => Model);
{/*<Entity*/}
{/*source={{*/}
{/*    obj: asset('Car.obj'),*/}
{/*    mtl: asset('Car.mtl')*/}
{/*}}*/}
{/*style={{transform:[*/}
{/*        {scaleX: 2 },*/}
{/*        { scaleY: 2 },*/}
{/*        { scaleZ: 2 },*/}
{/*    ]}}*/}
{/*/>*/}
// style={
//     {transform:[
//         {scaleX: 2 },
//         { scaleY: 2 },
//         { scaleZ: 2 },
//     ]}
// }
