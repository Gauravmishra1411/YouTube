import React from "react";

const Buttonlinkst = () => {
  const categories = [
    "All",
    "Music",
    "Gaming",
    "News",
    "Movies",
    "Sports",
    "Live",
    "Courses",
    "Comedy",
    "Technology",
    "Education",
    "Fashion",
    "Travel",
    "Food",
    "Science",
  ];

  return (
    <div className="border-b border-gray-200 bg-white  top-16 z-10">
      <ul className="flex gap-4 px-4 py-3 overflow-x-auto no-scrollbar whitespace-nowrap">
        {categories.map((item, index) => (
          <li key={index}>
            <button
              type="button"
              className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 active:bg-gray-300 cursor-pointer transition"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Buttonlinkst;
