import React from "react";
import logo from "./image/nubes.png";
import SearchBar from "../SearchBar";
import "./index.css";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand logo">
          <img
            id="logo__clima"
            src={logo}
            className="d-inline-block align-top"
            alt=""
          />
          <h1>Weather App</h1>
        </span>
        <SearchBar solicitarCiudad={props.solicitarCiudad} />
      </nav>
    </div>
  );
}
