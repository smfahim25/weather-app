import React, { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSearchClick = () => {
    console.log(search);
  };
  return (
    <div className="flex flex-row jsutify-center my-6 bg-slate-500 p-5">
      <div className="flex flex-row justify-center w-full items-center space-x-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search for city..."
          type="text"
          className="text-xl font-normal p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <FaSearchLocation
          onClick={handleSearchClick}
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
    </div>
  );
};

export default Search;
