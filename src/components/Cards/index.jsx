import React from "react";
import "./index.css";

import Card from "../Card";

export default function Cards({ cities, onClose }) {
  console.log("soy cities ", cities);
  const fecha = new Date();
  return (
    <div className="cards">
      {cities?.map((c) => (
        <Card
          key={c.id}
          date={fecha.getDate() + "/" + (fecha.getMonth() + 1)}
          max={Math.round(c.main.temp_max)}
          min={Math.round(c.main.temp_min)}
          img={c.weather[0].icon}
          name={c.name}
          description={c.weather[0].description}
          onClose={() => onClose(c.id)}
        />
      ))}
    </div>
  );
}
