import React from "react";
import AddButton from "./Buttons/AddButton";

import "../styles/menu.css"

export default function MenuBar(props) {

    let add = () => { props.onAdd(undefined, undefined, "add") }

    return (
        <div className="menu-bar" >
            <div className="think-buttons">
                <AddButton click={add} />
            </div>
            <div className="site-title">
                <p>groupthink</p>
            </div>
            <div className="share-buttons">
                <p>Welcome, {props.userName}</p>
            </div>
        </div>
    );

}