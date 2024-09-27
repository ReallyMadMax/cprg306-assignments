"use client"
import { useState } from "react";

export default function Item(){

    let buttonOff = "bg-grey-500 rounded text-white mt-5 px-4 py-2";
    let buttonOn = "bg-blue-400 hover:bg-blue-800 active:bg-yellow-300 rounded text-white mt-5 px-4 py-2";

    const [quantity, setQuantity] = useState(1)

    let buttonStyleDown = buttonOn;
    let buttonStyleUp = buttonOn;

    const increment = () => {
        let currentQuantity = quantity;
        if (quantity <= 19){
            setQuantity(currentQuantity + 1)
        }
    }

    const decrement = () => {
        let currentQuantity = quantity;
        
        if (quantity > 1){
            setQuantity(currentQuantity - 1)

        }
    }

    if (quantity > 19){
        buttonStyleUp = buttonOff
    } else if (quantity <= 1){
        buttonStyleDown = buttonOff
    }


    return(
        <div style={{justifyContent: "center", alignItems:"center", display: "flex", flexDirection: "column", background: "grey", padding:"20px", width: "250px", margin: "0 auto"}}>
            <h2 className = "text-2xl">Quantity: {quantity}</h2>
            <div style={{marginTop: "10px", display: "flex", justifyContent: "space-between"}}>
                <button onClick={increment} className={buttonStyleUp}> Increase!</button>
                <button onClick={decrement} className={buttonStyleDown}> Decrease!</button>
            </div>
        </div>
    );
}