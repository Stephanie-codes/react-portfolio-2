import React, { useState } from "react";
import feather from 'feather-icons';
import axios from "axios";

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName && email && subject && message) {
      axios.post('http://localhost:8080/Contact', {
        fullName,
        email,
        subject,
        message,
      })
        .then(() => {
          alert('Message sent!');
          setFullName('');
          setEmail('');
          setSubject('');
          setMessage('');
        })
        .catch(() => alert('Oops... there is an error!'));
    } else {
      alert('Fill in all the fields');
    }
  };

  return (
    <main id="contact">
      <h1 id="contactme">Contact me!</h1>
      <div className="form-container">
        <form className="contact-form" id="contactform" onSubmit={handleSubmit}>
          <div className="row">
            <div className="boxes">
              <input
                type="text"
                id="fullname"
                name="name"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="boxes">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="boxes">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="boxes">
              <textarea
                id="message"
                cols="30"
                rows="10"
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div>
              <input
                id="submit"
                type="submit"
                className="submit"
                value="Send Message"
              />
            </div>
          </div>
        </form>
      </div>
      <p>
        E: stephanie.burlinchon@gmail.com 
      </p>
      <div className="icons">
        <a href="https://www.linkedin.com/in/stephanieburlinchon/" dangerouslySetInnerHTML={{__html: feather.icons.linkedin.toSvg()}} />
        <a href="https://github.com/Stephanie-codes" dangerouslySetInnerHTML={{__html: feather.icons.github.toSvg()}} />
        <a href="mailto:stephanie.burlinchon@gmail.com" dangerouslySetInnerHTML={{__html: feather.icons.mail.toSvg()}} />
      </div>
    </main>
  );
}