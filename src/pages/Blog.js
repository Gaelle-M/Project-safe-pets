import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";


const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="blog">
      <Navigation />
      <h2>Nos animaux</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, veniam
        assumenda commodi a odio beatae? Sit libero quasi distinctio rem cum quo
        est quod illum non itaque numquam, laudantium, quisquam eaque soluta?
        Beatae neque commodi voluptate non ullam sint voluptates error iure
        voluptatum ea quis suscipit, a fugit dignissimos. Ab asperiores ipsum,
        consequatur veritatis sunt modi vitae! Rerum, eos soluta.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci labore
        autem iste quos molestiae officiis. Quo eius totam, soluta molestias
        adipisci omnis alias laborum illum atque, animi, accusantium
        reprehenderit quos unde illo ipsa in corrupti aut voluptatum temporibus
        exercitationem dolor natus. Nulla sed quasi doloremque explicabo
        consequuntur quae a reiciendis, exercitationem provident, saepe nihil?
        Quam sed ratione accusamus omnis iusto, ab a quisquam eligendi quos
        debitis optio exercitationem necessitatibus officiis quas qui
        repudiandae tenetur voluptas fugiat. Vitae voluptate dolorum optio.
        Quidem excepturi ratione officia optio dicta provident eius voluptates
        obcaecati? Ratione laborum quae debitis impedit sint temporibus corporis
        quisquam necessitatibus.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        maiores asperiores magnam voluptates fugit, quis nesciunt perferendis
        quos sint dolore id ipsam assumenda repellendus omnis neque odit nam
        incidunt voluptate! Sed quaerat soluta inventore. Accusamus quibusdam
        accusantium nesciunt error culpa eum! Fuga eligendi rerum nulla.
        Corporis ab est eaque iure consequatur explicabo quae illo nemo vero.
        Dolores omnis veniam dolor.
      </p>

      <div className="container">
        <div className="section1">
          <div className="img-cat"></div>
          <NavLink to="/cats">
          <h3>Voir tous nos chats</h3>
          </NavLink>
        </div>

        <div className="section2">
          <div className="img-dog"></div>
          <NavLink to="/dogs">
          <h3>Voir tous nos chiens</h3>
          </NavLink>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
        natus, nemo maxime ullam obcaecati reprehenderit dolorum mollitia
        nostrum asperiores earum amet cumque sint libero dolore! Voluptatibus,
        a. Atque ex deserunt rerum provident similique voluptas? Fugit libero
        dolorum quod obcaecati doloremque?
      </p>
      <Footer />
    </div>
  );
};

export default Blog;
