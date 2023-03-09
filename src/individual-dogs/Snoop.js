import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Snoop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="snoop">
      <Navigation />
      <div className="container">
        <h2>Snoop</h2>
        <div className="dog3">
          <div className="img-dog3"></div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis non nemo, quidem ea accusantium similique obcaecati ullam rerum at ipsam doloribus est nihil dicta? Dicta tempore ducimus consequuntur optio magni, veniam esse vero sit, quasi, obcaecati earum consectetur delectus quibusdam fugit exercitationem? Numquam, doloremque! Repudiandae.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio, laboriosam inventore numquam itaque nobis vel id sint accusantium aut eius nulla dolorem velit.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, odio. Doloremque inventore itaque quod et quidem quia doloribus molestiae maiores dolorem fuga, dicta est nulla laudantium ipsam quae qui ut velit? Porro eum dolorum tempora soluta.
          </p>
        </div>

       <div className="container-links">
        <div className="container-previous">
          <NavLink to="/nala">
            <p>← Précédent</p>
          </NavLink>
        </div>
        <div className="container-next">
          <NavLink to="/oscar">
            <p>Suivant →</p>
          </NavLink>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Snoop;
