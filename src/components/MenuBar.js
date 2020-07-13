import React from "react";
import AddButton from "./Buttons/AddButton";

export default class MenuBar {

    onClick = (id) => {  }

    render() {
        return (
            <div className="menu-bar" >
                <AddButton click={this.onClick} />
            </div>
        );
    }
}