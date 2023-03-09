import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Cats = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cats">
      <Navigation />
      <h2>Nos chats</h2>

      <div className="container">
        <div className="cat1">
          <div className="img-cat1"></div>
          <p>12/03/2019</p>
          <h3>Charlie</h3>
          <NavLink to="/charlie">
            <p>À propos de Charlie</p>
          </NavLink>
        </div>

        <div className="cat2">
          <div className="img-cat2"></div>
          <p>21/08/2018</p>
          <h3>Lili</h3>
          <NavLink to="/lili">
            <p>À propos de Lili</p>
          </NavLink>
        </div>

        <div className="cat3">
          <div className="img-cat3"></div>
          <p>01/03/2022</p>
          <h3>Marley</h3>
          <NavLink to="/marley">
            <p>À propos de Marley</p>
          </NavLink>
        </div>

        <div className="cat4">
          <div className="img-cat4"></div>
          <p>25/01/2019</p>
          <h3>Grisou</h3>
          <NavLink to="/grisou">
            <p>À propos de Grisou</p>
          </NavLink>
        </div>

        <div className="cat5">
          <div className="img-cat5"></div>
          <p>15/10/2020</p>
          <h3>Angel</h3>
          <NavLink to="/angel">
            <p>À propos de Angel</p>
          </NavLink>
        </div>

        <div className="cat6">
          <div className="img-cat6"></div>
          <p>03/04/2020</p>
          <h3>Mochi</h3>
          <NavLink to="/mochi">
            <p>À propos de Mochi</p>
          </NavLink>
        </div>
      </div>
      <div className="container-btn">
        <NavLink to="/dogs">
          <button>Voir nos chiens</button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Cats;
