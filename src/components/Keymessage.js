import React from 'react';

import plate from '../images/plate.png';
import notes from '../images/notes.png';

const Keymessage = ({ setOpen }) => (
  <div className="keymessage">
    <div className="keymessage__box">
      <h3 className="keymessage__title">ключевое сообщение</h3>
      <section className="keymessage__columns">
        <img className="keymessage__plate" src={plate} alt="plate" />
        <p className="keymessage__text">Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies</p>
        <img className="keymessage__notes" src={notes} alt="notes" />
        <p className="keymessage__text">A arcu<br />cursus vitae</p>
      </section>
      <button className="keymessage__more-detailed" onClick={() => setOpen('advantages')}></button>
    </div>
  </div>
);

export default Keymessage;