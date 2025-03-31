import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

export const Slider = ({ isXlScreen = true }) => {
  return (
    <div
      className={`flex justify-center w-full items-center h-8 mt-6 ${
        isXlScreen ? "xl:hidden" : "lg:hidden pl-6 md:pl-12 mb-8"
      }`}
    >
      <div className="w-full h-0.5 bg-[#bcbcbc]"></div>
      <div className="flex justify-center w-1/5 items-center h-full ml-3">
        <IoIosArrowRoundBack className="size-8 text-[#6C727E]" />
        <IoIosArrowRoundForward className="size-8 text-[#c8aa6e]" />
      </div>
    </div>
  );
};
