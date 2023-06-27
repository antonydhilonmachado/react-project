import PropTypes from 'prop-types'
import React, { Component } from 'react'

class PropsInClassComponent extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <p>
                Name : {this.props.address}
                </p>
                <h1>Default Props Example</h1>
                <table>
                    <tr>
                        <th>types</th>
                        <th>Value</th>
                    </tr>

                    <tr>
                        <th>String</th>
                        <th>{this.props.name}</th>
                    </tr>

                    <tr>
                        <th>Number</th>
                        <th>{this.props.streetNo}</th>
                    </tr>

                    <tr>
                        <th>String</th>
                        <th>{this.props.marks}</th>
                    </tr>
                    <tr>
                        <th>String</th>
                        <th>{this.props.result}</th>
                    </tr>

                </table>
            </div>
        )
    }
}

export class PropsinClassComponent extends Component {
  render() {
    return (
      <div>PropsinClassComponent</div>
    )
  }
}

export default PropsinClassComponent