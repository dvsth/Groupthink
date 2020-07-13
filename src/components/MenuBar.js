import React from "react";
import AddButton from "./Buttons/AddButton";

import "../styles/menu.css"

export default function MenuBar(props) {

    let add = () => { props.onAdd(undefined, undefined, "add") }

    return (
        <div className="menu-bar" >
            <AddButton click={ add } />
        </div>
    );

}