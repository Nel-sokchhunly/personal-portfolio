import MainButton from "../components/homepage/main_button";
import Navbar from "../components/homepage/navbar";

function Homepage() {
  return (
    <div className="min-h-screen w-full bg-primary flex flex-col relative">
      <div className="flex-grow py-12 space-y-12 md:space-y-0 w-full flex-1 flex flex-col md:flex-row justify-evenly items-center">
        <MainButton title="Project" color="bg-accent1" page="project" />
        <MainButton title="Experience" color="bg-accent2" page="experience" />
        <MainButton title="About" color="bg-accent3" page="about" />
      </div>
      <Navbar />
    </div>
  );
}

export default Homepage;
