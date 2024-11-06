"use client";
import { useState } from "react";

export default function ItemList({ items = [], onItemSelect = () => {} }) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = items ? [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    }) : [];

    const handleSortByName = () => {
        setSortBy("name");
    };

    const handleSortByCategory = () => {
        setSortBy("category");
    };

    const buttonOff = "bg-blue-200 hover:bg-blue-800 rounded text-black mt-5 px-4 py-2";
    const buttonOn = "bg-blue-500 hover:bg-blue-800 active:bg-yellow-300 rounded text-black mt-5 px-4 py-2";

    return (
        <div className="flex flex-col items-center justify-center bg-gray-400 p-5 w-[500px] mx-auto">
            <div className="flex justify-between w-full">
                <button
                    className={sortBy === "name" ? buttonOn : buttonOff}
                    onClick={handleSortByName}
                >
                    Sort by Name
                </button>
                <button
                    className={sortBy === "category" ? buttonOn : buttonOff}
                    onClick={handleSortByCategory}
                >
                    Sort by Category
                </button>
            </div>
            <ul className="flex flex-col w-full">
                {sortedItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => onItemSelect(item)}
                        className="flex justify-between p-3 border-b border-black cursor-pointer hover:bg-gray-300 transition-colors"
                    >
                        <h2>{item.name}</h2>
                        <p>{item.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}