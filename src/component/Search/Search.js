import React, { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearchClick = () => {
    onSearch(search);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row justify-center items-center mt-5">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
          type="text"
          className="text-xl mr-3 font-normal p-2 w-[200px] rounded-md shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <FaSearchLocation
          onClick={handleSearchClick}
          title="search"
          size={25}
          className="text-black cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
    </div>
  );
};

export default Search;
