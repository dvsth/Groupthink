import React, { Component } from "react";
import Draggable from "react-draggable"

import "../styles/card.css"

import TextArea from "./TextArea"
import TrashButton from "./Buttons/TrashButton"

export default class Card extends Component {

    // floating up the changes to parent, like a well-behaved React developer
    onTitleChange = (event) => { this.props.onChange(event, this.props.id, "title") };
    onTextChange = (event) => { this.props.onChange(event, this.props.id, "text") };

    // warning: this kills the card
    onClick = (event) => {
        this.props.onChange(event, this.props.id, "close");
        console.log("closed")
    }

    // forces parent to re-render
    onResize = (width, height) => { this.props.onChange(undefined, undefined, undefined) };

    render() {
        return (
            <Draggable
                handle=".top-bar"
                defaultPosition={{ x: this.props.params.x, y: this.props.params.y }}
                position={null}
                grid={[5, 5]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
            >
                <div className="card">
                    <div className="top-bar">
                        <TrashButton click={this.onClick} />
                    </div>
                    <div className="input-area">
                        <TextArea
                            onResize={this.onResize}
                            className="title"
                            onChange={this.onTitleChange}
                            value={this.props.params.title}
                        />
                        <TextArea
                            onResize={this.onResize}
                            className="text"
                            onChange={this.onTextChange}
                            value={this.props.params.text}
                        />
                    </div>
                </div>
            </Draggable>);
    }
}