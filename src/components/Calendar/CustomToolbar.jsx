import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CustomToolbar = ({ onNavigate, date }) => {
  return (
    <div className="flex justify-center w-full flex-col md:flex-row pt-8">
      <IoIosArrowBack
        onClick={() => {
          onNavigate("PREV");
        }}
        className="hover:cursor-pointer text-4xl"
      />
      <div>
        <p className="m-0 text-transparent bg-clip-text bg-black text-4xl">
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
