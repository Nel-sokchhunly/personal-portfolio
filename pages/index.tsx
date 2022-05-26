import MainButton from "../components/homepage/main_button";
import Navbar from "../components/homepage/navbar";
import Image from "next/image";

function Homepage() {
  return (
    <div className="min-h-screen w-full bg-primary flex flex-col items-center">
      <Navbar />
      <div className="h-full w-full lg:w-5/6 flex-1 flex flex-col sm:flex-row justify-evenly items-center">
        <MainButton title="Photograph Blog" color="bg-accent1" page="blog" />
        <MainButton title="Project" color="bg-accent2" page="project" />
        <MainButton title="About" color="bg-accent3" page="about" />
      </div>
      {/* <div className="h-16 w-full flex items-center justify-end px-8 space-x-4">
        <div>Creator: Nel Sokchhunly</div>
        <div>
          <Image src="/assets/envelope.png" alt="mail" width="24" height="24" />
        </div>
        <div>
          <Image
            src="/assets/linkedin.png"
            alt="linkedin"
            width="24"
            height="24"
          />
        </div>
        <div>
          <Image src="/assets/github.png" alt="github" width="24" height="24" />
        </div>
      </div> */}
    </div>
  );
}

export default Homepage;
