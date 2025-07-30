import { Menu } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "./ui/dialog";

export function Header() {
  return (
    <header className="w-full pt-5 pb-10">
      <nav className="w-full flex items-center justify-between">
        <a
          href="/"
          className="font-bold hover:text-white uppercase text-[#a8adb2] text-lg tracking-widest"
        >
          Bernardo Nunes
        </a>

        <div className="flex items-center gap-6 text-lg max-md:hidden text-[#a8adb2] font-roboto font-normal">
          <a href="/#projects" className="hover:text-white ">
            Projects
          </a>
          <a href="/#contact" className="hover:text-white">
            Contact
          </a>
        </div>

        <Dialog>
          <DialogTrigger className="hidden max-md:flex cursor-pointer">
            <Menu className="text-[#a8adb2] h-8 w-8" />
          </DialogTrigger>

          <DialogContent className="w-screen h-10/12 bg-[#0c0f11] text-[#a8adb2]">
            <ul className="flex flex-col text-light-gray text-3xl font-semibold mt-32 gap-5 text-center">
              <DialogClose asChild>
                <li>
                  <a
                    href="/#projects"
                    className="hover:text-white text-[#a8adb2]"
                  >
                    Projects
                  </a>
                </li>
              </DialogClose>

              <DialogClose asChild>
                <li>
                  <a
                    href="/#contact"
                    className="hover:text-white text-[#a8adb2]"
                  >
                    Contact
                  </a>
                </li>
              </DialogClose>
            </ul>
          </DialogContent>
        </Dialog>
      </nav>
    </header>
  );
}
