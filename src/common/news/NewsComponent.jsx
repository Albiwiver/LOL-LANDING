import React from "react";
import { Slider } from "../slider";

export const NewsComponent = () => {
  return (
    <section className="bg-[url('src/assets/images/backgrounds/News-bg.avif')] bg-no-repeat object-cover bg-center flex flex-col w-full min-h-[400px] h-auto">
      <div className="lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 md:gap-4 lg:gap-8 items-center justify-center w-full h-full p-6 sm:px-8 lg:px-20 lg:pb-18 xl:px-32">
        <div className="h-auto w-full mt-5 justify-center items-start col-span-3">
          <h2 className="font-bold text-2xl lg:text-3xl mb-4 italic">
            NOTICIAS DESTACADAS
          </h2>
        </div>
        <div className="flex flex-col w-full h-full overflow-hidden relative">
          <img
            className="hover:scale-110 duration-300 object-cover origin-center w-full h-full"
            src="src/assets/images/News-first-image.avif"
            alt=""
          />
          <div className="w-full h-auto justify-start items-center flex">
            <div className="flex justify-center items-center text-center mt-4 text-[10px] md:text-[12px] lg:text-sm">
              <div className="pr-2 font-bold text-[#c8aa6e] border-r-1 border-[#c8aa6e]">
                <p>MULTIMEDIA</p>
              </div>
              <div className="pl-2">
                <p>20/3/2025</p>
              </div>
            </div>
          </div>
          <p className="font-bold mt-2 lg:text-2xl md:text-lg">
            Ma Meilleure Ennemie
          </p>
          <p className="text-[12px] mt-2 md:text-sm lg:text-[16px]">
            El videoclip oficial de "Me meilleure Ennemie", de Stromae y Pomme
            (banda sonora de Arcane -T2)
          </p>
        </div>
        <div className="hidden md:flex flex-col w-full h-full overflow-hidden relative">
          <img
            className="hover:scale-110 duration-300 object-cover"
            src="src/assets/images/News-second-image.avif"
            alt=""
          />
          <div className="w-full h-auto justify-start items-center flex">
            <div className="flex justify-center items-center text-center mt-4 text-[10px]">
              <div className="pr-2 font-bold text-[#c8aa6e] border-r-1 border-[#c8aa6e] md:text-[12px] lg:text-sm">
                <p>ESPORTS</p>
              </div>
              <div className="pl-2">
                <p>20/3/2025</p>
              </div>
            </div>
          </div>
          <p className="font-bold mt-2 lg:text-2xl md:text-lg ">
            ¡Anunciamos el recinto del MSI 2021!
          </p>
          <p className="text-[12px] mt-2 md:text-sm lg:text-[16px]">
            El MSI tendrá lugar en el Pacific Coliseum en Vancouver
          </p>
        </div>
        <div className="hidden lg:flex flex-col w-full h-full overflow-hidden">
          <img
            className="hover:scale-110 duration-300 object-cover"
            src="src/assets/images/News-third-image.webp"
            alt=""
          />
          <div className="w-full h-auto justify-start items-center flex">
            <div className="flex justify-center items-center text-center mt-4 text-[10px]">
              <div className="pr-2 font-bold text-[#c8aa6e] border-r-1 border-[#c8aa6e] md:text-[12px] lg:text-sm">
                <p>ACTUALIZACIONES DEL JUEGO</p>
              </div>
              <div className="pl-2">
                <p>19/3/2025</p>
              </div>
            </div>
          </div>
          <p className="font-bold mt-2 lg:text-2xl md:text-lg">
            La mano del demonio
          </p>
          <p className="text-[12px] mt-2 md:text-sm lg:text-[16px]">
            Minijuego de la temporada inspirado en Noxus
          </p>
        </div>
      </div>
      <Slider isXlScreen={false} />
    </section>
  );
};
