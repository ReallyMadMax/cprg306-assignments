"use client"
import { useState } from "react";

export default function Item(){

    let buttonOff = "bg-grey-500 rounded text-white mt-5 px-4 py-2";
    let buttonOn = "bg-blue-400 hover:bg-blue-800 active:bg-yellow-300 rounded text-white mt-5 px-4 py-2";

    const [quantity, setQuantity] = useState(1)
    const [name, setName] = useState("")
    const [category, setCategory] = useState("produce")

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

    const handleSubmit = (event) => {
        event.preventDefault()

        let item = {
            fName: name,
            fCategory: category,
            fQuantity: quantity
        }
        console.log(item); 

        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    const handleName = (event) =>{
        setName(event.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div style={{justifyContent: "center", alignItems:"center", display: "flex", flexDirection: "column", background: "grey", padding:"20px", width: "250px", margin: "0 auto"}}>
                <h2 className = "text-2xl">Name:</h2>
                <div style={{marginTop: "10px", display: "flex", justifyContent: "space-between"}}>
                <input className="bg-gray-500 px-2 py-1 rounded border focus:bg-blue-200 text-black" type="text" onChange={handleName} required value={name}/>
                </div>
            </div>
            <div style={{justifyContent: "center", alignItems:"center", display: "flex", flexDirection: "column", background: "grey", padding:"20px", width: "250px", margin: "0 auto"}}>
                <h2 className = "text-2xl">Quantity: {quantity}</h2>
                <div style={{marginTop: "10px", display: "flex", justifyContent: "space-between"}}>
                    <button type="button" onClick={increment} className={buttonStyleUp}> Increase!</button>
                    <button type="button" onClick={decrement} className={buttonStyleDown}> Decrease!</button>
                </div>
            </div>
            <div style={{justifyContent: "center", alignItems:"center", display: "flex", flexDirection: "column", background: "grey", padding:"20px", width: "250px", margin: "0 auto"}}>
                <h2 className = "text-2xl">Category</h2>
                <div style={{marginTop: "10px", display: "flex", justifyContent: "space-between"}}>
                <select className="text-black" onChange={(event) => setCategory(event.target.value)}>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen-foods">Frozen Foods</option>
                    <option value="canned-goods">Canned Goods</option>
                    <option value="dry-goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div style={{justifyContent: "center", alignItems:"center", display: "flex", flexDirection: "column", background: "grey", padding:"20px", width: "250px", margin: "0 auto"}}>
                <button className={buttonOn} type="submit">Submit</button>
            </div>
            </form>
    );
}