import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {svgIcones as PlanetsSVG} from "../../constants/Images";
import { random } from "../../utils/Random";
import usePanier from "../hooks/panier";

const Header = () => {

  const { panier, size } = usePanier();

  const location = useLocation()

  const setFavicon = (): void => {
    const favicon = document.getElementById(
      "favicon"
    ) as HTMLAnchorElement | null;
    if (favicon != null) {
      favicon.href = PlanetsSVG[random(0, PlanetsSVG.length)];
    }
  };

  const displayPanier = () =>{
    if(size() >= 1){
      return (
        <li className="cart-info">
          <p className="size-info">{size()}</p>
          <p>Panier</p>
        </li>
      )
    } else {
      return(
        <li className="cart-info">
          <p>Panier <span className={iconOnLocation("panier")}>🛒 </span></p>
        </li>
      )
    }
  }

  const iconOnLocation = (expected: string) :string =>{
    return "/"+expected == location.pathname ? "icons-active" : "icons";
  }

  useEffect(() => setFavicon(), []);

  return (
    <div className="container-header">
      <div className="navigation">
        <NavLink to={"/login"} className="links">
          <li>
            Login <span className={iconOnLocation("login")}>🔥</span>
          </li>
        </NavLink>

        <NavLink to={"/panier"} className="links">
          {displayPanier()}
        </NavLink>

        <NavLink to={"/shop"} className="links">
          <li>
            Shop <span className={iconOnLocation("shop")}>🌌</span>
          </li>
        </NavLink>

        <NavLink to={"/"} className="title-middle">
          <li>21 Planets</li>
        </NavLink>

        <NavLink to={"/about"} className="links">
          <li>
            A propos <span className={iconOnLocation("about")}>🧊</span>
          </li>
        </NavLink>

        <NavLink to={"/news"} className="links">
          <li>
            News <span className={iconOnLocation("news")}>📰</span>
          </li>
        </NavLink>

        <NavLink to={"/support"} className="links">
          <li>
            Support <span className={iconOnLocation("support")}>🎫</span>
          </li>
        </NavLink>
      </div>

      <div className="container-balls">

        <NavLink to={"/categories/asteroides"} >
          <div className="ball-1 ball"></div>
        </NavLink>

        <NavLink to={"/categories/exoplanete"}>
          <div className="ball-2 ball"></div>
        </NavLink>

        <NavLink to={"/categories/sattelites"}>
          <div className="ball-3 ball"></div>
        </NavLink>

        <NavLink to={"/categories/packs"}>
          <div className="ball-4 ball"></div>
        </NavLink>

        <NavLink to={"/categories/cometes"}>
          <div className="ball-5 ball"></div>
        </NavLink>

        <NavLink to={"/categories/etoiles"}>
          <div className="ball-6 ball"></div>
        </NavLink>
        

      </div>

    </div>
  );
};

export default Header;
