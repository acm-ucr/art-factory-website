import Landing from "@/components/Landing";
import ProjectType from "@/components/ProjectType";
import paintbrush from "@/public/cards/paintbrush.svg";
import hand from "@/public/cards/hand.svg";
import origami from "@/public/cards/origami.svg";
import pencil from "@/public/cards/pencil.svg";
import Vector from "@/public/cards/Vector.svg";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Landing />
      <div className="flex justify-center flex-wrap w-full">
        <ProjectType
          icon={paintbrush}
          title="Painting"
          description="Description for Painting"
          className="bg-[#BF8CE1]"
        />
        <ProjectType
          icon={pencil}
          title="Sketching"
          description="Description for Sketching"
          className="bg-[#1C1DAB]"
        />
        <ProjectType
          icon={hand}
          title="Crafting"
          description="Description for Crafting"
          className="bg-[#BF8CE1]"
        />
        <div className="w-full flex justify-center">
          <ProjectType
            icon={origami}
            title="DIY"
            description="Description for DIY"
            className="bg-[#BF8CE1]"
          />
          <ProjectType
            icon={Vector}
            title="Studio Time"
            description="Description for Studio Time"
            className="bg-[#1C1DAB]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
