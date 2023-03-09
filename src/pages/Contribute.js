import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Formulaire from '../components/Formulaire';
import Navigation from '../components/Navigation';

const Contribute = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="contribute">
            <Navigation />
            <div className="container">
        <div className="left-part">
          <h2>Contribuer</h2>
           <div className="section1">
            <h3>Adopter</h3>
            <p>Vous avez bien réfléchi et vous être prêt à accueillir un animal au sein de votre famille ? <br />Vous pouvez nous contacter afin d'avoir plus de renseigner sur nos animaux, sur l'adoption ou pour rencontrer nos compagnons.</p>
           </div>

           <div className="section2">
            <h3>Devenir bénévole</h3>
            <p>Vous souhaitez vous engager auprès de notre refuge en tant que bénévole ? <br /> N'hésitez pas à nous écrire afin de connaître les différentes missions qui vous attendent et participer à cette aventure avec nos animaux.</p>
           </div>
           <div className="container-btn">
        <button>Faire un don</button>
        </div>
        </div>

        <div className="right-part">
           <Formulaire />
        </div>
      </div>
            <Footer />
        </div>
    );
};

export default Contribute;