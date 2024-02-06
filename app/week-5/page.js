import ItemList from "./item-list";

export default function Page() {
  return (
    <main className=" flex-col content-center">
      <div className="flex justify-center">
        <h1 className="text-black mr-2 font-mono text-4xl m-2 p-2 border-2 border-black rounded-full p-4 bg-green-400">
          SHOPPING LIST
        </h1>
      </div>

      <ItemList />
    </main>
  );
}
