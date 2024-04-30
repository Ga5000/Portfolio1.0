import React from 'react';
import laptop_icon from '../../assets/svgs/laptop_icon.svg';
import './About.css';

const About = () => {
  return (
   <section className='about'>
    <div className="title-about">
            <div className="sphere"></div>
            <h2>Sobre mim</h2>
            <div className="sphere"></div>
            </div>
            <div className="about-container">
              <img src={laptop_icon} alt="" srcset="" />
                <div className="about-text-container">
            <p className='about-text'>Meu nome é Gabriel Lisboa, sou apaixonado por tecnologia e escolhi trilhar o caminho da programação. 
        Busco oportunidades para aprimorar minha abilidades e contribuir para a comunidade de desenvolvimento web.</p>
         <br />
        <p className='about-text'>Atualmente sou estudante de Ciência da Computação e estou focando no desenvolvimento Front-End.</p>
            </div>
            </div>
   </section>
  );
}

export default About