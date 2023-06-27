import React, { Component } from 'react'

export class ReactTable extends Component {
  render() {

    const personlist = [
        {id:101, name: 'ramesh', address:'Chennai'},
        {id:102, name: 'sumesh', address:'Trichy'},
        {id:103, name: 'kamesh', address:'Goa'},
        {id:104, name: 'lokesh', address:'Madurai'},

    ]
    const headerlist = ["Id","Name","Address"];

    return (
      <div>
        <h1>ReactTable</h1>
      <div>
        <table>
            <tr>
                {headerlist.map((header) => {
                    return <th>{header}</th>
                })}
            </tr>
            {personlist.map((person) => {
                return<>
                <tr>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.address}</td>
                </tr>
                </>

            })}
            
        </table>
        </div>
        </div>


      
    )
  }
}

export default ReactTable