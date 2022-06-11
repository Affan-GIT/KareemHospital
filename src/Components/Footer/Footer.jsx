import React from 'react';
import './Footer.css';
import { BsFacebook, BsLinkedin, BsYoutube, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='Footer'>
      <ul className='footer__info'>
        <li>Kareem Hospital</li>
        <div className='socials'>
          <a href='https://www.facebook.com/hamid.kareem.731'>
            <li className='footer__social' style={{ color: '#3B5998' }}>
              <BsFacebook />
            </li>
          </a>
          <a href='https://www.linkedin.com/in/dr-hamid-kareem-ms-fmas-fiages-fbms-123a994b/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdom'>
            <li className='footer__social' style={{ color: '#0072b1' }}>
              <BsLinkedin />
            </li>
          </a>
          <a href='https://www.youtube.com/watch?v=gGjKlhdCg0s'>
            <li className='footer__social' style={{ color: '#FF0000' }}>
              <BsYoutube />
            </li>
          </a>
          <a href='https://www.youtube.com/watch?v=gGjKlhdCg0s'>
            <li className='footer__social' style={{ color: '#F6BA00' }}>
              <BsInstagram />
            </li>
          </a>
        </div>
        <li>
          <div className='footer__contact'>
            <h4>Contact Us: </h4>
            <ul>
              <li>+917020026852</li>
              <li>+919518574565</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
