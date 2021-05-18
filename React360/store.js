import React from 'react';
import car from "./data/carData";

const State = {
    name: car.DodgeR1.carName,
    model: car.DodgeR1.modelUrl,
    image: car.DodgeR1.image,
}

const listeners = new Set();

function updateComponents(){
    for (const cb of listeners.values()){
        cb();
    }
}

export function changeCar(carSelection){
    let carName = carSelection;
    State.name = carName;
    State.model = car[`${carName}`].modelUrl;
    State.image = car[`${carName}`].image;

    updateComponents();
}

export function connect(Component) {
    return class Wrapper extends React.Component {
        state = {
            name: State.name,
            model: State.model,
            image: State.image
        };

        _listener = () => {
            this.setState({
                name: State.name,
                model: State.model,
                image: State.image
            })
        }

        componentDidMount() {
            listeners.add(this._listener)
        }

        render(){
            return(
                <Component
                    {...this.props}
                    name={this.state.name}
                    model={this.state.model}
                    image={this.state.image}
                />
            )
        }
    }
}
