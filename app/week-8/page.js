"use client";
import { useState } from "react";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";

export default function Page() {
    const [items, setItems] = useState(() => {
        const listItems = require("./items.json");
        return listItems;
    });
    
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems((currentItems) => [...currentItems, newItem]);
    };

    const handleItemSelect = (item) => {
        const cleanName = item.name
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF][\uDC00-\uDFFF]|[\u2011-\u26FF]|[\uD83E-\uDDBF][\uDC00-\uDFFF])/g, '')
            .split(',')[0]
            .trim();
        
        setSelectedItemName(cleanName);
    };

    return (
        <main className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-4 md:w-1/2">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="md:w-1/2">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}