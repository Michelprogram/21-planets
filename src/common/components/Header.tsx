import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import PlanetsSVG from "../../constants/images";
import { random } from "../../utils/Random";
import usePanier from "../hooks/panier";

const Header = () => {
  const { panier, size } = usePanier();

  const setFavicon = (): void => {
    const favicon = document.getElementById(
      "favicon"
    ) as HTMLAnchorElement | null;
    if (favicon != null) {
      favicon.href = PlanetsSVG[random(0, PlanetsSVG.length)];
    }
  };

  useEffect(() => setFavicon, []);

  return (
    <div className="container-header">
      <div className="navigation">
        <NavLink to={"/login"} className="links">
          <li>
            Login <span className="icons">🔥</span>
          </li>
        </NavLink>

        <NavLink to={"/panier"} className="links">
          <li>
            <p>Panier <span className="icons">🛒 {size()}</span></p>
          </li>
        </NavLink>

        <NavLink to={"/shop"} className="links">
          <li>
            Shop <span className="icons">🌌</span>
          </li>
        </NavLink>

        <NavLink to={"/"} className="title-middle">
          <li>21 Planets</li>
        </NavLink>

        <NavLink to={"/about"} className="links">
          <li>
            A propos <span className="icons">🧊</span>
          </li>
        </NavLink>

        <NavLink to={"/articles"} className="links">
          <li>
            News <span className="icons">📰</span>
          </li>
        </NavLink>

        <NavLink to={"/support"} className="links">
          <li>
            Support <span className="icons">🎫</span>
          </li>
        </NavLink>
      </div>
      <div className="container-balls">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </div>
  );
};

export default Header;
