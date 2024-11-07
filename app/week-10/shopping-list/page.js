"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";
import { getItems, addItem } from "../_services/shopping-list-services";

export default function Page() {
    const { user } = useUserAuth();
    const router = useRouter();

    if (!user) {
        router.push("/week-10");
        return null;
    }

    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const loadItems = async () => {
        try {
            const shoppingListItems = await getItems(user.uid);
            setItems(shoppingListItems);
        } catch (error) {
            console.error("Error loading items:", error);
        }
    };

    useEffect(() => {
        loadItems();
    }, [user.uid]);

    const handleAddItem = async (newItem) => {
        try {
            
            const docId = await addItem(user.uid, newItem);
            
            const itemWithId = {
                ...newItem,
                id: docId
            };
            
            setItems(currentItems => [...currentItems, itemWithId]);
        } catch (error) {
            console.error("Error adding item:", error);
        }
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
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Shopping List</h1>
                <p className="text-gray-600">Welcome, {user.displayName}</p>
            </div>
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