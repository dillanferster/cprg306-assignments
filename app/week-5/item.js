export default function Item({ name, quantity, category }) {
  return (
    <div className="flex justify-center">
      <ul className="text-slate-900 w-60 text-l list-none border-b border-slate-900  p-2 m-2">
        <li>Item: {name}</li>
        <li>Quantity: {quantity}</li>
        <li>Category: {category}</li>
      </ul>
    </div>
  );
}
