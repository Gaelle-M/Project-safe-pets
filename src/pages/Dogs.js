import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';


const Dogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
        <div className="dogs">
            <Navigation />
      <h2>Nos chiens</h2>

      <div className="container">
        <div className="dog1">
          <div className="img-dog1"></div>
          <p>20/01/2017</p>
          <h3>Donuts</h3>
          <NavLink to="/donuts">
            <p>À propos de Donuts</p>
          </NavLink>
        </div>

        <div className="dog2">
          <div className="img-dog2"></div>
          <p>21/08/2019</p>
          <h3>Nala</h3>
          <NavLink to="/nala">
            <p>À propos de Nala</p>
          </NavLink>
        </div>

        <div className="dog3">
          <div className="img-dog3"></div>
          <p>09/07/2020</p>
          <h3>Snoop</h3>
          <NavLink to="/snoop">
            <p>À propos de Snoop</p>
          </NavLink>
        </div>

        <div className="dog4">
          <div className="img-dog4"></div>
          <p>25/01/2021</p>
          <h3>Oscar</h3>
          <NavLink to="/oscar">
            <p>À propos de Oscar</p>
          </NavLink>
        </div>

        <div className="dog5">
          <div className="img-dog5"></div>
          <p>11/11/2019</p>
          <h3>Loki</h3>
          <NavLink to="/loki">
            <p>À propos de Loki</p>
          </NavLink>
        </div>

        <div className="dog6">
          <div className="img-dog6"></div>
          <p>28/02/2021</p>
          <h3>Pearl</h3>
          <NavLink to="/pearl">
            <p>À propos de Pearl</p>
          </NavLink>
        </div>
      </div>
      <div className="container-btn">
        <NavLink to="/cats">
          <button>Voir nos chats</button>
        </NavLink>
      </div>
      <Footer />
        </div>
    );
};

export default Dogs;