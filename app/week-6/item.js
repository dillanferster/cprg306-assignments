export default function Item({ name, quantity, category }) {
  return (
    <div className="flex justify-center">
      <ul className="text-slate-900 w-60 text-l list-none border-b border-slate-900  p-2 m-2">
        <li>Item: {name}</li>
        <li>Quantity: {quantity}</li>
        <li>Category: {category}</li>
        <button
          className="bg-red-300 border-2 text-xs rounded-xl py-1 px-2 mt-1 border-black"
          type="button"
        >
          Remove
        </button>
      </ul>
    </div>
  );
}
