import * as React from 'react';
import './Header-style.css';
import imagelogo from '../../assets/images/golend-logo.svg';
import phone from '../../assets/images/phone.svg';
import { Link } from 'react-router-dom';
import { LABELS } from '../../constants/AppConstants';

/**
 *  Render Header component
 */

const Header = () => {
  return (
    <header className='headerComponent'>
      <ul className='headerComponent__container'>
        <li>
          <Link to='/years'>
            <img src={imagelogo} width='150' height='100' alt='logo'></img>
          </Link>
        </li>
        <li className='headerComponent__right-container'>
          <a href='/#'>
            <img src={phone} alt='phone'></img>
            <span className='headerComponent__right-text'>{LABELS.PHONE}</span>
          </a>
        </li>
        <li className='handburger'>
          <div></div>
          <div></div>
          <div></div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
