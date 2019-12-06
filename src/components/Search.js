import React, { useState } from "react";

const Search = (props) => {
    const [searchValue, setSearchValue] =  useState("");

    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = (e) => {
        setSearchValue("");
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <form className="search">
            <input 
                value={searchValue}
                onChange={handleSearchInputChange}
                type="text"
            />
            <input 
                value="SEARCH"
                type="submit"
                onClick={callSearchFunction}
            />
        </form>
    );
};

export default Search;