import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Main from "@/components/Main";
import MainOne from '@/components/MainOne';
import MainTwo from '@/components/MainTwo';
import TestimonialSection from "@/components/TestimonialSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
        <TestimonialSection />
        <BlogSection />
        <ContactSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
