import React from "react";
import "./index.css";
import wtsp from "./image/whatsapp.png";
import lnkdn from "./image/linkedin.png";
import gthb from "./image/github.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container ">
        <h2 className="footer__title">Fabian Menjura</h2>

        <p className="footer_msg ">Redes sociales ツ</p>
        <div className="container__social">
          <ul className="wraper">
            <li className="icon ">
              <a href="https://www.linkedin.com/in/fabian-menjura-1409ba216/">
                <div className="container__img">
                  <img className="img" src={lnkdn} alt="linkedin" />
                </div>
              </a>
            </li>
            <li className="icon ">
              <a href="https://github.com/fabian-07-menjura">
                <div className="container__img">
                  <img className="img" src={gthb} alt="github" />
                </div>
              </a>
            </li>
            <li className="icon ">
              <a href="https://api.whatsapp.com/send?phone=3146364068">
                <div className="container__img">
                  <img className="img" src={wtsp} alt="wtsp" />
                </div>
              </a>
            </li>
          </ul>
        </div>

        <span className="footer__rights">
          &#169; fabian.menjura.22@gmail.com
        </span>
        <span className="footer__rights footerrights">
          Todos los derechos reservados - 2023
        </span>
      </div>
    </footer>
  );
}

export default Footer;
