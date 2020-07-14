import React, { useState } from "react";

import { Map } from "immutable";

import Card from "./Card";
import MenuBar from "./MenuBar";

import "../styles/thoughtcanvas.css"

export default function ThoughtCanvas() {

    // state is just a Map of index:card params
    const [cards, updateCards] =
        useState(Map([
            [1, { title: "Dev Seth is an amazing guy", text: "Hi my name is Dev", position: { x: 0, y: 0 }, z: 1 }],
            [2, { title: "Purab Seth", text: "Hi my name is Purab", position: { x: 30, y: 30 }, z: 2 }]
        ]));

    // handles ALL state changes of child cards
    // title change, text change, resizing, and adding, deleting
    let onChange = (event, id, property) => {

        // re-render on resize
        if (property === "resize") {
            updateCards(cards);
        }

        // add a new card
        else if (property === "add") {
            updateCards(cards.set(cards.size + 1,
                {
                    title: undefined, text: undefined,
                    position: { x: window.innerHeight / 2, y: window.innerHeight / 2 },
                    z: cards.size + 1
                }))
        }

        // delete the card with given id
        else if (property === "close") {
            updateCards(cards.delete(id))
        }

        // update the text/title of card with given id
        else {
            updateCards(cards.set(id, { ...cards.get(id), [property]: event.target.value }));
        }
    }

    let onUpdate = (id, position) => {
        updateCards(cards.set(id, { ...cards.get(id), position: position }));
    }

    let onFocus = (focusId) => {
        console.log(cards, focusId)
        var focusZ = cards.get(focusId).z;
        updateCards(
            (cards.map((card) => { return (card.z > focusZ) ? { ...card, z: card.z - 1 } : card })
                .update(focusId, (focusCard) => { return { ...focusCard, z: cards.size } }))
        )
    }

    return (
        <div className="thought">
            <MenuBar onAdd={onChange} />
            <div className="spacer"></div>
            <div className="card-area">
                {cards.entrySeq().map(
                    ([id, card]) =>
                        <Card
                            key={id} id={id}
                            params={card}
                            onChange={onChange}
                            onUpdate={onUpdate}
                            onFocus={onFocus}
                        />)}
            </div>
        </div>
    )
}

