import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Marley = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="marley">
      <Navigation />
      <div className="container">
        <h2>Marley</h2>
        <div className="cat3">
          <div className="img-cat3"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur velit harum hic aut eaque ducimus distinctio, numquam
            expedita laboriosam ad, quae consequuntur minima? Cum enim deserunt
            error optio, dolor minus asperiores illo suscipit corporis alias
            delectus hic aut sed ipsam neque totam, eos eligendi exercitationem
            laudantium incidunt ut! Officia quae modi nostrum blanditiis quidem
            aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa unde
            aliquid quia pariatur accusamus, corrupti expedita libero iste,
            rerum et hic temporibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            corrupti inventore ea, temporibus nesciunt enim doloribus, natus
            excepturi culpa in veniam. Nisi in quod praesentium, quis dolores
            facilis aliquid at, vel libero officiis dolore doloremque
            exercitationem quos quidem illum nihil excepturi.
          </p>
        </div>

        <div className="container-links">
          <div className="container-previous">
            <NavLink to="/lili">
              <p>← Précédent</p>
            </NavLink>
          </div>
          <div className="container-next">
            <NavLink to="/grisou">
              <p>Suivant →</p>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Marley;
