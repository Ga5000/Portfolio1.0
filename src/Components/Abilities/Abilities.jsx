import React from 'react'
import './Abilities.css';
import html from '../../assets/techs/html_icon.svg';
import css from '../../assets/techs/css_icon.svg';
import js from '../../assets/techs/js_icon.svg';
import react from '../../assets/techs/react_icon.svg';
import api_icon from '../../assets/techs/api_icon.svg';
import git_icon from '../../assets/techs/git_icon.svg';
import typescript_icon from '../../assets/techs/typescript.svg';
import java_icon from '../../assets/techs/java_icon.svg';
import tailwind_icon from '../../assets/techs/tailwind_icon.svg';

const Abilities = () => {
  return (
   <section className='abilities'>
        <h1>Habilidades</h1>
        <div className="abilites-container">
             <div className="ability-card">
               <p>HTML5</p>
                <img src={html} alt="" />
             </div>
             <div className="ability-card">
               <p>CSS3</p>
                <img src={css} alt="" />
             </div>
             <div className="ability-card">
                <p>JavaScript</p>
                <img src={js} alt="" />
             </div>
             <div className="ability-card">
              <p>React.js</p>
                <img src={react} alt="" />
             </div>
             <div className="ability-card">
              <p>API</p>
                <img src={api_icon} alt="" />
             </div>
             <div className="ability-card">
              <p>GIT</p>
                <img src={git_icon} alt="" />
             </div>
              <div className="ability-card">
                <p>Typescript</p>
                <img src={typescript_icon} alt="" />
              </div>
              <div className="ability-card">
                <p>Tailwind</p>
                <img src={tailwind_icon} alt="" />
              </div>
              <div className="ability-card">
                <p>Java</p>
                <img src={java_icon} alt="" />
              </div>
        </div>
   </section>
  )
}

export default Abilities