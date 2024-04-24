import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const CustomToolbar = ({ onNavigate, date }) => {
  return (
    <div className="flex justify-center items-center w-full py-3 flex-col md:flex-row">
      <AiOutlineArrowLeft
        onClick={() => {
          onNavigate("PREV");
        }}
        className="hover:cursor-pointer text-saf-brown text-4xl"
      />
      <p className="m-0 text-transparent bg-clip-text bg-saf-brown text-4xl">
        {date.toLocaleString("default", { month: "short" })}{" "}
        {date.getFullYear()}
      </p>

      <AiOutlineArrowRight
        onClick={() => onNavigate("NEXT")}
        className="hover:cursor-pointer text-saf-brown text-4xl"
      />
    </div>
  );
};

export default CustomToolbar;
