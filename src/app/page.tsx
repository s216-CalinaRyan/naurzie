import Link from "next/link";
import AddBook from "./AddBook";
import NaurzieButton from "./NaurzieButton";
import DisplayBooks from "./see-content/DisplayBooks"


export default function HomePage() {
  return (
    <main >
      
      <br></br>
      <h2 className="text-2xl font-mono text-[#7e71bb]"> My Library</h2>
      <br></br>
      <DisplayBooks></DisplayBooks>
    <br></br>
    </main>
  );
}

