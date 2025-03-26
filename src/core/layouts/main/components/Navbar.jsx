import { MdArrowOutward } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDownSFill } from "react-icons/ri";
import { Sidebar } from "../../../../components/Sidebar";
import { sidebarLinks } from "../../../router/routes/routes";
import React from "react";

export const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
    const overBackground = document.createElement("div");
    overBackground.id = "sidebar-overlay";
    overBackground.classList.add(
      "absolute",
      "top-0",
      "left-0",
      "w-full",
      "h-lvh",
      "bg-black",
      "opacity-60",
      "z-10"
    );
    sidebar.parentNode.appendChild(overBackground);
  };

  return (
    <div className="w-full h-[80px] bg-[#111111] fixed z-20">
      <div className="flex justify-between items-center h-full px-4  w-">
        <div className="flex items-center space-x-4">
          <div className="flex">
            <a href="">
              <img
                style={{
                  filter:
                    "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",

                  hover:
                    "filter: invert(18%) sepia(92%) saturate(7487%) hue-rotate(358deg) brightness(100%) contrast(119%)",
                }}
                className="w-24 lg:w-20 "
                src="src/assets/logos/Riot-logo.svg"
                alt=""
              />
            </a>
            <a href="">
              <RiArrowDownSFill className="text-[#282828] size-6 hover:text-red-600" />
            </a>
          </div>
          <div className="flex justify-center items-center w-auto">
            <a href="">
              <img
                className="lg:hidden"
                src="src/assets/logos/LoL-logo.svg"
                alt="league of legends logo"
              />
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block"
                width="26"
                height="28"
                viewBox="0 0 30 32"
                fill="none"
                alt="league of legends logo"
              >
                <g>
                  <path
                    fill="#C28F2C"
                    d="M1.80644 9.75049C0.655032 11.8373 0 14.2271 0 16.7683C0 19.3095 0.655032 21.7015 1.80644 23.7883V9.75049Z"
                  ></path>
                  <path
                    fill="#C28F2C"
                    d="M15 2.02222C13.7829 2.02222 12.602 2.16921 11.4688 2.43647V4.75718C12.5907 4.44093 13.7738 4.26721 15 4.26721C22.0218 4.26721 27.7153 9.84627 27.7153 16.7305C27.7153 19.8307 26.5571 22.6659 24.6464 24.8463L24.2838 26.118L23.4814 28.9331C27.4184 26.2761 30.0023 21.8195 30.0023 16.7705C30 8.62355 23.2843 2.02222 15 2.02222Z"
                  ></path>
                  <path
                    fill="#C28F2C"
                    d="M11.4688 24.4209H22.9737H23.2253C25.1723 22.4209 26.3713 19.7126 26.3713 16.7305C26.3713 10.5746 21.2806 5.58569 15 5.58569C13.767 5.58569 12.5816 5.78168 11.4688 6.1358V24.4209Z"
                  ></path>
                  <path
                    fill="#C28F2C"
                    d="M10.1088 0H1.55029L3.16634 3.29844V28.7038L1.55029 32H21.1922L22.9737 25.7572H10.1088V0Z"
                  ></path>
                </g>
              </svg>
            </a>
            <div className="hidden ml-9 w-full h-auto lg:flex justify-center items-center">
              <div className="w-full h-auto flex justify-center items-center space-x-2 list-none">
                <div className="hover:bg-[#333333] flex justify-center rounded-lg items-center w-auto h-8 px-2 text-white">
                  <a className=" text-[16px] uppercase" href="">
                    juego
                  </a>
                </div>
                <div className="hover:bg-[#333333] flex justify-center rounded-lg items-center w-auto h-8 px-2 text-white">
                  <a className=" text-[16px] uppercase" href="">
                    campeones
                  </a>
                </div>
                <div className="hover:bg-[#333333] flex justify-center rounded-lg items-center w-auto h-8 px-2 space-x-1 hover:text-[#c8aa6e] text-white ">
                  <a className="text-[16px] uppercase " href="">
                    noticias
                  </a>
                  <RiArrowDownSFill className="text-[#7e7e7e] size-4.5" />
                </div>
                <div className="hover:bg-[#333333] flex justify-center rounded-lg items-center w-auto h-8 px-2 text-white">
                  <a className=" text-[16px] uppercase" href="">
                    notas de la version
                  </a>
                </div>
                <div className="hidden hover:bg-[#333333] xl:flex justify-center rounded-lg items-center w-auto h-8 px-2 space-x-1 hover:text-[#c8aa6e] text-white">
                  <a className=" text-[16px] uppercase " href="">
                    descubrir
                  </a>
                  <RiArrowDownSFill className="text-[#7e7e7e] size-4.5" />
                </div>
                <div className="hidden hover:bg-[#333333] xl:flex justify-center rounded-lg items-center w-auto h-8 px-2 space-x-1 text-white">
                  <a className=" text-[16px] uppercase" href="">
                    esports
                  </a>
                  <MdArrowOutward className="text-[#7e7e7e]" />
                </div>
                <div className="hidden hover:bg-[#333333] 2xl:flex justify-center rounded-lg items-center w-auto h-8 px-2 space-x-1 text-white">
                  <a className=" text-[16px] uppercase" href="">
                    universe
                  </a>
                  <MdArrowOutward className="text-[#7e7e7e]" />
                </div>
                <div className="hidden hover:bg-[#333333] 2xl:flex justify-center rounded-lg items-center w-auto h-8 px-2 space-x-1 text-white">
                  <a className=" text-[16px] uppercase" href="">
                    merchandising
                  </a>
                  <MdArrowOutward className="text-[#7e7e7e]" />
                </div>
                <div className="hover:bg-[#333333] flex justify-center rounded-lg items-center w-auto h-8 px-2 space-x-1 hover:text-[#c8aa6e] text-white">
                  <a className=" text-[16px] uppercase " href="">
                    más
                  </a>
                  <RiArrowDownSFill className="text-[#7e7e7e] size-4.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 lg:space-x-1">
          <div className="hidden lg:flex text-white w-11 h-11 rounded-2xl -mr-0.5 justify-center items-center bg-[#282828]">
            <IoIosSearch className="size-7.5" />
          </div>
          <div className="hover:bg-[#282828] p-2.5 rounded-lg cursor-pointer">
            <TbWorld className="text-gray-200 size-7 lg:size-5" />
          </div>
          <div className="bg-[#282828] p-3 rounded-2xl lg:hidden">
            <GiHamburgerMenu
              onClick={(e) => handleClick(e)}
              className="text-gray-200 size-6 cursor-pointer"
            />
            <Sidebar data={sidebarLinks} />
          </div>
          <button className="bg-[#00b2cf] w-34 h-8 rounded-xl hidden lg:block">
            <a
              className="uppercase text-[16px] transform duration-150 hover:text-[#c8aa6e]"
              href=""
            >
              jugar ahora
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
