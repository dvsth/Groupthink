import React, { useState } from "react";

import { Map } from "immutable";

import Card from "./Card";
import MenuBar from "./MenuBar";

import "../styles/thoughtcanvas.css"

export default function ThoughtCanvas() {

    // state is just a Map of index:card params
    const [cards, updateCards] =
        useState(Map([
            [0, { title: "Dev Seth is an amazing guy", text: "Hi my name is Dev", position: { x: 0, y: 0 } }],
            [1, { title: "Purab Seth", text: "Hi my name is Purab", position: { x: 0, y: 0 } }]
        ]));

    // handles ALL state changes of child cards
    // title change, text change, resizing, and adding, deleting
    let onChange = (event, id, property) => {

        // re-render on resize
        if (property === "resize") {
            updateCards(cards.get(id));
        }

        // add a new card
        else if (property === "add") {
            updateCards(cards.set(cards.size,
                {
                    title: "", text: "",
                    position: { x: window.innerHeight / 2, y: window.innerHeight / 2 },
                    width: 0, height: 0
                }))
        }

        // delete the card with given id
        else if (property === "close") {
            updateCards(cards.remove(id))
        }

        // update the text/title of card with given id
        else {
            updateCards(cards.set(id, { ...cards.get(id), [property]: event.target.value }));
        }
    }

    let onUpdate = (id, position) => {
        updateCards(cards.set(id, { ...cards.get(id), position: position }));
    }

    return (
        <div className="thought">
            <MenuBar onAdd={onChange} />
            <div className="card-area">
                {cards.entrySeq().map(
                    ([id, card]) => <Card key={id} id={id} params={card} onChange={onChange} onUpdate={onUpdate} />)}
            </div>
        </div>
    )
}

