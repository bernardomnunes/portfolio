import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const DropDownNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Menu size={45} strokeWidth={1} />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end" className="w-full">
        <DropdownMenuItem asChild className="text-lg">
          <a href="#projects">Projetos</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="text-lg">
          <a href="#experience">Experiência</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="text-lg">
          <a href="#about">Sobre Mim</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="text-lg">
          <a href="#contact">Contato</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownNav;
