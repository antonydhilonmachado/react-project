import React, { Component } from 'react'

export class componentlifecyclemethods extends Component {

constructor(props) {
  super(props)

  this.state = {
     Name : "antony",
     address : "ambattur",
     visitCount : 0

  }
}

componentWillMount(){
    alert("Invoked before mounting the component ");
}

componentDidMount(){
    alert("Invoked after mounting the component");
}


  render() {
    return (
      <div>
        Name : {this.state.name}</br>
        address

      </div>
    )
  }
}

export default componentlifecyclemethods