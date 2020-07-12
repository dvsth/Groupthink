import React, { Component } from "react";
import Draggable from "react-draggable"

import "../styles/card.css"

export default class Card extends Component {
    render() {      
        return (
            <Draggable
                handle=".card"
                defaultPosition={{ x: this.props.params.x, y: this.props.params.y }}
                position={null}
                grid={[5, 5]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop} >
                
                <div className="card">
                    <h3>{this.props.params.title}</h3>
                    <p>{this.props.params.text}</p>
                </div>
            </Draggable>
        );
    }
}