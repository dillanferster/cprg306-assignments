"use client";
import Item from "./item";
import { useState, useEffect } from "react";

export default function ItemList({ items }) {
  const [sortby, setSortBy] = useState("name");

  useEffect(() => {
    const sortItems = () => {
      if (sortby === "name") {
        items.sort((a, b) => a.name.localeCompare(b.name));
        console.log("sorted by name");
      }
      if (sortby === "category") {
        items.sort((a, b) => a.category.localeCompare(b.category));
        console.log("sorted by category");
      }
    };

    sortItems();
  }, [sortby]);

  return (
    <main className="flex-col justify-center align-middle content-center">
      <div className="flex justify-center align-middle content-center gap-2 p-2 m-2 ">
        <button
          id="name"
          className="border-2 border-black w-24 bg-blue-400 rounded-3xl p-2"
          onClick={() => setSortBy("category")}
        >
          Name
        </button>
        <button
          id="category"
          className="border-2 border-black w-24 bg-purple-400  rounded-3xl p-2 "
          onClick={() => setSortBy("name")}
        >
          Category
        </button>
      </div>
      {items.map((item) => (
        <div>
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          ></Item>
        </div>
      ))}
      ;
    </main>
  );
}
