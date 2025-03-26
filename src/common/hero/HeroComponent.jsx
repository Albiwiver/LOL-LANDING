import React from "react";

export const HeroComponent = ({
  video,
  buttonTitle,
  hasLogo = true,
  hasPadding = true,
  hasBorder = true,
  mainHero = true,
}) => {
  return (
    <section
      className={`w-full h-[580px] lg:h-[640px] relative overflow-hidden font-roboto-condensed ${
        hasPadding ? "pt-20" : ""
      }`}
    >
      <div className="w-full h-full justify-center items-center">
        <video
          className="w-full h-full object-cover z-[-1]"
          autoPlay
          muted
          playsInline
          loop
          typeof="video/mp4"
          src={video}
        ></video>
        <div
          className={`z-10 absolute ${
            mainHero ? "top-35" : "top-82"
          } flex flex-col items-center justify-center w-full`}
        >
          {hasLogo && (
            <div className="w-60 h-60 justify-center items-center flex lg:w-76 lg:h-76 ">
              <a href="">
                <img
                  src="src/assets/images/Lol.png"
                  alt="logo de league of legends"
                />
              </a>
            </div>
          )}

          <div
            className={`mt-[-40px] ${
              hasBorder ? "border-1 border-white" : ""
            } w-40 h-17 flex justify-center text-center items-center md:w-44 md:h-18 md:mt-[-46px]`}
          >
            <button className="bg-[#c8aa6e] cursor-pointer w-[96%] h-[92%] text-sm md:text-lg font-light hover:bg-[#e7c88d] transition duration-500 ease-in-out">
              <a href="">{buttonTitle}</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
