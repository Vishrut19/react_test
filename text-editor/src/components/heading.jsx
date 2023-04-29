import React from "react";

const heading = () => {
  return (
    <nav class="bg-slate-600 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <a class="flex ">
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Demo Editor by Vishrut
          </span>
        </a>
        <div class="flex md:order-2">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ml-[25px]"
          >
            Save
          </button>
        </div>
      </div>
    </nav>
  );
};

export default heading;
