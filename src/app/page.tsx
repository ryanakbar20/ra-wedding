import Map from "@/components/Map";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <div>
        <Hero />
        <div className="md:container mx-auto flex flex-col space-y-12 px-4 md:px-0 py-12">
          <About />
          <Service />
          <Map />
        </div>
      </div>
      <Footer />
    </main>
  );
}
