import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class JqueryExample extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         defaultDate: new Date()
      }

      this.updateDate = this.updateDate.bind(this);
    }

    jQuerycode = () => {
        $(".btn-1").click(function(){
            $('p').css('color','red')
        });
    }

    componentDidMount(){
        this.jQuerycode();
    }

    updateDate(date){
        this.setState({
            defaultDate: date
        })
    }

  render() {
    return (
      <div>
        <div>
        <h1>JqueryExample</h1>
        <p>I have created a lorem ipsum text and button and I will use jQuery CSS API to change the color of lorem ipsum text by clicking on that button.</p>
        <button className='btn-1'>Change Color</button>
        </div>
        <hr />
        <div>
            <DatePicker selected={this.state.defaultDate} onChange={this.updateDate} />
        </div>
      </div>
      
    )
  }
}

export default JqueryExample