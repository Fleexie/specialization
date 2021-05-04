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

export class Model extends React.Component {
    render() {
        return (
            <View>
                <Entity source={{gltf2: asset('Koenigsegg.glb')}}
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
