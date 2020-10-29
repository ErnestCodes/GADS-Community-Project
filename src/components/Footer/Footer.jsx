import React, { useState } from 'react'
import "../Footer/Footer.css";
import { db } from "../Firebase/firebase"

function Footer({ footerStyle }) {
  const [emailAddress, setEmailAdderess] = useState("");
  const [messages, setMessages] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoader(true);
    
    db.collection("contact").add({
      email: emailAddress,
      messages: messages,
    }).then(() => {
      alert("Message has been submitted successfully");
      setLoader(false);
    }).catch((error) => {
      alert(error.message);
      setLoader(false);
    });

    setEmailAdderess("");
    setMessages(""); 
  }

 return (
      <footer className={footerStyle}>
        <div className="main-content">
          <div className="left box">
            <h2>About us</h2>
            <div className="content">
              <p>We are an e-commerce solution that brings the physical market online and make shopping easy. Embrasing the use of information technology.</p>
              <div className="social">
                <a href="https://web.facebook.com/kvngnnaemeka.ernest/"><span className="fab fa-facebook-f"></span></a>
                <a href="https://twitter.com/emeksthecreator"><span className="fab fa-twitter"></span></a>
                <a href="https://www.instagram.com/emeksthecreator/"><span className="fab fa-instagram"></span></a>
              </div>
            </div>
          </div>
          <div className="center box">
            <h2>Address</h2>
            <div className="content">
              <div className="place">
                <span className="fas fa-map-marker-alt"></span>
                <span className="text">Ajao Estate Lagos.</span>
              </div>
              <div className="phone">
                <span className="fas fa-phone-alt"></span>
                <span className="text">+234 8162 6358 71</span>
              </div>
              <div className="email">
                <span className="fas fa-envelope"></span>
                <span className="text">pdigitalsmail@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="right box">
            <h2>Contact us</h2>
            <div className="content">
              <form action="#" onSubmit={handleSubmit}>
                <div className="email">
                  <div className="text">Email *</div>
                  <input type="text" required  value={emailAddress} onChange={(e) => setEmailAdderess(e.target.value)}/>
                </div>
                 <div className="msg">
                   <div className="text">Message *</div>
                   <textarea cols="25" rows="2" required value={messages} onChange={(e) => setMessages(e.target.value)}></textarea>
                 </div>
                 <div className="btn">
                   <button type="submit" style={{background: loader ? "#ccc" : "#cd9042"}}>Send</button>
                 </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom">
          <center>
            <span className="credit">Created by <a href="https://www.pristinedigitals.com">emeksthecreator</a> | <span className="far fa-copyright"></span><span> 2020 All rights reserved.</span></span>
          </center>
        </div>
      </footer>
    
    );
}

export default Footer
