import React from "react";

function Contact() {
  return (
    <div>
      <div className="contact-wrap">
        <div className="contact-image">
          <img src={require("../assess/img/thread 1.jpg")} />
        </div>
        <div className="grid">
          <div className="form-wrapper">
            <div className="form-div">
              <form className="form">
                <div className="input-wrap">
                  <input
                    type="text"
                    name="name"
                    className="feedback-input"
                    placeholder="Name *"
                    maxlength="33"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    className="feedback-input"
                    placeholder="Phone number *"
                    maxlength="33"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  className="feedback-input"
                  placeholder="Email *"
                  maxlength="99"
                  required
                />
                <textarea
                  name="message"
                  className="feedback-input message"
                  placeholder="Message *"
                  maxlength="999"
                  required
                ></textarea>
                <div className="checkbox-wrap">
                  <input
                    id="send-checkbox"
                    type="checkbox"
                    name="checkbox"
                    className="checkbox"
                    required
                  />
                  <label className="captcha" for="send-checkbox">
                    I'm a human *
                  </label>
                </div>
                <button type="submit" className="send-button">
                  Let's go!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
