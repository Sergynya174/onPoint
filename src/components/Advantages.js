import React, { useState } from 'react';

import dots from '../images/dots.png';

const content = {
  1: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Faucibus pulvinar elementum integer enim',
    'Faucibus pulvinar elementum integer enim',
  ],
  2: [
    'Mi bibendum neque egestas congue quisque egestas diam',
    'Venenatis lectus magna fringilla urna',
    'Venenatis lectus magna fringilla urna',
  ],
};

const renderAdvList = (pageNum) => content[pageNum]
    .map((el, i) => (
      <div key={i + pageNum * pageNum}>
        <span className="advantage__item">{`0${i + pageNum * pageNum}`}</span>
        <p className="advantage__text">{el}</p>
      </div>
    ));

function Advantages ({ setOpen }) {
  const [currentDots, setCurrentDots] = useState(1);
  const dotsStyle = currentDots === 2 ? { transform: 'scale(-1, 1)' } : null;

  return (
    <div className="advantage">
      <div className="advantage__box">
        <h3 className="advantage__title">преимущества</h3>
        <section className="advantage__list">
          {renderAdvList(currentDots)}
        </section>
        <div className="advantage__button-box">
          <button className="advantage__prev" onClick={() => setCurrentDots(1)}></button>
          <img
            src={dots}
            alt="dots"
            style={dotsStyle}
          />
          <button className="advantage__next" onClick={() => setCurrentDots(2)}></button>
        </div>
        <button className="advantage__close" onClick={() => setOpen('keymessage')}></button>
      </div>
    </div>
  );
};

export default Advantages;