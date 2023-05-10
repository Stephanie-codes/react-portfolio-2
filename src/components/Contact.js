import React from "react";
import feather from 'feather-icons';

export default function Contact() {
  return (
    <main id="contact">
      <h1 id="contactme">Contact me!</h1>
      <p>
        E : stephanie.burlinchon@gmail.com 
      </p>
      <div className="icons">
        <a href="https://www.linkedin.com/in/stephanieburlinchon/" dangerouslySetInnerHTML={{__html: feather.icons.linkedin.toSvg()}} />
        <a href="https://github.com/Stephanie-codes" dangerouslySetInnerHTML={{__html: feather.icons.github.toSvg()}} />
        <a href="mailto:stephanie.burlinchon@gmail.com" dangerouslySetInnerHTML={{__html: feather.icons.mail.toSvg()}} />
      </div>
    </main>
  );
}