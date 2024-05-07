import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CustomToolbar = ({ onNavigate, date }) => {
  return (
    <div className="flex justify-center items-center flex-col md:flex-row py-3 bg-white w-1/4 m-auto border-double border-8 border-p rounded-full border-art-purple text-art-purple">
      <IoIosArrowBack
        onClick={() => {
          onNavigate("PREV");
        }}
        className="hover:cursor-pointer text-4xl"
      />
      <div>
        <p className="m-0  text-4xl font-nunito">
          {date.toLocaleString("default", { month: "short" })}{" "}
          {date.getFullYear()}
        </p>
      </div>
      <IoIosArrowForward
        onClick={() => onNavigate("NEXT")}
        className="hover:cursor-pointer text-saf-brown text-4xl"
      />
    </div>
  );
};

export default CustomToolbar;
