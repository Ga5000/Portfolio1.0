import React from 'react';
import { Link, Element } from 'react-scroll';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section/Section';
import About from './Components/AboutMe/About';
import Experiences from './Components/Experiences/Expiriences';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Abilities from './Components/Abilities/Abilities';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Element name='home'>
      <Section />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="experiences">
        <Experiences />
      </Element>
      <Element name="education">
        <Education />
      </Element>
      <Element name="abilities">
        <Abilities />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </>
  )
}

export default App;
