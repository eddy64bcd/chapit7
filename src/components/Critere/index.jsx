import './Critere.css';
import arrow from '../../assets/arrow-back.png';
import { useState } from 'react';

function Critere(props) {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHeader = () => setIsOpen(!isOpen);

  return (
    <div className={`critere ${props.size || ''}`}>
      <div className="container-critere">
        <h2 className="title-critere">{props.name}</h2>
        <img
          onClick={onClickHeader}
          src={arrow}
          alt="Arrow"
          className={'arrow ' + (isOpen ? 'arrow-up' : 'arrow-down')}
        ></img>
      </div>
      <p
        className={`contenu-critere ${isOpen ? 'contenu-critere-actived' : ''}`}
      >
        {props.content}
      </p>
    </div>
  );
}

export default Critere;
