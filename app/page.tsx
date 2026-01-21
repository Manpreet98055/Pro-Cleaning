import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Main from "@/components/Main";
import MainTwo from '@/components/MainTwo';


export default function Home() {
  return (
    <div>
      <nav>
      <Navbar />
      </nav>
      <main>
        <Main />
        <MainTwo />
      </main>
    </div>
  );
}
