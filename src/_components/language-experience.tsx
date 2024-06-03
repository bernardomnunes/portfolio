import Image from "next/image";

const LanguageExperience = ({
  title,
  experience,
}: {
  title: string;
  experience: string;
}) => {
  return (
    <div className="flex justify-center items-start gap-2">
      <Image src={"/checkmark.png"} width={32} height={32} alt="" />

      <div className="flex flex-col">
        <p className="font-bold text-lg">{title}</p>
        <p className="text-[#555555] text-base">{experience}</p>
      </div>
    </div>
  );
};

export default LanguageExperience;
