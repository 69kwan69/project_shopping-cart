import React from "react";

const OtherNav = () => {
  function Menu(e) {
    let list = document.querySelector("ul");
    e.name === "menu"
      ? ((e.name = "close"),
        list.classList.add("top-[80px]"),
        list.classList.add("opacity-100"))
      : ((e.name = "menu"),
        list.classList.remove("top-[80px]"),
        list.classList.remove("opacity-100"));
  }

  return (
    <nav className="bg-white p-5 shadow md:flex md:items-center md:justify-between">
      <div className="flex items-center justify-between ">
        <span className="cursor-pointer font-[Poppins] text-2xl">
          <img
            className="inline h-10"
            src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"
          />
          tailwind
        </span>

        <span className="mx-2 block cursor-pointer text-3xl md:hidden">
          <span className="material-symbols-outlined" onclick={Menu(this)}>
            menu
          </span>
        </span>
      </div>

      <ul className="absolute left-0 top-[-400px] z-[-1] w-full bg-white py-4 pl-7 opacity-0 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:py-0 md:pl-0 md:opacity-100">
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl duration-500 hover:text-cyan-500">
            HOME
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl duration-500 hover:text-cyan-500">
            SERVICE
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl duration-500 hover:text-cyan-500">
            ABOUT
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl duration-500 hover:text-cyan-500">
            CONTACT
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl duration-500 hover:text-cyan-500">
            BLOG'S
          </a>
        </li>

        <button className="mx-4 rounded bg-cyan-400 px-6 py-2 font-[Poppins] text-white duration-500 hover:bg-cyan-500 ">
          Get started
        </button>
        <h2 className=""></h2>
      </ul>
    </nav>
  );
};

export default OtherNav;
