import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CustomToolbar = ({ onNavigate, date }) => {
  return (
    <div className="flex justify-center items-center flex-col md:flex-row py-3 bg-white w-1/3 m-auto border-double border-8 border-p rounded-full border-art-purple-300 text-art-purple-200">
      <IoIosArrowBack
        onClick={() => {
          onNavigate("PREV");
        }}
        className="hover:cursor-pointer text-3xl"
      />
      <div>
        <p className="m-0 text-xl md:text-3xl font-nunito font-bold ">
          {date.toLocaleString("default", { month: "short" })}{" "}
          {date.getFullYear()}
        </p>
      </div>
      <IoIosArrowForward
        onClick={() => onNavigate("NEXT")}
        className="hover:cursor-pointer text-saf-brown text-3xl"
      />
    </div>
  );
};

export default CustomToolbar;
