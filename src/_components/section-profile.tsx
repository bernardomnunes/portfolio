import Image from "next/image";
import { Button } from "./ui/button";

const SectionProfile = () => {
  return (
    <section className="flex flex-col h-[83vh] items-center ">
      <Image
        src={"/github.png"}
        alt=""
        width={200}
        height={200}
        className="mb-8"
      />

      <div>
        <p className="text-center text-[#555555] text-lg">Ola, eu sou</p>
        <h2 className="text-center text-3xl">Bernardo Nunes</h2>
        <p className="text-center text-xl text-[#555555] mt-1 mb-4">
          Desenvolvedor Fullstack
        </p>
        <div className="flex justify-center mb-4">
          <Button variant={"outline"} size={"lg"}>
            Baixar currículo
          </Button>
        </div>

        <div className="flex justify-center mt-4 gap-4">
          <Image src={"/linkedin.png"} alt="" width={32} height={32} />
          <Image src={"/github.png"} alt="" width={32} height={32} />
        </div>
      </div>
    </section>
  );
};

export default SectionProfile;
