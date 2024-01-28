import Features from "@/components/Tools";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="w-screen overflow-hidden">
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}
