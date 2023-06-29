// import React hooks
import { useState } from "react";

//import css
import "./SearchBar.css";

const SearchBar = ({ setProductSection }) => {
  // definisco uno state per salvare il valore di input dell'utente
  const [searchInput, setSearchInput] = useState("");

  // definisco una funzione per gestire il submit da search bar
  const onSubmitHandle = (event) => {
    event.preventDefault();
    if (searchInput != "") setProductSection(searchInput);

    // dopo la ricerca pulisco il search box
    setSearchInput("");
  };

  // definisco una funzione in cui salvare il valore di search input ogni volta che cambia
  const onChangeHandle = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <form className="SearchBar" onSubmit={onSubmitHandle}>
      <input
        className="SearchBar__input"
        type="text"
        placeholder="Search"
        name="input"
        value={searchInput}
        onChange={onChangeHandle}
      />
    </form>
  );
};

export default SearchBar;
