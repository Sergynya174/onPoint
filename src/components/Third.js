import React, { useState } from 'react';
import Advantages from './Advantages';
import Keymessage from './Keymessage';

import bottle from '../images/bottle.png';
import bubble1 from '../images/1.png';
import bubble2 from '../images/2.png';
import bubble4 from '../images/4.png';
import bubble5 from '../images/5.png';
import bubble6 from '../images/6.png';
import bubble7 from '../images/7.png';
import bubble8 from '../images/8.png';

const Third = () => {
  const [open, setOpen] = useState('keymessage');

  return (
    <div className="slide">
      <h2 className="brand-name">brand<strong>xy</strong></h2>
      {
        open === 'keymessage'
        ? <Keymessage setOpen={setOpen} />
        : <Advantages setOpen={setOpen} />
      }

      <img src={bottle} className="bottle" alt="spray bottle" />
      <img src={bubble1} className="bubble1" alt="bubble" />
      <img src={bubble2} className="bubble2" alt="bubble" />
      <img src={bubble4} className="bubble4" alt="bubble" />
      <img src={bubble5} className="bubble5" alt="bubble" />
      <img src={bubble6} className="bubble6" alt="bubble" />
      <img src={bubble7} className="bubble7" alt="bubble" />
      <img src={bubble8} className="bubble8" alt="bubble" />

    </div>
  );
};

export default Third;