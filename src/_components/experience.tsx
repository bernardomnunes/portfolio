import LanguageExperience from "./language-experience";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Experience = () => {
  return (
    <section className="flex flex-col items-center mt-10 gap-8">
      <h2 className="text-3xl font-bold">Experiência</h2>

      <Card>
        <CardHeader>
          <CardTitle className="mb-8 font-semibold">
            Desenvolvedor Frontend
          </CardTitle>

          <CardContent className="flex flex-col gap-10 pb-0">
            <LanguageExperience
              title="HTML"
              experience="Experiente"
              key={"html"}
            />
            <LanguageExperience
              title="CSS"
              experience="Experiente"
              key={"css"}
            />
          </CardContent>
        </CardHeader>
      </Card>
    </section>
  );
};

export default Experience;
