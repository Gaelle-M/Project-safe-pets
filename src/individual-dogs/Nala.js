import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Nala = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="nala">
      <Navigation />
      <div className="container">
        <h2>Nala</h2>
        <div className="dog2">
          <div className="img-dog2"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit
            qui veritatis aut unde quo, ea adipisci dignissimos eos facere.
            Autem, officiis. Officiis numquam qui quod, adipisci, minima illum
            maxime dolorem corporis, accusantium ullam sit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            mollitia eaque nam reprehenderit natus minus ducimus eveniet
            numquam, adipisci molestiae iure facere libero alias animi. Quas
            minima rerum dolore laboriosam reprehenderit corporis, adipisci
            inventore assumenda, enim saepe nobis earum consectetur nam eveniet
            similique autem dolor aliquid itaque ipsam maxime ex officia ducimus
            consequuntur! Quod dolor iusto placeat voluptatem eos dolore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
            ipsam voluptatibus ipsum assumenda beatae nostrum soluta architecto
            quasi iure.
          </p>
        </div>

       <div className="container-links">
        <div className="container-previous">
          <NavLink to="/donuts">
            <p>← Précédent</p>
          </NavLink>
        </div>
        <div className="container-next">
          <NavLink to="/snoop">
            <p>Suivant →</p>
          </NavLink>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Nala;
