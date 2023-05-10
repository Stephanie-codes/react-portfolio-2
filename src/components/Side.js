import React from 'react';
import feather from 'feather-icons';

export default function Side() {
  return (
    <div className="side">
      <a href="https://www.linkedin.com/in/stephanieburlinchon/" dangerouslySetInnerHTML={{__html: feather.icons.linkedin.toSvg()}} />
      <a href="https://github.com/Stephanie-codes" dangerouslySetInnerHTML={{__html: feather.icons.github.toSvg()}} />
      <a href="mailto:stephanie.burlinchon@gmail.com" dangerouslySetInnerHTML={{__html: feather.icons.mail.toSvg()}} />
    </div>
  );
}
