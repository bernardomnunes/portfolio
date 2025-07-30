export function TechStack() {
  return (
    <div className="flex flex-col mt-7">
      <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-10">
        Tech Stack
      </h2>

      <div className="text-white grid grid-cols-5 gap-5 max-md:grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2">
        <div className="border-[#a8adb2]/50 hover:bg-[#a8adb2]/10 gap-1.5 h-24 text-[#a8adb2] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
          <img
            src="https://www.stefantopalovic.com/react-icon.svg"
            alt="React Icon"
            width={32}
            height={32}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
          <p>React</p>
        </div>
        <div className="border-[#a8adb2]/50 hover:bg-[#a8adb2]/10 gap-1.5 h-24 text-[#a8adb2] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
          <img
            src="https://www.stefantopalovic.com/next-icon.svg"
            alt="NextJS Icon"
            width={32}
            height={32}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
          <p>Next JS</p>
        </div>
        <div className="border-[#a8adb2]/50 hover:bg-[#a8adb2]/10 gap-1.5 h-24 text-[#a8adb2] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
          <img
            src="https://www.stefantopalovic.com/javascript-icon.svg"
            alt="Javascript Icon"
            width={32}
            height={32}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
          <p>Javascript</p>
        </div>
        <div className="border-[#a8adb2]/50 hover:bg-[#a8adb2]/10 gap-1.5 h-24 text-[#a8adb2] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
          <img
            src="https://www.stefantopalovic.com/typescript-icon.svg"
            alt="Typescript Icon"
            width={32}
            height={32}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
          <p>Typescript</p>
        </div>
        <div className="border-[#a8adb2]/50 hover:bg-[#a8adb2]/10 gap-1.5 h-24 text-[#a8adb2] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
          <img
            src="https://www.stefantopalovic.com/tailwind-icon.svg"
            alt="Tailwind Icon"
            width={32}
            height={32}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
          <p>Tailwind</p>
        </div>
        <div className="border-[#a8adb2]/50 hover:bg-[#a8adb2]/10 gap-1.5 h-24 text-[#a8adb2] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
          <img
            src="https://www.stefantopalovic.com/html-icon.svg"
            alt="Html Icon"
            width={32}
            height={32}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
          <p>HTML</p>
        </div>
        <div className="border-[#a8adb2]/50 hover:bg-[#a8adb2]/10 gap-1.5 h-24 text-[#a8adb2] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group">
          <img
            src="https://www.stefantopalovic.com/css-icon.svg"
            alt="CSS Icon"
            width={32}
            height={32}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
          <p>CSS</p>
        </div>
      </div>
    </div>
  );
}
