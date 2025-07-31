import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";

export function App() {
  return (
    <div className="bg-[#0c0f11] antialiased h-full min-h-screen">
      <div className="mx-auto max-w-[47.5rem] p-6 font-roboto">
        <Header />
        <Hero />
        <TechStack />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
