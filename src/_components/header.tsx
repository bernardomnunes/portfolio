import DropdownNav from "./dropdown-nav";

const Header = () => {
  return (
    <header className="flex justify-around items-center h-[17vh] text-black">
      <h1 className="text-2xl">Bernardo Nunes</h1>
      <nav className="max-xl:hidden flex gap-8 text-2xl">
        <a
          href="#about"
          className="flex gap-8 text-2xl transition-all ease-[ease] duration-300 hover:text-gray-400 hover:underline hover:underline-offset-[16px] hover:decoration-gray-400"
        >
          About
        </a>
        <a
          href="#experience"
          className="flex gap-8 text-2xl transition-all ease-[ease] duration-300 hover:text-gray-400 hover:underline hover:underline-offset-[16px] hover:decoration-gray-400"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="flex gap-8 text-2xl transition-all ease-[ease] duration-300 hover:text-gray-400 hover:underline hover:underline-offset-[16px] hover:decoration-gray-400"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="flex gap-8 text-2xl transition-all ease-[ease] duration-300 hover:text-gray-400 hover:underline hover:underline-offset-[16px] hover:decoration-gray-400"
        >
          Contact
        </a>
      </nav>

      <nav className="xl:hidden">
        <DropdownNav />
      </nav>
    </header>
  );
};

export default Header;
