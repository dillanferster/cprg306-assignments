import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-col ml-4 gap-6 text-slate-950">
      <div className="text-xl mt-2">
        CPRG 306: Web Development 2 - Assignments
      </div>
      <hr className="mb-4 w-96" />
      <div className="flex border-2 rounded-full border-black align-middle pl-3 w-60 h-10 bg-blue-300 mb-2">
        <div className="flex align-middle self-center">
          <Link href="week-2">Week / 2</Link>
        </div>
      </div>
      <div className="flex border-2 rounded-full border-black align-middle pl-3 w-60 h-10 bg-purple-300 mb-2  ">
        <div className="flex align-middle self-center">
          <Link href="week-3">Week / 3</Link>
        </div>
      </div>

      <div className="flex border-2 rounded-full border-black align-middle pl-3 w-60 h-10 bg-green-300 mb-2">
        <div className="flex align-middle self-center">
          <Link href="week-4">Week / 4</Link>
        </div>
      </div>

      <div className="flex border-2 rounded-full border-black align-middle pl-3 w-60 h-10 bg-red-300 mb-2">
        <div className="flex align-middle self-center">
          <Link href="week-5">Week / 5</Link>
        </div>
      </div>

      <div className="flex border-2 rounded-full border-black align-middle pl-3 w-60 h-10 bg-yellow-200 mb-2">
        <div className="flex align-middle self-center">
          <Link href="week-6">Week / 6</Link>
        </div>
      </div>

      <div className="flex border-2 rounded-full border-black align-middle pl-3 w-60 h-10 bg-orange-200 mb-2">
        <div className="flex align-middle self-center">
          <Link href="week-7">Week / 7</Link>
        </div>
      </div>

      <div className="flex border-2 rounded-full border-black align-middle pl-3 w-60 h-10 bg-pink-200 mb-2">
        <div className="flex align-middle self-center">
          <Link href="week-8">Week / 8</Link>
        </div>
      </div>
    </main>
  );
}
