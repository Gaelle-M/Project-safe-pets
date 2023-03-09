import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Loki = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="loki">
      <Navigation />
      <div className="container">
        <h2>Loki</h2>
        <div className="dog5">
          <div className="img-dog5"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo, quisquam fugiat minus rerum mollitia molestiae excepturi ab praesentium ratione in molestias vero, saepe eos corporis animi quaerat, cumque exercitationem temporibus? Eius molestiae laudantium magni!
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus a enim cumque maxime repellat porro vel ipsam minima! Aperiam sapiente itaque doloremque veniam sequi repudiandae delectus quaerat molestias totam nisi, numquam, quisquam deserunt. Placeat nemo, labore accusamus magni neque similique, sunt laborum beatae aliquam dicta, in iusto facere illo dignissimos.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum nesciunt in, laboriosam ex nisi reprehenderit cupiditate reiciendis!
          </p>
        </div>

       <div className="container-links">
        <div className="container-previous">
          <NavLink to="/oscar">
            <p>← Précédent</p>
          </NavLink>
        </div>
        <div className="container-next">
          <NavLink to="/pearl">
            <p>Suivant →</p>
          </NavLink>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Loki;
