import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services">
        <Navigation />
      <h2>Nos services</h2>
      <div className="container">

        <div className="section1-save">
          <h3>Sauver</h3>
          <div className="img-save"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            impedit! Ratione laborum ipsa voluptas asperiores nobis dolores
            impedit nisi minima distinctio consequatur quis voluptates quaerat
            delectus, deserunt temporibus perferendis, deleniti inventore
            assumenda? Eaque, inventore voluptate odio eius error incidunt
            cumque sint doloremque sunt voluptatum enim asperiores nobis animi
            maiores, amet non ab nulla. Id animi amet alias ut provident labore
            veritatis assumenda. Rerum, enim ducimus. Provident maiores
            repudiandae quaerat nam neque sint ipsa repellat, dolores earum
            libero inventore excepturi exercitationem.
          </p>
        </div>

        <div className="section2-protect">
          <h3>Protéger</h3>
          <div className="img-protect"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum possimus dicta dolorum suscipit odit eaque obcaecati in, commodi voluptate, accusamus ab repellendus libero eveniet nihil vitae voluptatem. Accusantium, consequatur iste? Reiciendis sit sapiente culpa alias autem cumque consectetur commodi nam illum ipsa numquam, molestias voluptas, asperiores officia nisi modi voluptatem. Qui accusantium minus dolorum quidem dolores, molestias commodi delectus ex hic, voluptas vel ad id maxime unde animi totam! Maxime velit dolorum error magnam numquam. Repellat at dignissimos error.</p>
        </div>

        <div className="section3-adopt">
          <h3>Adopter</h3>
          <div className="img-adopt"></div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, incidunt illo assumenda, itaque ducimus, magnam unde quasi suscipit earum consequuntur in vel dignissimos eius adipisci natus soluta sapiente a dolorem possimus reiciendis pariatur amet excepturi repellat. Atque, facilis ullam! Tempore voluptates nihil cupiditate molestiae magni consequuntur porro at esse cumque perspiciatis, animi voluptatum dolorum molestias ipsum, soluta ad asperiores laborum maxime voluptatem? Eos ad ratione itaque perferendis, ipsa ex quibusdam eligendi aliquid culpa, optio odio nemo magnam eum sit at!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
