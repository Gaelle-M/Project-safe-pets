import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="team">
      <Navigation />
      <h2>Notre équipe</h2>
        <div className="container">
            <div className="member1">
                <div className="img-1"></div>
                <h4>Natalie</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, qui. Ratione, in doloremque cupiditate architecto expedita dolor ipsam quis molestiae quos! Voluptate repudiandae asperiores eius ducimus exercitationem itaque aspernatur tenetur.</p>
            </div>

            <div className="member2">
                <div className="img-2"></div>
                <h4>Benoit</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora earum blanditiis officiis at, repudiandae voluptate perferendis aliquid eveniet error cum facilis. Dolor omnis labore itaque accusantium est fuga earumi.</p>
            </div>

            <div className="member3">
                <div className="img-3"></div>
                <h4>Alice</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium soluta alias deleniti possimus distinctio architecto ipsa dolore voluptates voluptate, quasi enim debitis minus fugiat magni rerum mollitia ullam sed animi.</p>
            </div>

            <div className="member4">
                <div className="img-4"></div>
                <h4>Alex</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta velit commodi vel similique nihil quasi quae nostrum facilis consectetur magni unde fuga ut, amet beatae porro qui suscipit dolorum dignissimos.</p>
            </div>

            <div className="member5">
                <div className="img-5"></div>
                <h4>Audrey</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, molestias dolores sit temporibus pariatur odit officiis minima, eius eveniet commodi beatae quasi autem id, tempore aut. Ad obcaecati quod autem.</p>
            </div>
        </div>
      <Footer />
    </div>
  );
};

export default Team;
