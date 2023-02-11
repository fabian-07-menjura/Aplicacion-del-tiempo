import React from "react";
import image from "./image/nube1.png";
import "./index.css";

function Cargando() {
  return (
    <div className="cargando">
      <img src={image} alt="" />
      <h4>Esperando ciudad...</h4>
    </div>
  );
}

export default Cargando;
