import React, { useEffect } from "react";
import feather from 'feather-icons';

export default function Contact() {
  useEffect(() => {
    const contactForm = document.querySelector('.contact-form');
    const fullName = document.getElementById('fullname');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formInput = {
        fullName: fullName.value,
        email: email.value,
        subject: subject.value,
        message: message.value
      }

      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formInput)
      })
        .then(response => {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .then(data => {
          console.log(data);
          if (data === 'success') {
            alert('Email sent');
            fullName.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
          } else {
            alert('Something went wrong!');
          }
        })
        .catch(error => {
          console.error('There was an error sending the request:', error);
        });
    });
  }, []); // Empty dependency array to run the effect only once

  return (
    <main id="contact">
      <h1 id="contactme">Contact me!</h1>
      <div class="form-container">
        <form class="contact-form" id="contactform">
            <div class="row">
              <div class="boxes"><input type="text" id="fullname" name="name" placeholder="Full Name" /></div>
              <div class="boxes"><input type="text" id="email" name="email" placeholder="Email" /></div>
              <div class="boxes"><input type="text" id="subject" name="subject" placeholder="Subject" /></div>
              <div class="boxes"><textarea id="message" cols="30" rows="10" name="message" placeholder="Message"></textarea></div>
              <div><input id="submit" type="submit" class="submit" value="Send Message" /></div>
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