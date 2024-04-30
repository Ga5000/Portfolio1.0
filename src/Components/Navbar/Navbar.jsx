import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import menu_icon from '../../assets/svgs/menu_icon.svg';
import home_icon from '../../assets/svgs/home_icon.svg';
import book_icon from '../../assets/svgs/book_icon.svg';
import experience_icon from '../../assets/svgs/experience_icon.svg';
import education_icon from '../../assets/svgs/education_icon.svg';
import projects_icon from '../../assets/svgs/projects_icon.svg';
import abilities_icon from '../../assets/svgs/abilities_icon.svg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth <= 890);
    const [activeLink, setActiveLink] = useState('home');

    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };
  
    useEffect(() => {
      const handleResize = () => {
        setIsMenuOpen(window.innerWidth <= 890);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const handleSetActive = (link) => {
        setActiveLink(link);
    };

    return (
        <>
            <header>
                <div className="center-header">
                    <div className="name">
                        <h1>
                            <span>GL</span>.Dev
                        </h1>
                    </div>

                    <nav className="navbar">
                        <img className='menu-icon' src={menu_icon} alt="" onClick={toggleMenu} />
                        <ul>
                            <li>
                                <Link 
                                    className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} 
                                    to="home" 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    activeClass="active"
                                    onSetActive={() => handleSetActive('home')}
                                >
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} 
                                    to="about" 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    activeClass="active"
                                    onSetActive={() => handleSetActive('about')}
                                >
                                    Sobre mim
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    className={`nav-link ${activeLink === 'experiences' ? 'active' : ''}`} 
                                    to="experiences" 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    activeClass="active"
                                    onSetActive={() => handleSetActive('experiences')}
                                >
                                    Experiências
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    className={`nav-link ${activeLink === 'education' ? 'active' : ''}`} 
                                    to="education" 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    activeClass="active"
                                    onSetActive={() => handleSetActive('education')}
                                >
                                    Educação
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    className={`nav-link ${activeLink === 'abilities' ? 'active' : ''}`} 
                                    to="abilities" 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    activeClass="active"
                                    onSetActive={() => handleSetActive('abilities')}
                                >
                                    Habilidades
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} 
                                    to="projects" 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    activeClass="active"
                                    onSetActive={() => handleSetActive('projects')}
                                >
                                    Projetos
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className={`sidebar-container ${isMenuOpen ? "" : "closing"}`} onClick={toggleMenu}>
                <nav className="sidebar">
                    <ul>
                        <li><Link to="home" smooth={true} duration={500}><img src={home_icon} alt="" /></Link></li>
                        <li><Link to="about" smooth={true} duration={500}><img src={book_icon} alt="" /></Link></li>
                        <li><Link to="experiences" smooth={true} duration={500}><img src={experience_icon} alt="" /></Link></li>
                        <li><Link to="education" smooth={true} duration={500}><img src={education_icon} alt="" /></Link></li>
                        <li><Link to="projects" smooth={true} duration={500}><img src={projects_icon} alt="" /></Link></li>
                        <li><Link to="abilities" smooth={true} duration={500}><img src={abilities_icon} alt="" /></Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
