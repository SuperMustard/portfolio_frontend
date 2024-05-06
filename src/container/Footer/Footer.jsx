import React, { useState } from "react";
import { images } from "../../constants";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const { username, email, message } = formData;

  const [nameNoValid, setNameNoValid] = useState(false);
  const [emailNoValid, setEmailNoValid] = useState(false);
  const [messageNoValid, setMessageNoValid] = useState(false);

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log("handle input");
    setNameNoValid(false);
    setEmailNoValid(false);
    setMessageNoValid(false);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    let canContinue = true;

    if (!formData.username) {
      setNameNoValid(true);
      setError("Field can't empty!");
      canContinue = false;
    }

    if (!formData.email) {
      setEmailNoValid(true);
      setEmailError("Field can't empty!");
      canContinue = false;
    }

    if (!formData.message) {
      setMessageNoValid(true);
      setError("Field can't empty!");
      canContinue = false;
    }

    if (!canContinue) {
      return;
    }

    if (formData.email && !isEmailValid(formData.email)) {
      setEmailNoValid(true);
      setEmailError("Email is not valid");
      return;
    }

    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2 className="head-text" style={{ color: "white" }}>
        Contact
      </h2>
      <div
        style={{
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          zIndex: "-1",
        }}
      >
        <div className="app__footer-cards">
          <div className="app__footer-card ">
            <img src={images.email} alt="email" />
            <a href="mailto:hanxin1101@outlook.com" className="p-text">
              hanxin1101@outlook.com
            </a>
          </div>
        </div>
        {!isFormSubmitted ? (
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="username"
                value={username}
                onChange={handleChangeInput}
              />
            </div>
            {nameNoValid && <p className="app__error">{error}</p>}
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            {emailNoValid && <p className="app__error">{emailError}</p>}
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            {messageNoValid && <p className="app__error">{error}</p>}
            <button type="button" className="p-text" onClick={handleSubmit}>
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
