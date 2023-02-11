import React, { useState } from "react";
import "./index.css";

var cambioTipoTem = true;

function Card({ min, max, name, img, onClose, description, date }) {
  const [tem, setTem] = useState({ temMax: max, temMin: min });

  //Funcion para cambiar el tipo de temperatura
  const tipoTem = () => {
    cambioTipoTem = !cambioTipoTem;
    if (cambioTipoTem === true) {
      setTem({ temMax: max, temMin: min });
    } else {
      let minimaC = min * 32 * (5 / 9);
      let maximaC = max * 32 * (5 / 9);
      setTem({ temMax: maximaC, temMin: minimaC });
    }
  };
  return (
    <div className="card">
      <div id="closeIcon" className="row">
        <p className="fecha">{date}</p>
        <button onClick={onClose} className="btn btn-sm btn-danger">
          X
        </button>
      </div>
      <div className="card__body">
        <h5 className="card__title">{name}</h5>
        <div className="row">
          <div className="  grados">
            <p>Min</p>
            <p>
              {parseInt(tem.temMin)}
              {cambioTipoTem ? "F°" : "C°"}
            </p>
          </div>
          <button className="btn btn-dark tipo__Temp" onClick={() => tipoTem()}>
            {cambioTipoTem ? "C°" : "F°"}
          </button>
          <div className=" grados">
            <p>Max</p>
            <p>
              {parseInt(tem.temMax)}
              {cambioTipoTem ? "F°" : "C°"}
            </p>
          </div>
        </div>

        <div className="imagen">
          <img
            className="iconoClima"
            src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
            width="80"
            height="80"
            alt=""
          />
          <h4>{description}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
