import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Oscar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="oscar">
      <Navigation />
      <div className="container">
        <h2>Oscar</h2>
        <div className="dog4">
          <div className="img-dog4"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur aperiam ipsam veritatis hic obcaecati voluptatibus soluta est fugit dolores pariatur sapiente, iusto, quas temporibus saepe aliquam.
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, molestias ullam dicta quibusdam quis eum! Soluta veniam aliquid aliquam! Beatae, veniam consectetur quas vitae fuga reiciendis, culpa rem, ipsa doloribus numquam recusandae hic! Minima sit expedita dolore voluptatum deleniti consequatur hic facilis sequi unde distinctio.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consequatur ut architecto placeat harum cupiditate modi odit veritatis. Totam autem quidem distinctio unde officia est sint maxime quas error voluptate.
          </p>
        </div>

       <div className="container-links">
        <div className="container-previous">
          <NavLink to="/snoop">
            <p>← Précédent</p>
          </NavLink>
        </div>
        <div className="container-next">
          <NavLink to="/loki">
            <p>Suivant →</p>
          </NavLink>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Oscar;
