import React, { useState } from "react";
import Card from "./Card";
import { Map } from "immutable";
import { update } from "lodash";

export default function ThoughtCanvas() {

    const [cards, updateCards] =
        useState(Map([
            [0, { title: "Dev Seth is an amazing guy", text: "Hi my name is Dev", x: 0, y: 0 }],
            [1, { key: 1, title: "Purab Seth", text: "Hi my name is Purab", x: 500, y: 0 }]
        ]));

    let onChange = (event, id) => {
        updateCards(cards.set(id, { ...cards.get(id), title: event.target.value }));
    }

    return (
        cards.entrySeq().map(
            ([id, card]) => <Card key={id} id={id} params={card} onChange={onChange} />
        )
    )
}

