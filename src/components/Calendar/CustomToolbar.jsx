import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CustomToolbar = ({ onNavigate, date }) => {
  return (
    <div className="flex justify-center">
      <div className="md:absolute z-50 bg-white w-1/3 m-auto border-[6.5px] border-art-purple-200 rounded-full py-0 md:py-[1px] -translate-y-12 overflow-visible">
        <div className="py-.5 ring-4 ring-offset-[1.5px] ring-art-pink-400 ring-offset-art-purple-200 rounded-full text-art-purple-200/90 flex justify-center items-center flex-col md:flex-row">
          <IoIosArrowBack
            onClick={() => {
              onNavigate("PREV");
            }}
            className="hover:cursor-pointer text-3xl text-art-pink-100/50"
          />
          <div>
            <p className="m-0 text-xl md:text-3xl font-nunito font-bold ">
              {date.toLocaleString("default", { month: "short" })}{" "}
              {date.getFullYear()}
            </p>
          </div>
          <IoIosArrowForward
            onClick={() => onNavigate("NEXT")}
            className="hover:cursor-pointer text-art-pink-100/50 text-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomToolbar;
