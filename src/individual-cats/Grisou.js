import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Grisou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grisou">
      <Navigation />
      <div className="container">
        <h2>Grisou</h2>
        <div className="cat4">
          <div className="img-cat4"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illum
            deleniti doloremque temporibus eligendi maxime nulla aspernatur
            praesentium magnam. Labore et id sequi distinctio porro!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis
            possimus quibusdam, sit iste, ratione aperiam amet delectus maxime
            reprehenderit officia sed sint doloribus atque laudantium? Harum
            eius saepe pariatur mollitia voluptas, aliquam modi. Sint omnis modi
            consequuntur itaque cupiditate nisi assumenda est voluptas harum,
            nesciunt corporis tenetur, voluptatum libero repudiandae.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quae,
            corrupti laboriosam autem adipisci nulla. Amet voluptate ipsum
            exercitationem eveniet, voluptatibus voluptates nemo commodi odit
            harum repellendus, sapiente libero ratione, esse vero corrupti
            consectetur.
          </p>
        </div>
        <div className="container-links">
          <div className="container-previous">
            <NavLink to="/marley">
              <p>← Précédent</p>
            </NavLink>
          </div>
          <div className="container-next">
            <NavLink to="/angel">
              <p>Suivant →</p>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Grisou;
