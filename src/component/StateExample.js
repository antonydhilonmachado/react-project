import { render } from "@testing-library/react";
import React,{Component} from "react";

class StateExample extends Component {
    constructor(props) {
        super(props)

        this.state={
            name : 'Besant',
            show :true,
            buttonName : 'hide'


        }

        this.updateState =this.updateState.bind(this);


    }

    updateState(){
        this.setState({
            show : !this.state.show,
            buttonName : 'Show'
        })
    }

    render() {
        const details = this.state.show ? (
            <h4>welcome to react js tutorial</h4>
        ) : null
    
        return (
            <div>
                <p>Name : {this.state.name} {details}</p>
                <button onClick={this.updateState}>hide</button>
                <button onClick={this.updateState}>show</button>
            </div>
    
        )
    }
}

export default StateExample