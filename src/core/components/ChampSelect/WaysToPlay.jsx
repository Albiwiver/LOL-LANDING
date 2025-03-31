import { modesToPlay } from "./data/WaysToPlayData";
import { useState } from "react";

export const WaysToPlay = () => {
  const [selectedMode, setSelectedMode] = useState(modesToPlay[0]);

  const handleModeChange = (e, mode) => {
    e.preventDefault();
    setSelectedMode(mode);
  };

  return (
    <section className="w-full h-auto py-12 flex justify-center items-center bg-[url(src/assets/images/backgrounds/ways-to-play-bg.avif)] bg-center bg-no-repeat bg-cover">
      <div className="container w-full h-full flex flex-col lg:flex-row px-8 justify-center items-center">
        <div className="flex justify-center w-full h-full items-center flex-col">
          <div className="w-full h-full flex flex-col justify-center items-center text-white">
            <p className="text-[16px] sm:text-lg lg:text-[22px] uppercase mb-3">
              varias formas de
            </p>
            <h2 className="uppercase text-5xl lg:text-[64px] italic mb-5">
              jugar
            </h2>
            <button className="bg-[#c8aa6e] text-black mt-6 lg:mt-10 cursor-pointer w-full h-16 text-sm md:text-lg  hover:bg-[#e7c88d] transition duration-500 ease-in-out mb-4 md:w-[160px] lg:w-[170px] ">
              JUGAR AHORA
            </button>
          </div>
          <div className="w-full h-auto flex mt-4 lg:mt-8 gap-4 items-center justify-evenly">
            {modesToPlay.map((mode, index) => (
              <>
                <div className="flex flex-col items-center justify-center text-center brightness-50 hover:brightness-100 hover:scale-110 transform duration-200 aria-selected:brightness-100">
                  <img
                    key={index}
                    src={mode.img}
                    alt={mode.title}
                    className="cursor-pointer h-[46px] w-[48px] lg:h-[64px] lg:w-[64px]"
                    onClick={(e) => handleModeChange(e, mode)}
                  />
                  <p className="uppercase text-white mt-4 text-xs lg:text-sm">
                    {mode.title}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full h-full mt-14 lg:mt-0">
          <div className="w-full h-full p-5 rounded-full flex items-center justify-center border-[#c8aa6e] border-1">
            <video
              src={selectedMode.backgroundVideo}
              className="w-full h-full object-cover rounded-full"
              autoPlay
              loop
              muted
            ></video>
          </div>
          <div className="flex flex-col text-white text-center">
            <p className="uppercase mt-6 lg:mt-12 font-bold italic lg:text-2xl">
              {selectedMode.videoTitle}
            </p>
            <p className="mt-4 lg:text-lg">{selectedMode.videoDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
