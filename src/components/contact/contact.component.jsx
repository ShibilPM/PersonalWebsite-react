import React, { useState, useEffect } from "react";
import styled from "styled-components";

//firebase
import { db } from "../../firebase/firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <ContactStyle>
      <div className="heading">
        <h2>Contact Me</h2>
      </div>
      <div className="contactform">
        <div className="social">
          <span>
            <i className="fas fa-envelope"></i> shibilpm3232@gmail.com
          </span>
          <span>
            <i class="fas fa-mobile-alt"></i> +91-8592064262
          </span>
        </div>
        <div className="formstyle">
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <br />
              <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Email</label>
              <br />
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Message</label>
              <br />
              <textarea
                cols="42.5"
                rows="8"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                style={{ background: loader ? "#ccc" : "#62b3e2" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </ContactStyle>
  );
};

export default Contact;

const ContactStyle = styled.div`
  .heading {
    text-align: center;
  }

  .contactform {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 300px 800px;
    grid-gap: 5px;
    justify-content: center;
    padding-left: 40%;
    padding-right: auto;
  }

  .social {
    display: grid;
    grid-template-rows: 30px 30px;
    grid-gap: 5px;
    padding-top: 8%;
  }

  .form {
    display: grid;
    grid-template-rows: 50px 50px 150px 50px;
    grid-gap: 15px;
  }

  button {
    border-width: 0px;
    border-style: none;
    border-color: none;
    border-image: none;
    border-radius: 3px;
    height: 25px;
    width: 80px;
  }
`;
