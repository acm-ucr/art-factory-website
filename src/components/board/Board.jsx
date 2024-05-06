import Image from "next/image";
const Board = ({ name, title, image }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-[70%] translate-y-1/2 border-[1px] border-art-purple-200 bg-white rounded-full text-art-purple-200 text-sm md:text-lg font-semibold z-10 flex justify-center">
        {title}
      </div>
      <div className="w-[80%] border-[3px] md:border-[6.5px] border-art-purple-200 rounded-full py-[3.75px] md:py-[0px] px-[4px] md:px-[1px] drop-shadow-[4px_5px_0px_rgba(205,164,229,255)]">
        <div className="pt-2 pb-1 px-8 md:px-12 bg-art-purple-300 ring-4 ring-offset-[1.5px] ring-art-pink-400 ring-offset-art-purple-200  text-white text-sm md:text-lg font-bold rounded-full">
          {name}
        </div>
      </div>
      <div className="m-4 p-4 rounded-xl shadow-md bg-art-purple-100">
        <Image src={image} alt={"profilepic"} className="rounded-lg" />
      </div>
    </div>
  );
};

export default Board;
