import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - assignments</h1>
      <p><Link className="underline text-green-500 hover:text-blue-400" href={"./week-2/"}>Week 2 page</Link></p>
      <p><Link className="underline text-green-500 hover:text-blue-400" href={"./week-3/"}>Week 3 page</Link></p>
      <p><Link className="underline text-green-500 hover:text-blue-400" href={"./week-4/"}>Week 4 page</Link></p>
      <p><Link className="underline text-green-500 hover:text-blue-400" href={"./week-5/"}>Week 5 page</Link></p>
    </main>
  );
}
