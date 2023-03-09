import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Charlie = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="charlie">
            <Navigation />
            <div className="container">
            <h2>Charlie</h2>
            <div className="cat1">
            <div className="img-cat1"></div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam ipsa id ipsam nobis earum, aperiam molestias modi quisquam unde debitis nesciunt quo fugit? Sed dolores pariatur debitis ex temporibus!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, repellendus porro nesciunt incidunt debitis nisi voluptatem. Distinctio quisquam minima fugit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cumque exercitationem voluptate officiis hic officia doloremque, dolor blanditiis itaque praesentium laudantium non, optio id asperiores facilis delectus ullam soluta doloribus dolorum. Rerum mollitia est repudiandae.</p>
            </div>
        
            <div className="container-link">
                <div className="container-next">
                <NavLink to="/lili">
                <p>Suivant →</p>
                </NavLink>
                </div>
            </div>
            </div>
           <Footer /> 
        </div>
    );
};

export default Charlie;