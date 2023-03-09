import {faFacebook, faInstagram, faTwitter} from "@fortawesome/fontawesome-free-brands";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="left-part">
                <img src="./logo.png" alt="image du logo"/>
                <ul>
                    <a href="#">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                </ul>
            </div>

            <div className="right-part">
                <NavLink to="/blog">
                    <p>Blog</p>
                </NavLink>

                <NavLink to="/mission">
                    <p>Notre mission</p>
                </NavLink>

                <NavLink to="/team">
                    <p>Équipe</p>
                </NavLink>

                <NavLink to="/services">
                    <p>Service</p>
                </NavLink>

                <NavLink to="/contribute">
                    <p>Contribution</p>
                </NavLink>
            </div>
    </div>
    );
};

export default Footer;
