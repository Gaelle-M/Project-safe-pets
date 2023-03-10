import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Formulaire = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_y4q20km",
        "template_5ni7fmu",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          // console.log(result.text);
          form.current.reset();
          formMess.innerHTML = "<p class='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 3500);
        },
        (error) => {
          // console.log(error.text);
          formMess.innerHTML =
            "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 3500);
        }
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <div className="names">
          <label className="nom">Nom *</label>
          <input
            type="text"
            className="name"
            name="name"
            required
            autoComplete="off"
          />
          <label className="pre">Prénom *</label>
          <input
            type="text"
            className="sur"
            name="surname"
            required
            autoComplete="off"
          />
        </div>
        <label>Email *</label>
        <input type="email" name="email" required autoComplete="off" />
        <label>Objet *</label>
        <input type="text" name="objet" required autoComplete="off" />
        <label>Message *</label>
        <textarea name="message" required />
        <input type="submit" value="Envoyer" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default Formulaire;
