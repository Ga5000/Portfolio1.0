import React, { useState } from 'react';
import portfolioImg from '../../assets/projectsImgs/portfolioImg.png';
import youtubeImg from '../../assets/projectsImgs/youtube.png';
import pokedexImg from '../../assets/projectsImgs/pokedex.png';
import undefinedImg from '../../assets/projectsImgs/undefined.png';
import react_icon from '../../assets/techs/react_icon.svg';
import css_icon from '../../assets/techs/css_icon.svg';
import typescript_icon from '../../assets/techs/typescript.svg';
import api_icon from '../../assets/techs/api_icon.svg';
import github_icon from '../../assets/projectsSvgs/github_icon.svg';
import website_icon from '../../assets/projectsSvgs/website_icon.svg';
import './Projects.css';

const Projects = () => {
    const [flipped, setFlipped] = useState({});

    const flip = (index) => {
        setFlipped((prevFlipped) => ({
            ...prevFlipped,
            [index]: !prevFlipped[index]
        }));
    };


    return (
        <section className="projects">
            <h1>Projetos</h1>
            <div className="project-container">
                <div className={`project ${flipped[0] ? "flip" : "unflip"}`}>
                    <img className='project-img' src={portfolioImg} alt="" />
                    <div className="techs">
                        <h3>Portfolio 1.0</h3>
                        <div className="used-techs">
                            <img src={react_icon} alt="" />
                            <img src={css_icon} alt="" />
                        </div>
                    </div>

                    <div className="desc">
                           <h4>Portfolio pessoal</h4>
                           <h6>Características :</h6>
                           <ul>
                                <li>Responsivo</li>
                                <li>Animado</li>
                                <li>Links para os projetos</li>
                                <li>Link para o meu github e linkedIn</li>
                                </ul>
                              <div className="links">
                                   <a href="https://github.com/Ga5000/Portfolio-1.0/" target="_blank"> <img src={github_icon} alt="" /></a>
                                   <a href="#"> <img src={website_icon} alt="" /></a>                              
                                   </div>
                         
                    </div>
                    
                    <div className="details">
                        <p className='status'>Concluído</p>
                        <button className="see-more" onClick={() => flip(0)}>{flipped[0] ? "voltar" : "ver mais"}</button>
                    </div>
                    
                </div>

                <div className={`project ${flipped[1] ? "flip" : "unflip"}`}>
                    <img className='project-img' src={youtubeImg} alt="" />
                    <div className="techs">
                        <h3 className='p-title'>Youtube Clone</h3>
                        <div className="used-techs">
                            <img src={react_icon} alt="" />
                            <img src={css_icon} alt="" />
                            <img src={api_icon} alt="" />
                        </div>
                    </div>
                    <div className="desc">
    <h4>Clone do Youtube</h4>
    <h6>Características :</h6>
    <ul>
        <li>Clone da interface do Youtube</li>
        <li>Integração com a API do Youtube para exibir vídeos</li>
        <li>Exibe os videos de acordo com a categoria</li>
    </ul>
    <div className="links">
        <a href="https://github.com/Ga5000/YouTube-Clone" target="_blank"><img src={github_icon} alt="GitHub" /></a>
        <a href="https://gabr5000youtubeclone.netlify.app/" target="_blank"> <img src={website_icon} alt="" /></a>
    </div>
</div>
                    <div className="details">
                        <p className='status'>Concluído</p>
                        <button className="see-more" onClick={() => flip(1)}>{flipped[1] ? "voltar" : "ver mais"}</button>
                    </div>
                   
                </div>
                <div className={`project ${flipped[2] ? "flip" : "unflip"}`}>
                    <img className='project-img' src={pokedexImg} alt="" />
                    <div className="techs">
                        <h3 className='p-title'>Pokedex</h3>
                        <div className="used-techs">
                            <img src={react_icon} alt="" />
                            <img src={typescript_icon} alt="" />
                            <img src={css_icon} alt="" />
                            <img src={api_icon} alt="" />
                        </div>
                    </div>
                    <div className="desc">
    <h4>Pokedex</h4>
    <h6>Características :</h6>
    <ul>
        <li>Saiba os status do pokemon pesquisando seu nome</li>
        <li>Contém todos os pokemons oferecidos pela pokeAPI</li>
        <li>Veja os tipos e seus detalhes</li>
    </ul>
    <div className="links">
        <a href="https://github.com/Ga5000/Pokedex" target="_blank"><img src={github_icon} alt="GitHub" /></a>
    </div>
</div>
                    <div className="details">
                        <p className='status'>Concluído</p>
                        <button className="see-more" onClick={() => flip(2)}>{flipped[2] ? "voltar" : "ver mais"}</button>
                    </div>
                   
                </div>
                <div className={`project ${flipped[3] ? "flip" : "unflip"}`}>
                    <img className='project-img' src={undefinedImg} alt="" />
                    <div className="techs">
                        <h3>???</h3>
                        <div className="used-techs">
                            <img src={react_icon} alt="" />
                            <img src={css_icon} alt="" />
                            <img src={api_icon} alt="" />
                        </div>
                    </div>

                    <div className="desc">
                           
                              <div className="links">
                                   <a href="" target="_blank"> <img src={github_icon} alt="" /></a>
                                   <a href=""> <img src={website_icon} alt="" /></a>                              
                                   </div>
                         
                    </div>
                    
                    <div className="details">
                        <p className='status'>Em Desenvolvimento</p>
                        <button className="see-more" onClick={() => flip(3)}>{flipped[3] ? "voltar" : "ver mais"}</button>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Projects;
