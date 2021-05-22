import React from 'react';
import {
    AppRegistry,
    View,
    asset,
    PointLight,
    AmbientLight,
} from 'react-360';
import Entity from 'Entity';
import {connect} from "../../store";

export class Model extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        rotation: 1,
        rotate: 1,
        modelScale: .2
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

    componentDidUpdate() {
        if (this.props.name === "DodgeR1" && this.state.modelScale !== .33){
            this.setState({modelScale: .33})
        }
        else if(this.props.name === "Koenigseggs" && this.state.modelScale !== .2) {
            this.setState({modelScale: .2})
        }else {return}
    }

    render() {
        return (
            <View>
                <Entity source={{gltf2: asset(this.props.model)}}
                    style={
                        {transform:[
                            {scaleX: this.state.modelScale },
                            {scaleY: this.state.modelScale },
                            {scaleZ: this.state.modelScale },
                                {rotateY: this.state.rotate}
                        ]}
                    }
                />
                <PointLight intensity={4} style={{transform:[
                        {translateX: 1},
                        {translateY: 1},
                        {translateZ: 1}
                    ]}}/>
                <PointLight intensity={3} style={{transform:[
                        {translateX: -1},
                        {translateY: 1},
                        {translateZ: -1}
                    ]}}/>
                <PointLight intensity={2} style={{transform:[
                        {translateX: 0},
                        {translateY: 1},
                        {translateZ: 0}
                    ]}}/>
                <AmbientLight intensity={5}/>
            </View>
        );
    }
}

const ConnectedModels = connect(Model)

AppRegistry.registerComponent('ConnectedModels', () => ConnectedModels);
