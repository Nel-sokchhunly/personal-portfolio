import MainButton from "../components/homepage/main_button";
import Navbar from "../components/homepage/navbar";

function Homepage() {
  return (
    <div className="min-h-screen w-full bg-primary flex flex-col items-center">
      <Navbar />
      <div className="w-full lg:w-5/6 flex-1 flex flex-col sm:flex-row justify-evenly items-center">
        <MainButton title="Photograph Blog" color="bg-accent1" page="blog" />
        <MainButton title="Project" color="bg-accent2" page="project" />
        <MainButton title="About" color="bg-accent3" page="about" />
      </div>
    </div>
  );
}

export default Homepage;
