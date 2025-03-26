import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDownSFill } from "react-icons/ri";

export const Sidebar = ({ data }) => {
  const closeSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    const sidebarOverlay = document.getElementById("sidebar-overlay");
    sidebarOverlay && sidebarOverlay.remove();

    sidebar.classList.toggle("hidden");
  };

  const handleClick = (e, index) => {
    e.preventDefault();
    const element = document.getElementById(`data-sidebar-item-${index}`);
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  };

  return (
    <div
      className={
        "w-full h-full bg-[#1a1a1a] hidden fixed z-12 top-0 right-0 sm:w-[494px]"
      }
      id="sidebar"
    >
      <div className="container p-4 w-full h-full flex flex-col text-left font-bold text-white uppercase">
        <div className="w-full h-auto flex justify-between items-center">
          <img
            src="src/assets/logos/LoL-logo.svg"
            alt="league of legends logo"
          />
          <div className="text-white bg-[#333333] w-12 h-12 rounded-2xl justify-center items-center cursor-pointer flex">
            <IoMdClose onClick={closeSidebar} className="size-6" />
          </div>
        </div>
        <div className="flex w-full relative h-11 justify-between items-center mt-5 rounded-2xl bg-[#282828]">
          <div className="flex items-center justify start w-full">
            <IoIosSearch className="size-7.5 ml-2" />
            <input type="" name="" id="" className="outline-none ml-3 w-full" />
          </div>
          <IoMdClose className="size-6 text-[#7e7e7e] mr-3 absolute top-2.5 right-0" />
        </div>
        <div className="w-full h-auto mt-7 overflow-y-scroll">
          {data.map((item, index) => (
            <>
              <a
                onClick={item.children ? (e) => handleClick(e, index) : null}
                href={item.URL}
                key={index}
                className="flex rounded-lg cursor-pointer justify-between h-12 hover:bg-[#333333] hover:text-[#c8aa6e] text-white items-center px-5 mb-2"
              >
                {item.title}
                <div>
                  {item.children && (
                    <RiArrowDownSFill className="size-6 text-[#7e7e7e]" />
                  )}
                </div>
              </a>
              {item.children && (
                <div className="hidden" id={`data-sidebar-item-${index}`}>
                  {item.children.map((child, index) => (
                    <a
                      href={child.URL}
                      key={index}
                      className="flex  rounded-lg cursor-pointer justify-between items-center h-12 hover:bg-[#333333] text-white px-5 mb-2"
                    >
                      {child.title}
                    </a>
                  ))}
                </div>
              )}
            </>
          ))}
        </div>

        <div className="w-full h-auto mt-14">
          <button className="bg-[#0bc4e2] text-black cursor-pointer text-lg w-full h-12 rounded-xl hover:bg-[#0bc5e2d7]">
            <a href="">JUGAR AHORA</a>
          </button>
        </div>
      </div>
    </div>
  );
};
