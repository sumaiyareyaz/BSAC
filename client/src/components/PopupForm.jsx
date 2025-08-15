import React from "react";
import "./App.css";

function PopupForm({ closeForm }) {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={closeForm}>×</button>
        <h2>MEGHNAD SAHA INSTITUTE OF TECHNOLOGY</h2>
        <p>Start Your Journey Toward a Brighter Future</p>

        <form className="popup-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Enter your Email" required />
          <input type="text" placeholder="Enter your Course/Subject" required />
          <input type="text" placeholder="Enter your Course type" required />
          <input type="tel" placeholder="Phone Number" required />
          <div className="captcha-box">
            <span className="captcha">a6tk</span>
            <input type="text" placeholder="Enter CAPTCHA" required />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default PopupForm;