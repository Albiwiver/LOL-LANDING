export const SkinSection = () => {
  return (
    <section className="w-full h-auto py-6 bg-[url('/assets/images/backgrounds/skin-section-bg.avif')] bg-cover bg-no-repeat bg-center flex justify-center items-center">
      <div className="container px-8 h-full w-full flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full h-full flex flex-col justify-center lg:ml-20">
          <div className="block text-left text-white lg:order-last">
            <p className="uppercase font-bold text-[20px] lg:text-2xl">
              aplasta con
            </p>
            <p className="uppercase mt-1 font-bold text-[56px] italic md:text-[64px] lg:text-[80px]">
              estilo
            </p>
            <p className="text-sm mt-1 lg:text-lg">
              Personaliza tu experiencia con aspectos para tus campeones
              favoritos
            </p>
            <button className="bg-[#c8aa6e] text-black mt-6 lg:mt-12 cursor-pointer w-full h-16 text-sm md:text-lg  hover:bg-[#e7c88d] transition duration-500 ease-in-out mb-4 md:w-[160px] lg:w-[170px] md:mr-4 md:mb-0">
              JUGAR AHORA
            </button>
          </div>
        </div>

        <div className="w-full h-auto mt-16 lg:order-first">
          <img src="assets/images/skin-image-akali.avif" alt="" />
        </div>
      </div>
    </section>
  );
};
