"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SearchFoods = () => {
  const router = useRouter();
  const params = useSearchParams();

  const handleSearch = (e) => {
    e.preventDefault();

    const searchValue = e.target.searchText.value;
    const newParams = new URLSearchParams(params.toString());

    //set query
    newParams.set("search", searchValue);
    router.push(`?${newParams.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2">
      <fieldset className="fieldset w-full">
        <input
          type="text"
          name="searchText"
          className="input"
          placeholder="Search Foods"
        />
      </fieldset>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchFoods;
