import React, { Component } from "react";
import Draggable from "react-draggable"

import "../styles/card.css"

import TextArea from "./TextArea"
import TrashButton from "./Buttons/TrashButton"

export default class Card extends Component {

    constructor(props) {
        super(props);
        this.cardPosition = this.props.params.position;
    }

    // floating up the changes to parent, like a well-behaved React developer
    onTitleChange = (event) => { this.props.onChange(event, this.props.id, "title") };
    onTextChange = (event) => { this.props.onChange(event, this.props.id, "text") };

    // warning: this kills the card
    onClick = (event) => {
        this.props.onChange(event, this.props.id, "close");
    }

    // forces parent to re-render
    onResize = (width, height) => {
        this.props.onChange({ width: width, height: height }, this.props.id, "resize");
    }

    // store new position locally while being dragged
    handleDrag = (e, d) => {
        this.cardPosition = { x: d.x, y: d.y };
    }

    // float new position to parent when drag stops
    handleStop = (e, d) => {
        this.props.onUpdate(this.props.id, this.cardPosition);
    }

    handleFocus = (e) => {
        this.props.onFocus(this.props.id);
    }

    render() {
        return (
            <Draggable
                handle=".top-bar"
                defaultPosition={{ x: this.props.params.x, y: this.props.params.y }}
                position={this.cardPosition}
                bounds={{top: 0}}
                grid={[5, 5]}
                scale={1}
                onStart={undefined}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
            >
                <div className="card" onFocus={this.handleFocus} width={this.props.params.width} style={{ zIndex: this.props.params.z }}>
                    <div className="top-bar">
                        <TrashButton click={this.onClick} />
                    </div>
                    <div className="input-area">
                        <TextArea
                            onResize={this.onResize}
                            className="title"
                            onChange={this.onTitleChange}
                            value={this.props.params.title}
                            placeholder="Title"
                        />
                        <TextArea
                            onResize={this.onResize}
                            className="text"
                            onChange={this.onTextChange}
                            value={this.props.params.text}
                            placeholder="compose a note..."
                        />
                    </div>
                </div>
            </Draggable>);
    }
}