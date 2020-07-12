import React, { Component } from "react";
import Draggable from "react-draggable"
import TextareaAutosize from "react-autosize-textarea";

import "../styles/card.css"

export default class Card extends Component {

    onChange = (event) => { this.props.onChange(event, this.props.id) };

    render() {
        return (
            <Draggable
                handle=".title"
                defaultPosition={{ x: this.props.params.x, y: this.props.params.y }}
                position={null}
                grid={[5, 5]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop} >
                <div className="card">
                    <div className="top-bar"></div>
                    <div className="input-area">
                        <TextareaAutosize className="title" onChange={this.onChange} value={this.props.params.title} />
                        <hr />
                        <TextareaAutosize className="text" value={this.props.params.text} />
                    </div>
                </div>
            </Draggable>);
    }
}