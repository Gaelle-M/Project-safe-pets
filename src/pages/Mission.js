import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Mission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mission">
      <Navigation />
      <div className="container">
        <div className="left-part">
          <h2>Notre mission</h2>
          <div className="img-bg"></div>
        </div>

        <div className="right-part">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            officiis aut, explicabo fugiat impedit voluptatibus sunt quibusdam
            sint ipsam molestias! Numquam dignissimos esse saepe eaque.
            Architecto illum vero reiciendis voluptatem exercitationem at nihil
            nesciunt non rem voluptates? Optio possimus, ullam odio modi quo
            repudiandae repellendus quaerat culpa dolorum voluptas iusto facere
            eius architecto illo tempora.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id culpa
            cum voluptatem ut error, officiis quisquam nam sapiente eum aliquam.
            Suscipit ipsam pariatur consequuntur provident. Nihil, ad? Facere
            suscipit alias illo eum eos ex ea. Recusandae, aut totam? Rem fuga
            amet vero natus sapiente laboriosam beatae eveniet illum quibusdam
            assumenda eius, fugiat dignissimos cumque sit ea velit, repellat
            ullam temporibus tenetur. Officia consequatur cumque alias nobis
            asperiores consectetur voluptatem dolorum perferendis adipisci animi
            nostrum iusto odit voluptate provident ipsum sed quibusdam enim
            modi, minima libero commodi omnis, ex distinctio? Quas.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolor voluptatem ut enim minima tempora dolorum? Magni, veritatis ad? Illo molestiae earum accusamus sunt voluptas autem nulla, aliquid, labore iste soluta esse itaque sint. Facere! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ut? Temporibus dolore fugit consectetur nobis eius excepturi iste quasi tenetur.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mission;
