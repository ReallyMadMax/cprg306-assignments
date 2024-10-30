"use client";
import { useState } from "react";

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
        return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
    }
    return 0;
    });

    const handleSortByName = () => {
    setSortBy("name");
    };

    const handleSortByCategory = () => {
    setSortBy("category");
    };

    const buttonOff =
    "bg-blue-200 hover:bg-blue-800 rounded text-black mt-5 px-4 py-2";
    const buttonOn =
    "bg-blue-500 hover:bg-blue-800 active:bg-yellow-300 rounded text-black mt-5 px-4 py-2";

    return (
    <div
        style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            background: "#999999",
            padding: "20px",
            width: "500px",
            margin: "0 auto",
        }}
    >
        <div
        style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
        }}
    >
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
        <ul style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {sortedItems.map((item) => (
            <li
            key={item.id}
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                borderBottom: "1px solid black",
            }}
            >
            <h2>{item.name}</h2>
            <p>{item.category}</p>
            </li>
        ))}
        </ul>
    </div>
    );
}
