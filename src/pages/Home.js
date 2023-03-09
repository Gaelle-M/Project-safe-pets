import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <Navigation />
      <div className="header-top">
        <h1>Donnez une nouvelle vie à nos animaux !</h1>
      </div>

      <div className="header-bottom">
        <h2>Trouvez votre compagnon et agrandissez votre famille</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto
          laborum, excepturi quod, praesentium facere assumenda soluta eius
          dolorem fuga laudantium incidunt quibusdam harum sapiente? Error sunt
          culpa magnam soluta, fuga, hic suscipit similique earum voluptatibus
          aspernatur molestiae, recusandae in.
        </p>
      </div>

      <div className="main">
        <h2>Ils viennent d'arriver au refuge !</h2>
        <div className="container-pets">
          <div className="dog1">
            <div className="img-dog1"></div>
            <h3>Perdita</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quae
              quis rem quam dolores minima. Delectus necessitatibus corporis
              blanditiis officiis recusandae quidem, commodi accusamus expedita,
              nisi quos eveniet assumenda. Provident dolor tempora voluptate eos
              ipsa.
            </p>
          </div>

          <div className="dog2">
            <div className="img-dog2"></div>
            <h3>Banzaï</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              fuga rerum aspernatur nisi reiciendis eius iste iure quisquam
              voluptate tenetur, aliquid molestias odio culpa assumenda est modi
              quod unde adipisci corporis.
            </p>
          </div>

          <div className="dog3">
            <div className="img-dog3"></div>
            <h3>Piccolo</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
              illo aut obcaecati sed culpa omnis aspernatur eligendi itaque
              magni nobis sit quasi quia porro numquam ea eaque laboriosam.
              Nulla, dolorem!
            </p>
          </div>

          <div className="cat1">
            <div className="img-cat1"></div>
            <h3>Moka</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis incidunt perferendis aut cum error quos voluptate
              nesciunt quam nulla quidem, repellendus voluptates molestiae atque
              modi corporis architecto possimus.
            </p>
          </div>

          <div className="cat2">
            <div className="img-cat2"></div>
            <h3>Ocean</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              nemo ipsum a, accusantium sint id. Dolorem repellat saepe sunt
              corrupti placeat! Asperiores, aut.
            </p>
          </div>

          <div className="cat3">
            <div className="img-cat3"></div>
            <h3>Rodrigo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
              asperiores! Sapiente illo rerum magni similique laborum nesciunt
              eveniet deserunt. Autem fugiat molestias incidunt culpa veritatis
              saepe debitis expedita voluptate reiciendis.
            </p>
          </div>
        </div>

        <NavLink to="./blog">
          <button>Rencontrez nos chiens et chats</button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
