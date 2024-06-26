"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Board = ({ name, title, image, custom, intros }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const imageVariants = {
    hover: { scale: 1.05 },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.8, delay: custom }}
    >
      <div className="w-[70%] translate-y-1/2 border-[1px] border-art-purple-200 bg-white rounded-full text-art-purple-200 text-sm md:text-lg font-semibold z-10 flex justify-center">
        {title}
      </div>
      <div className="w-[90%] border-[3px] md:border-y-[6.5px] border-art-purple-200 rounded-full py-[3.75px] md:py-0 px-[4px] md:px-1 drop-shadow-[4px_5px_0px_rgba(205,164,229,255)]">
        <div className="pt-2 pb-1 px-2 bg-art-purple-300 ring-4 ring-offset-[1.5px] ring-art-pink-400 ring-offset-art-purple-200 text-white text-xs md:text-base lg:text-lg xl:text-2xl font-bold rounded-full">
          {name}
        </div>
      </div>
      <motion.div
        className="m-4 p-2 md:p-3 rounded-xl shadow-md bg-art-purple-100 h-full"
        whileHover="hover"
        variants={imageVariants}
      >
        <Image
          src={image}
          alt="profilepic"
          className="rounded-lg h-80 object-top object-cover"
        />
      </motion.div>
      <div className="h-full text-base m-5 text-art-purple-100 relative flex items-start text-center -z-10 mb-12">
        {intros}
      </div>
    </motion.div>
  );
};

export default Board;
