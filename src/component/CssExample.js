import React, { Component } from 'react'
 import styledComponent from 'styled-components'
// import styleModule from './mymodule.module.css'


export class CssExample extends Component {
    render() {

        const myStyle = {
            color : 'red',
            backgroundColor : 'yellow'
        }
    
        const Styled = styledComponent.div`
                text-align : center;
                border: 5px solid ${ (props) => props.bgColor };
                &:hover{
                  background-color: ${ (props) => props.hoverColor };  
                }
        `
    
        return (
          <div>
            <h4 style={{ color: "green"}}>Inline Style</h4>
            <h4 style={myStyle}>Styled Object</h4>
            {/* <h4 className= {styleModule.align}> Css Module</h4> */}
            <Styled hoverColor="Orange" bgColor="red">Styled Component</Styled>
          </div>
        )
      }
    }
    
    export default CssExample