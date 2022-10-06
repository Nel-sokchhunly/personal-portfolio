import MainLayout from "../layouts/MainLayout";
import Image from "next/image";

const profileImg =
  "https://drive.google.com/file/d/13OfRq4oZVPO83itnK-K7tQd7YZOyAXhZ/view?usp=sharing";

export default function About() {
  return (
    <MainLayout>
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <div className=" flex justify-center sm:justify-start">
          <div className="h-72 w-52 xl:w-56 border-2 border-secondary flex flex-col hover:shadow-sm hover:shadow-secondary transition duration-200">
            <div className="relative flex-1 w-full flex items-center justify-center bg-opacity-30 font-medium whitespace-pre-wrap">
              <Image
                src="/assets/profile.jpg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-center border-t-2 border-black py-4 bg-opacity-50 hover:bg-primary focus:bg-primary">
              Nel Sokchhunly
            </div>
          </div>
        </div>
        <div>
          <p className="flex-grow sm:flex-grow-0 sm:w-3/4 ">
            Hello, My name is Nel Sokchhunly
            <br />
            <br />
            I am currently majoring in a Software Engineering major at Kirirom
            Institute of Technology. I am specializing in Front-end development.
            <br />
            <br />I have worked in various frontend projects in the past years.
          </p>

          <div className="h-16 w-full flex flex-col space-y-4 mt-4">
            <div className="flex items-start space-x-2">
              <a href="mailto:sokchhunlynel@example.com">
                <Image
                  src="/assets/envelope.png"
                  alt="mail"
                  width="24"
                  height="24"
                />
              </a>
              <span>sokchhunlynel@gmail.com</span>
            </div>
            <div className="flex items-start space-x-2">
              <a href="https://github.com/Nel-sokchhunly">
                <Image
                  src="/assets/github.png"
                  alt="github"
                  width="24"
                  height="24"
                />
              </a>
              <span>Nel-sokchhunly</span>
            </div>
            <div className="flex items-start space-x-2">
              <a href="https://www.linkedin.com/in/sokchhunly-nel-2926341b9/">
                <Image
                  src="/assets/linkedin.png"
                  alt="linkedin"
                  width="24"
                  height="24"
                />
              </a>
              <span>Sokchhunly Nel</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1" />
    </MainLayout>
  );
}
