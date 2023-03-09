import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Angel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="angel">
      <Navigation />
      <div className="container">
        <h2>Angel</h2>
        <div className="cat5">
          <div className="img-cat5"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            voluptatum nemo nulla, consequatur, neque veniam tempore saepe
            voluptatem ipsa hic temporibus asperiores cupiditate aspernatur
            beatae doloremque vel voluptate non eius.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quasi
            omnis vero quia consequatur eveniet sequi culpa voluptate ullam
            excepturi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            provident hic eius maiores dolorem sequi, commodi, molestiae
            aspernatur mollitia laborum deleniti culpa? Iure qui eum in
            repudiandae quia numquam beatae magnam, minima consectetur sunt
            harum magni temporibus voluptates fugiat facilis ab.
          </p>
        </div>
        <div className="container-links">
          <div className="container-previous">
            <NavLink to="/grisou">
              <p>← Précédent</p>
            </NavLink>
          </div>
          <div className="container-next">
            <NavLink to="/mochi">
              <p>Suivant →</p>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Angel;
