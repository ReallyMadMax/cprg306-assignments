import Link from "next/link";

export default function StudentInfo() {
    return (
      <main>
        <ul>
        <li>Max Dilger</li>
        <p><Link className="underline text-green-500 hover:text-blue-400" href={"https://github.com/ReallyMadMax/cprg306-assignments"}>Github page</Link></p>
        </ul>
      </main>
    );
  }