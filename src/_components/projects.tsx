import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Projects = () => {
  return (
    <section className="flex flex-col items-center">
      <h3 className="text-[32px] font-bold">Projetos</h3>

      <div className="flex flex-wrap mt-8 gap-8">
        <Card className="p-6 rounded-3xl border-[#555555] text-center flex-1">
          <CardContent>
            <Image
              src={"/project-1.png"}
              alt=""
              width={1200}
              height={1200}
              className="rounded-3xl"
            />

            <p className="font-bold text-xl m-4">Projeto Um</p>

            <div className="flex justify-center gap-4 ">
              <Button variant={"outline"}>Github</Button>
              <Button variant={"outline"}>Site do projeto</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 rounded-3xl border-[#555555] text-center flex-1">
          <CardContent>
            <Image
              src={"/project-1.png"}
              alt=""
              width={1200}
              height={1200}
              className="rounded-3xl"
            />

            <p className="font-bold text-xl m-4">Projeto Dois</p>

            <div className="flex justify-center gap-4 ">
              <Button variant={"outline"}>Github</Button>
              <Button variant={"outline"}>Site do projeto</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 rounded-3xl border-[#555555] text-center flex-1">
          <CardContent>
            <Image
              src={"/project-1.png"}
              alt=""
              width={1200}
              height={1200}
              className="rounded-3xl"
            />

            <p className="font-bold text-xl m-4">Projeto três</p>

            <div className="flex justify-center gap-4 ">
              <Button variant={"outline"}>Github</Button>
              <Button variant={"outline"}>Site do projeto</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
