import Landing from "@/components/Landing";
import ProjectTypes from "@/components/ProjectTypes";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Landing />
      <ProjectTypes />
    </div>
  );
};

export default Home;
