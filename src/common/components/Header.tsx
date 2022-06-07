import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Droplet,
  Earth,
  Gift,
  Meteore,
  Rocket,
  Star,
  svgIcones as PlanetsSVG,
} from "../../constants/Images";
import { useUser } from "../../context/UserContext";
import { random } from "../../utils/Random";
import usePanier from "../hooks/panier";

const Header = () => {
  const { size } = usePanier();
  const user: string = useUser();

  const location = useLocation();

  const setFavicon = (): void => {
    const favicon = document.getElementById(
      "favicon"
    ) as HTMLAnchorElement | null;
    if (favicon != null) {
      favicon.href = PlanetsSVG[random(0, PlanetsSVG.length)];
    }
  };

  //panier
  const displayPanier = () => {
    if (size() >= 1) {
      return (
        <li className="cart-info">
          <p className="size-info">{size()}</p>
          <p>Panier</p>
        </li>
      );
    } else {
      return (
        <li className="cart-info">
          <p>
            Panier <span className={iconOnLocation("panier")}>🛒 </span>
          </p>
        </li>
      );
    }
  };

  //login
  const displayLogin = () => {
    return user != "" ? (
      <li className="user-icon">
        <p>{user.charAt(0).toUpperCase()}</p>
      </li>
    ) : (
      <li>
        Login <span className={iconOnLocation("login")}>🔥</span>
      </li>
    );
  };

  const iconOnLocation = (expected: string): string => {
    return "/" + expected == location.pathname ? "icons-active" : "icons";
  };

  useEffect(() => setFavicon(), []);

  return (
    <div className="container-header">
      <div className="navigation">
        <NavLink to={"/login"} className="links">
          {displayLogin()}
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
        <NavLink to={"/categories/asteroides"}>
          <div className="ball-1 ball">
            <img src={Meteore} />
          </div>
          <p className="description-1 description">Asteroides</p>
        </NavLink>

        <NavLink to={"/categories/exoplanetes"}>
          <div className="ball-2 ball">
            <img src={Earth} />
          </div>
          <p className="description-2 description">Exoplanetes</p>
        </NavLink>

        <NavLink to={"/categories/vaisseaux"}>
          <div className="ball-3 ball">
            <img src={Rocket} />
          </div>
          <p className="description-3 description">Vaisseaux</p>
        </NavLink>

        <NavLink to={"/categories/packs"}>
          <div className="ball-4 ball">
            <img src={Gift} />
          </div>
          <p className="description-4 description">Packs</p>
        </NavLink>

        <NavLink to={"/categories/cometes"}>
          <div className="ball-5 ball">
            <img src={Droplet} />
          </div>
          <p className="description-5 description">Cometes</p>
        </NavLink>

        <NavLink to={"/categories/etoiles"}>
          <div className="ball-6 ball">
            <img src={Star} />
          </div>
          <p className="description-6 description">Etoiles</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
