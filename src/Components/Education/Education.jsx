import React, { useState, useEffect } from 'react';
import './Education.css';

const Education = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(null);

  const cards = [
    {
      institution: "UNICID",
      title: 'Bacharelado Ciência da Computação',
      duration: '02/2023-12/2026',
      status: 'Em Andamento',
    },
    {
      institution: 'Senai',
      title: 'Introdução ao desenvolvimento em Java',
      duration: '09/2022-12/2022',
      status: 'Concluído',
    },
    {
      institution: "EDX",
      title: "CS50",
      duration: "indefinida",
      status: "Em andamento",
    },
    {
      institution: "Kumon",
      title: "Inglês",
      duration: "2018-2022",
      status: "Concluído"
    }
  ];

  const nextCard = () => {
    setAnimationDirection('next');
    setTimeout(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
      setAnimationDirection(null);
    }, 200);
  };

  const prevCard = () => {
    setAnimationDirection('prev');
    setTimeout(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
      setAnimationDirection(null);
    }, 200); 
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 20000);
    
    return () => clearInterval(interval); 
  }, [currentCardIndex]); 

  return (
    <section className='education'>
      <h1>Educação</h1>
      <div className="edc-container">
        <button className='prev-card-btn' onClick={prevCard}>{'<'}</button>
        <div className={`card ${currentCardIndex === 0 ? 'first' : currentCardIndex === cards.length - 1 ? 'last' : ''} ${animationDirection}`}>
          <div className="card-title">
            <h2>{cards[currentCardIndex].title}</h2>
          </div>
          <ul>
            <li> <p className='institution'>Instituição: <span>{cards[currentCardIndex].institution}</span></p> </li>
            <li> <p className='edc-time'>Duração: <span>{cards[currentCardIndex].duration}</span></p></li>
            <li> <p className="edc-status">Status: <span>{cards[currentCardIndex].status}</span></p></li>
          </ul>
        </div>
        <button className='next-card-btn' onClick={nextCard}>{'>'}</button>
      </div>
      <div className="card-balls">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card-ball ${currentCardIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentCardIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
