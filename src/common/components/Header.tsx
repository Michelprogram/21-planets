import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () =>{


    return(

        <div className="container-header">
            <div className='navigation'>
                        <NavLink to={"/login"} className="links">
                            <li>Login <span className='icons'>🔥</span></li>
                            
                        </NavLink>

                        <NavLink to={"/panier"} className="links">
                            <li>Panier <span className='icons'>🛒</span></li>
                        </NavLink>

                        <NavLink to={"/shop"} className="links">
                            <li>Shop <span className='icons'>🌌</span></li>
                        </NavLink>

                        <NavLink to={"/"} className="title-middle">
                            <li>21 Planets</li>
                        </NavLink>

                        <NavLink to={"/about"} className="links">
                            <li>A propos <span className='icons'>🧊</span></li>
                        </NavLink>

                        <NavLink to={"/articles"} className="links">
                            <li>News <span className='icons'>📰</span></li>
                        </NavLink>

                        <NavLink to={"/support"} className="links">
                            <li>Support <span className='icons'>🎫</span></li>
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

        

    )
}

export default Header