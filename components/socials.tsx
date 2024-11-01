import Image from "next/image";

type Social = {
  name: string;
  icon: string;
  link: string;
};

const socialList: Social[] = [
  {
    name: "Resume",
    icon: "/assets/cv.png",
    link: "https://drive.google.com/file/d/16vSbmC9XuRAWATnqAyE1fpO6CbWSSGNF/view?usp=sharing",
  },
  {
    name: "Github",
    icon: "/assets/github.png",
    link: "https://github.com/Nel-sokchhunly",
  },
  {
    name: "LinkedIn",
    icon: "/assets/linkedin.png",
    link: "https://www.linkedin.com/in/sokchhunly-nel-2926341b9/",
  },
  {
    name: "sokchhunlynel@gmail.com",
    icon: "/assets/envelope.png",
    link: "mailto:sokchhunlynel@gmail.com",
  },
];

export default function Socials() {
  return (
    <div className="mt-4">
      <div className="w-full flex flex-row flex-wrap gap-4 mt-2 mb-10">
        {socialList.map((social, index) => (
          <SocialAction key={index} {...social} />
        ))}
      </div>
    </div>
  );
}

const SocialAction = ({ icon, name, link }: Social) => {
  return (
    <a href={link} target="_blank" className="cursor-pointer w-fit">
      <div
        className="
              flex items-start space-x-2 p-2 px-3 h-full w-full
              border-2 border-dashed border-secondary 
              hover:translate-x-1 hover:-translate-y-1
              hover:shadow-[-4px_4px_0_black]
              transition-all duration-300 
              rounded-lg hover:rounded-2xl
            "
      >
        <Image src={icon} alt="linkedin" width="24" height="24" />
        <h1>{name}</h1>
      </div>
    </a>
  );
};
