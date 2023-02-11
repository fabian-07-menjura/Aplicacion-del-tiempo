import React, { useState } from "react";
import "./index.css";
import buscador from "./image/buscador.png";

function SearchBar({ solicitarCiudad }) {
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        solicitarCiudad(city);
        setCity("");
      }}
      className="search"
    >
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type="text"
        className="search__input"
        placeholder="Ciudad..."
      />

      <button type="submit" href="#" className="search__button">
        <img src={buscador} alt="" />
      </button>
    </form>
  );
}

export default SearchBar;
