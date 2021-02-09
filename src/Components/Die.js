import React, { Component } from 'react'
import "./Die.css"

class Die extends Component {

    render(){
        return (
            <div>
                <h1><i className={`Die fas fa-dice-${this.props.face}`}></i></h1>
                
                </div>
        )
    }
}

export default Die