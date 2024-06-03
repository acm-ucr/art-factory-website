import Image from "next/image";
import Button from "./Button";
import errorclouds from "../../public/errorclouds.svg";
import oopseasel from "../../public/oopseasel.svg";
const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center h-fit mx-16 mt-8 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
        <div>
          <Image src={oopseasel} alt="oopseasel" className="w-10/12" />
        </div>
        <div className="flex-col items-center text-center md:mt-14 w-11/12">
          <div className="flex-col inline-flex">
            <div className="flex justify-center bg-clip-text text-transparent bg-gradient-to-r from-art-pink-100 to-art-purple-200 text-2xl md:text-4xl font-bold ">
              404
            </div>
            <div className="mt-2 w-20 h-1 bg-art-pink-100 rounded-lg" />
          </div>
          <p className="text-art-purple-100 text-center text-2xl font-bold pt-4">
            Page Not Found
          </p>
          <p className="pt-4 pb-8">
            Oh no! It looks like you stumbled upon our blank canvas – seems our
            latest masterpiece is a work in progress! Our creative team is hard
            at work crafting the perfect page for you. In the meantime, feel
            free to explore our other completed works instead!
          </p>
          <Button text="BACK TO HOME" link="/" className="w-3/12 z-50" />
        </div>
      </div>
      <Image
        src={errorclouds}
        alt="Error Clouds"
        className=" absolute top-[60%] md:top-[28%] z-[-1]"
      />
    </div>
  );
};

export default Error;
