import React, { useState } from "react";

import { Map } from "immutable";

import Card from "./Card";
import MenuBar from "./MenuBar";

import "../styles/thoughtcanvas.css"

export default function ThoughtCanvas(props) {

    // state is just a Map of index:card params
    const [cards, updateCards] =
        useState(Map([
            [1, {
                title: "If on a winter's night a traveller...",
                text: "If on a Winter’s Night a Traveler, avant-garde novel by Italo Calvino, published in 1979 as Se una notte d’inverno un viaggiatore. Using shifting structures, a succession of tales, and different points of view, the book probes the nature of change, coincidence, and chance and the interdependence of fiction and reality.",
                position: { x: 0, y: 0 }, z: 1
            }],
            [2, { title: "Robert Frost", text: "Robert Lee Frost (March 26, 1874 – January 29, 1963) was an American poet. His work was initially published in England before it was published in America.", position: { x: 30, y: 30 }, z: 2 }]
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
            var topCardPosition = (cards.size == 0) ? { x: 100, y: 100 } : cards.get(cards.size).position;
            updateCards(cards.set(cards.size + 1,
                {
                    title: undefined, text: undefined,
                    position: { x: topCardPosition.x + 30, y: topCardPosition.y + 30 },
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
            <MenuBar onAdd={onChange} userName={props.userName} />
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

