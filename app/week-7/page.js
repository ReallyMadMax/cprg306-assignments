"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";

export default function Page() {
    const [items, setItems] = useState(() => {
    const listItems = require("./items.json");
    return listItems;
    });

    const handleAddItem = (newItem) => {
    setItems((currentItems) => [...currentItems, newItem]);
    };

    return (
    <main className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-start">
        <div className="md:w-1/3">
            <NewItem onAddItem={handleAddItem} />
        </div>
        <div className="md:w-2/3">
            <ItemList items={items} />
        </div>
        </div>
    </main>
    );
}
