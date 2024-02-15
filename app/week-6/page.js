"use client";
import { useState } from "react";
import NewItem from "../week-6/new-item";
import ItemList from "./item-list";
import itemsdata from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsdata);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main className=" flex-col content-center">
      <div className="flex justify-center">
        <h1 className="text-black mr-2 font-mono text-4xl m-2 p-2 border-2 border-black rounded-full shadow-md">
          SHOPPING LIST
        </h1>
      </div>

      <NewItem onAddItem={addItem} />
      <ItemList items={items} />
    </main>
  );
}
