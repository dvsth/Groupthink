import React from "react";
import Card from "./Card"

export default function ThoughtCanvas() {

    let cards = [
        { title: "Dev Seth", text: "Hi my name is Dev", x: 0, y: 0}, 
        { title: "Purab Seth", text: "Hi my name is Purab", x:500, y:0}
    ];

    return (
        cards.map(
            (card) => <Card params={card} />
        )
    )
}

