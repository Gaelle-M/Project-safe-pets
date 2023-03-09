import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Lili = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lili">
      <Navigation />
      <div className="container">
        <h2>Lili</h2>
        <div className="cat2">
          <div className="img-cat2"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            ullam ea. Cumque rerum laborum, maiores ea culpa a, mollitia
            doloremque blanditiis iure enim possimus repellat sequi. Vero maxime
            nostrum ullam. Amet nisi illo explicabo sequi quia voluptate
            temporibus corrupti nemo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ab
            quidem deleniti, et est deserunt dignissimos tempore asperiores
            soluta? Animi optio laboriosam, doloribus nobis quod, atque earum,
            veritatis consequuntur explicabo doloremque sapiente cumque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde
            aliquid amet quis assumenda aspernatur earum totam aperiam nihil,
            ratione excepturi in vel praesentium accusantium ipsa laborum
            voluptatem numquam neque minus dolorum eius libero! Vero nostrum,
            magni expedita dolore esse aliquid omnis porro, necessitatibus sint
            voluptatibus nesciunt temporibus quasi ipsum beatae, nobis
            distinctio nisi reiciendis? Unde et ea rerum.
          </p>
        </div>

        <div className="container-links">
          <div className="container-previous">
            <NavLink to="/charlie">
              <p>← Précédent</p>
            </NavLink>
          </div>
          <div className="container-next">
            <NavLink to="/marley">
              <p>Suivant →</p>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Lili;
