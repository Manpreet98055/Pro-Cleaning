import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Main from "@/components/Main";
import MainOne from '@/components/MainOne';
import MainTwo from '@/components/MainTwo';


export default function Home() {
  return (
    <div className="min-h-screen">
      <nav>
      <Navbar />
      </nav>
      <main>
        <Main />
        <MainOne />
        <MainTwo />
      </main>
    </div>
  );
}
