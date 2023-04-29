import React from "react";

const body = () => {
  return (
    <>
    <div className="flex flex-col items-center">
      <label
        for="message"
        class="block mb-2 text-3xl font-medium text-white mt-32"
      >
        Enter Your Text Here...
      </label>
      <textarea
        id="message"
        rows="10"
        class="block p-5 w-9/12 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
      </div>
    </>
  );
};

export default body;
