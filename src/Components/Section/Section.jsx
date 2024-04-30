import React, { useState, useEffect } from 'react';
import './Section.css';
import react_icon from '../../assets/svgs/react_icon.svg';

const Section = () => {
  const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 56.693 56.693" height="56.693px" viewBox="0 0 56.693 56.693" width="56.693px" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="white"><path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z"/><path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z"/></g></svg>`;
  const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="512px" viewBox="0 0 512 512" width="512px" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css"><![CDATA[.st0{fill-rule:evenodd;clip-rule:evenodd;}]]></style><g fill="white"><path class="st0" d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z"/></g></svg>`;

  const [isTyping, setIsTyping] = useState(true);
  const occupation = "Desenvolvedor Web";
  const [typedOccupation, setTypedOccupation] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsTyping(true);
      setTypedOccupation("");
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isTyping) {
      const interval = setInterval(() => {
        setTypedOccupation((prevTypedOccupation) => {
          const nextChar = occupation.charAt(prevTypedOccupation.length);
          return prevTypedOccupation + nextChar;
        });

        if (typedOccupation === occupation) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isTyping, typedOccupation, occupation]);


  useEffect(() => {
    const downloadPdf = () => {
      const pdfContent = '<h1>Hello, this is a PDF!</h1>';
      const blob = new Blob([pdfContent], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Gabriel-CV-2024.pdf';
      link.target = '_blank';
      link.click();
      URL.revokeObjectURL(url);
    };

    const cvButton = document.querySelector('.cv');
    cvButton.addEventListener('click', downloadPdf);

    return () => {
      cvButton.removeEventListener('click', downloadPdf);
    };
  }, []);

  return (
    <section className='me-section'>
      <main className='me-main'>
        <div className="me-container">
          <h1 className='me-name'>Gabriel Lisboa</h1>
          <h2 className="me-profession">{typedOccupation}</h2>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/gabriel-lisboa05/"  target='_blank' dangerouslySetInnerHTML={{ __html: linkedinIcon }} />
            <a href="https://github.com/Ga5000" target='_blank' dangerouslySetInnerHTML={{ __html: githubIcon }} />
            <button className="cv">Download CV</button>
          </div>
        </div>
      </main>
      <img className='spin-img' src={react_icon} alt="" />
    </section>
  );
}

export default Section;
