import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Pearl = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pearl">
      <Navigation />
      <div className="container">
        <h2>Pearl</h2>
        <div className="dog6">
          <div className="img-dog6"></div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde harum, animi quasi numquam dolores delectus qui, sed inventore deleniti perspiciatis eveniet, similique accusamus corrupti? Iusto sint doloribus ipsam, in quod est velit unde fugiat beatae modi veritatis consectetur provident voluptatum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia sed
            dolores nam nemo aliquam? Placeat dicta ad cupiditate nemo
            molestias, doloribus modi debitis eligendi. Sequi, id.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias qui
            sint molestias rem? Inventore sit maiores officiis in vero corporis
            consequatur, rem debitis at dicta quam veniam consequuntur
            accusantium neque voluptatem ratione enim! Hic dignissimos tenetur
            minima.
          </p>
        </div>

        <div className="container-links">
          <div className="container-previous">
            <NavLink to="/loki">
              <p>← Précédent</p>
            </NavLink>
          </div>
          <div className="container-next">
            <NavLink to="/dogs">
              <p>Nos chiens</p>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pearl;
