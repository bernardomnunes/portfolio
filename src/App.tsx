import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export function App() {
  return (
    <div className="bg-[#0c0f11] antialiased h-screen w-screen">
      <div className="mx-auto max-w-[47.5rem] p-6 font-roboto">
        <Header />
        <Hero />
      </div>
    </div>
  );
}
