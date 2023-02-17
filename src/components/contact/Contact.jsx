import React, { useRef } from "react";
import "./contact.css";
import phone from "../../img/phone.jpg";
import email from "../../img/email.png";
import address from "../../img/address.png";
const Contact = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Tell me about your Project...</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +49 111 000 44 44
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              contact@tok.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="" className="c-icon" />
              Max-Musetermann Street 246, Munich.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What are your needs?</b> Reach me and get information about your
            project and prices.
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows={8} placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
