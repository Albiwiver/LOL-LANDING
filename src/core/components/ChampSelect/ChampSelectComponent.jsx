import { champObject } from "./data/ChampsData";
import { useState } from "react";
import React from "react";
import { Slider } from "../../../common/slider";

export const ChampSelectComponent = () => {
  const [selectedChamp, setSelectedChamp] = useState(champObject[0]);

  const handleClassClick = (champName) => {
    const champ = champObject.find((champ) => champ.champName === champName);

    if (champ) setSelectedChamp(champ);
  };

  return (
    <section
      className="w-full h-auto lg:flex lg:justify-center lg:items-center bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${selectedChamp.champBackground})` }}
    >
      <div className="p-6 w-full h-full grid-cols-1 lg:grid-cols-2 justify-center items-center grid md:p-12">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <div>
            <div className="text-center justify-center items-center w-full">
              <p className="mb-4 text-lg lg:text-[22px]">ELIGE A TU</p>
              <h2 className="font-bold text-5xl mb-6 italic lg:text-[64px]">
                CAMPEÓN
              </h2>
              <p className="mb-6 text-[16px] lg:text-lg lg:mb-12">
                Lanzarse en medio del combate, apoyar a tus aliados... Prefieras
                lo que prefieras, encontrarás tu sitio en la Grieta.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center font-light md:flex-row md:w-4/5 md:mx-auto">
              <button className="bg-[#c8aa6e] cursor-pointer w-full h-16 text-sm md:text-lg  hover:bg-[#e7c88d] transition duration-500 ease-in-out mb-4 md:w-3/5 md:mr-4 md:mb-0">
                <a href="" className="lg:text-lg">
                  DESCUBRIR MÁS CAMPEONES
                </a>
              </button>
              <button className="bg-[#50bae4] cursor-pointer w-full h-16 text-sm md:text-lg  hover:bg-[#90dcff] transition duration-500 ease-in-out md:w-2/5">
                <a href="" className="lg:text-lg">
                  JUGAR AHORA
                </a>
              </button>
            </div>
          </div>
          <div className="flex w-full h-auto justify-between items-center mt-6 lg:justify-between lg:mt-10">
            <div className="flex flex-col justify-center items-center hover:scale-110 transform duration-200">
              <img
                src="src/assets/logos/assasins-logo.webp"
                className="brightness-50 hover:brightness-100 cursor-pointer mx-3 size-12 lg:size-16"
                alt=""
                onClick={() => handleClassClick("akali")}
              />
              <p className="uppercase text-[10px] mt-2 lg:text-sm lg:mt-6">
                asesinos
              </p>
            </div>
            <div className="flex flex-col justify-center items-center hover:scale-110 transform duration-200">
              <img
                src="src/assets/logos/fighters-logo.avif"
                className="brightness-50 hover:brightness-100 cursor-pointer mx-3 size-12 lg:size-16"
                alt=""
                onClick={() => handleClassClick("yasuo")}
              />
              <p className="uppercase text-[10px] mt-2 sm:text-xs lg:text-sm lg:mt-6">
                luchadores
              </p>
            </div>
            <div className="flex flex-col justify-center items-center hover:scale-110 transform duration-200">
              <img
                src="src/assets/logos/wizards-logo.avif"
                className="brightness-50 hover:brightness-100 cursor-pointer mx-3 size-12 lg:size-16"
                alt=""
                onClick={() => handleClassClick("lux")}
              />
              <p className="uppercase text-[10px] mt-2 sm:text-xs lg:text-sm lg:mt-6">
                magos
              </p>
            </div>
            <div className="flex flex-col justify-center items-center hover:scale-110 transform duration-200">
              <img
                src="src/assets/logos/shooters-logo.webp"
                className="brightness-50 hover:brightness-100 cursor-pointer mx-3 size-12 lg:size-16"
                alt=""
                onClick={() => handleClassClick("jinx")}
              />
              <p className="uppercase text-[10px] mt-2 sm:text-xs lg:text-sm lg:mt-6">
                tiradores
              </p>
            </div>
            <div className="lg:flex flex-col justify-center items-center hover:scale-110 transform duration-200 hidden">
              <img
                src="src/assets/logos/supports-logo.avif"
                className="brightness-50 hover:brightness-100 cursor-pointer mx-3 size-12 lg:size-16"
                alt=""
                onClick={() => handleClassClick("thresh")}
              />
              <p className="uppercase text-[10px] mt-2 sm:text-xs lg:text-sm lg:mt-6">
                supports
              </p>
            </div>
            <div className="xl:flex flex-col justify-center items-center hover:scale-110 transform duration-200 hidden">
              <img
                src="src/assets/logos/tanks-logo.avif"
                className="brightness-50 hover:brightness-100 cursor-pointer mx-3 size-12 lg:size-16"
                alt=""
                onClick={() => handleClassClick("leona")}
              />
              <p className="uppercase text-[10px] mt-2 sm:text-xs lg:text-sm lg:mt-6">
                tanques
              </p>
            </div>
          </div>
          <Slider />
        </div>
        <div className="flex flex-col w-full h-full justify-center items-center mt-8">
          {selectedChamp && (
            <>
              <img
                src={selectedChamp.img}
                alt={selectedChamp.champName}
                className="max-w-[621px] max-h-[621px]"
              />
              <div className="text-center mt-10">
                <h2 className="uppercase font-medium lg:text-2xl">
                  {selectedChamp.champName}
                </h2>
                <p className="text-[#6C727E] text-sm font-medium lg:text-[16px]">
                  {selectedChamp.champDescription}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
