import { Mail } from "lucide-react";
import whatsAppIcon from "@/assets/whatsapp-icon.svg";

export function Footer() {
  return (
    <footer
      id="contact"
      className="w-full flex items-center pt-6 border-t border-[#a8adb2]/20 pb-1 mt-13 text-[#a8adb2]"
    >
      <div className="flex items-center justify-around gap-2 text-light-gray w-full hover:text-white">
        <div className="flex gap-2">
          <Mail />
          <a href="mailto:bmn02@outlook.com">bmn02@outlook.com</a>
        </div>

        <div className="flex gap-2">
          <img src={whatsAppIcon} alt="whatsApp Icon" width={24} height={24} />
          <p>+55 81 995421282</p>
        </div>
      </div>
    </footer>
  );
}
