import React from 'react';
import {
    AppRegistry,
    View,
    asset,
    PointLight,
    AmbientLight,
    Animated
} from 'react-360';
import Entity from 'Entity';
import Panel from "./panel";
import {connect} from "../../store";

export class Model extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        rotation: 1,
        rotate: 1,
    }

}

    componentDidMount() {
        this.rotation = setInterval(() =>{
            if (this.state.rotate === 360){
                this.setState({rotate: 0})
            }
            this.setState({rotate: this.state.rotate + 1})
        }, 30)
    }
    componentWillReceiveProps() {

    }

    render() {
        return (
            <View>
                <Entity source={{gltf2: asset(this.props.model)}}
                    style={
                        {transform:[
                            {scaleX: .2 },
                            {scaleY: .2 },
                            {scaleZ: .2 },
                                {rotateY: this.state.rotate}
                        ]}
                    }
                />
                <PointLight intensity={3} style={{transform:[
                        {translateX: 1},
                        {translateY: 1},
                        {translateZ: 1}
                    ]}}/>
                <PointLight intensity={2}/>
                <PointLight intensity={1}/>
                <AmbientLight intensity={2}/>
            </View>
        );
    }

}

const ConnectedModels = connect(Model)

AppRegistry.registerComponent('ConnectedModels', () => ConnectedModels);
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
