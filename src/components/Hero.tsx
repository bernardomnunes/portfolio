export function Hero() {
  return (
    <section className="pb-20 pt-16 flex items-center gap-10 max-md:flex-col max-md:text-center">
      {/* Image */}
      <div className="relative w-44 h-44 min-w-44 min-h-44 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-full p-1">
          <div className="w-full h-full bg-dark-bg rounded-full">
            <img
              src="/src/assets/bernardo-image.jpg"
              width={170}
              height={170}
              alt="Avatar"
              className="w-full h-full object-cover rounded-full border-white border-4"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-[#a8adb2] font-bold text-[28px] tracking-[0.03em] relative">
          <span className="text-white">Hey, I'm Bernardo. </span>
          I'm a Frontend
          <br />
          Software Developer.
          <div className="bg-green-600/20 ml-4 whitespace-nowrap text-green-600 hover:bg-green-500/20 text-sm px-3 py-1 rounded-full inline-block hover:text-green-500">
            Open to work
          </div>
        </h1>

        <div className="w-full flex items-center justify-between max-md:flex-col max-md:gap-3">
          <span className="text-[#a8adb2] whitespace-nowrap hover:text-white">
            🏠 Recife, Brazil.
          </span>

          <div className="w-full flex items-center justify-end max-md:justify-center gap-5 text-base text-[#a8adb2]">
            <a
              href="https://www.linkedin.com/in/bernardo-meneses-nunes/"
              className="flex gap-1 items-center hover:text-white"
              target="_blank"
            >
              <img
                src="https://www.stefantopalovic.com/linkedin-icon.svg"
                width={24}
                height={24}
                alt="linkedIn image"
              />
              LinkedIn
            </a>
            <a
              href="https://github.com/bernardomnunes"
              className="flex gap-1 items-center hover:text-white"
              target="_blank"
            >
              <img
                src="https://www.stefantopalovic.com/github-icon.svg"
                width={24}
                height={24}
                alt="github image"
              />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
