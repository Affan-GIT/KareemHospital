import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [windowWidth, setWindowWidth] = useState(null);
  const hospitalText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reiciendis in natus voluptate nemo libero rem odio quam, iste, modi non, quae similique et quod beatae esse ullam porro harum eligendi sit. Totam repellat quas, architecto et tenetur qui optio obcaecati ab ipsa illum ipsam recusandae rem ut saepe sunt eveniet? Iure rerum nihil rem excepturi consequatur! Facilis, quisquam atque nobis labore harum voluptatum quasi incidunt corrupti eos non eveniet tenetur vel! Reiciendis quasi ipsum nemo ad ipsa accusamus dolores, id voluptatum tempora eum esse eaque odit, harum optio a corporis. Velit fugit voluptates id quis dolorum maxime minima cumque!';
  const doctor1Text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reiciendis in natus voluptate nemo libero rem odio quam, iste, modi non, quae similique et quod beatae esse ullam porro harum eligendi sit. Totam repellat quas, architecto et tenetur qui optio obcaecati ab ipsa illum ipsam recusandae rem ut saepe sunt eveniet? Iure rerum nihil rem excepturi consequatur! Facilis, quisquam atque nobis labore harum voluptatum quasi incidunt corrupti eos non eveniet tenetur vel! Reiciendis quasi ipsum nemo ad ipsa accusamus dolores, id voluptatum tempora eum esse eaque odit, harum optio a corporis. Velit fugit voluptates id quis dolorum maxime minima cumque!';
  const doctor2Text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reiciendis in natus voluptate nemo libero rem odio quam, iste, modi non, quae similique et quod beatae esse ullam porro harum eligendi sit. Totam repellat quas, architecto et tenetur qui optio obcaecati ab ipsa illum ipsam recusandae rem ut saepe sunt eveniet? Iure rerum nihil rem excepturi consequatur! Facilis, quisquam atque nobis labore harum voluptatum quasi incidunt corrupti eos non eveniet tenetur vel! Reiciendis quasi ipsum nemo ad ipsa accusamus dolores, id voluptatum tempora eum esse eaque odit, harum optio a corporis. Velit fugit voluptates id quis dolorum maxime minima cumque!';

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, []);
  const shortenText = (text, length) => {
    return text.slice(0, length) + '...';
  };
  return (
    <div className='About'>
      <div className='about__hospital'>
        <div className='about__image'>
          <img src={require('../../Hospital.jpg')} alt='' />
        </div>
        <div className='about__info'>
          <h2>Kareem Hospital</h2>
          <p>
            {windowWidth > 1000 ? hospitalText : shortenText(hospitalText, 300)}
          </p>
        </div>
      </div>
      <div className='about__doctors' id='about'>
        <div className='about__slider'>
          <div className='doctor'>
            <div className='doctor__image'>
              <img
                src='https://ima-india.org/branch/cms/images/7757HUK.jpg'
                alt=''
              />
            </div>
            <h2>Dr Hamid Kareem</h2>
            <div className='doctor__info'>
              <p>
                {windowWidth > 1000
                  ? doctor1Text
                  : shortenText(doctor1Text, 200)}
              </p>
            </div>
          </div>
          <div className='doctor'>
            <div className='doctor__image'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-45gYPtG2C5jtj3zGW-T5-GsTlCl4m4jhVAlP2iA0SrFfRZg1S1hm-Iv6E2XRvNPAVuo&usqp=CAU'
                alt=''
              />
              <h2>Dr Nazneen Hamid</h2>
            </div>
            <div className='doctor__info'>
              <p>
                {windowWidth > 1000
                  ? doctor2Text
                  : shortenText(doctor2Text, 200)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
