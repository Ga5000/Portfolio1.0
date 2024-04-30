import React from 'react';
import phone_icon from '../../assets/svgs/phone_icon.svg';
import email_icon from '../../assets/svgs/email_icon.svg';
import './Contact.css';

const Contact = () => {
  return (
    <footer className="contact">
      <div className="contact-details">
        <div className="contact-imgs">
          <div className="img-container">
            <img src={email_icon} alt="" />
            <p>gbr.lisboa@gmail.com</p>
          </div>
          <div className="img-container">
            <img src={phone_icon} alt="" />
            <p>{"(11)99447-0237"}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
