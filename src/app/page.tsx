import Tools from "@/components/Tools";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonial";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="w-screen overflow-hidden">
      <Hero />
      <Tools />
      <Testimonials />
      <Features />
      <Footer />
    </main>
  );
}
