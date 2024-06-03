import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const AboutMe = () => {
  return (
    <section className="flex flex-col items-center mt-12">
      <h2 className="font-bold text-3xl mb-12">Sobre Mim</h2>

      <div className="flex flex-wrap gap-8 mb-4">
        <Card className="flex flex-col items-center rounded-3xl border-[#555555] text-center">
          <CardContent>
            <Image
              src={"/experience.png"}
              width={32}
              height={32}
              alt=""
              className="mx-auto mb-2 mt-4"
            />
            <h3 className="text-lg font-bold">Experiência</h3>
            <p className="text-[#555555]">Um ano</p>
            <p className="text-[#555555]">FullStack</p>
          </CardContent>
        </Card>

        <Card className="flex flex-col items-center rounded-3xl border-[#555555] text-center">
          <CardContent>
            <Image
              src={"/education.png"}
              width={32}
              height={32}
              alt=""
              className="mx-auto mb-2 mt-4"
            />
            <h3 className="text-lg font-bold">Educação</h3>
            <p className="text-[#555555]">Nova roma</p>
            <p className="text-[#555555]">2023.2 - 2025.2</p>
          </CardContent>
        </Card>
      </div>

      <p className="text-xl mt-2 text-center">
        Sempre gostei de esportes, joguei basquete no Brasil e Estados Unidos,
        gosto de jogos com lógica, como: poker, dominó e jogos on line. Iniciei
        alguns cursos de programação no período de isolamento (Covid) e me
        identifiquei bastante. Tenho foco em aprender coisas novas.{" "}
      </p>
    </section>
  );
};

export default AboutMe;
