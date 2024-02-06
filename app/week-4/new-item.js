"use client";
import React from "react";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQauntity] = useState(0);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name, quantity, category);
    alert(JSON.stringify({ name, quantity, category }));

    setName("");
    setQauntity(0);
    setCategory("produce");
  }

  return (
    <div>
      <form className=" flex flex-col" onSubmit={handleSubmit}>
        <label className="text-black" htmlFor="name">
          Name
        </label>

        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          id="quantity"
          value={quantity}
          onChange={(e) => setQauntity(e.target.value)}
        />

        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button className="border-2 border-black" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
