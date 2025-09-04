 import React from "react";

const Shimer = () => {
  return (
    <div className="w-full flex gap-10 flex-wrap my-6">
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="w-60 h-40 border border-gray-300 shadow-md rounded-lg flex items-center justify-center bg-gray-100"
        >
          Video {"loading..."}
        </div>
      ))}
    </div>
  );
};

export default Shimer;
