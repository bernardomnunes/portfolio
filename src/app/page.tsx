import AboutMe from "@/_components/about-me";
import Experience from "@/_components/experience";
import Header from "@/_components/header";
import Projects from "@/_components/projects";
import SectionProfile from "@/_components/section-profile";

export default function Home() {
  return (
    <div className="mx-[5%] xl:mx-40">
      <Header />
      <SectionProfile />
      <Projects />
      <AboutMe />
      <Experience />
    </div>
  );
}
