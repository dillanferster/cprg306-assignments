import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-col text-slate-950">
      <div>CPRG 306: Web Development 2 - Assignments</div>

      <div className="flex border-2 rounded-full border-black justify-start pl-1 w-40 h-8">
        <Link href="week-2">Week / 2</Link>
      </div>
      <div>
        <Link href="week-3">Week-3</Link>
      </div>

      <div>
        <Link href="week-4">Week-4</Link>
      </div>
    </main>
  );
}
