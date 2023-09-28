import React from 'react'
import design from '../assets/design 3.png'
import wonderTour from '../assets/WonderTour.png'
import edupit from '../assets/Edupit.png'
import vsCode from '../assets/SASS-VS-Code.png'
import starbucks from '../assets/SASS-Starbucks.png'
import redesign from '../assets/Redesign.png'
import webDesign from '../assets/webDesign.png'
import { FaGithub } from 'react-icons/fa'
import { BiPlayCircle } from 'react-icons/bi'

const Portfolio = () => {
  return (
    <section className="portfolio">
        <div className="portfolio__design">
            <img src={design} alt="" />
        </div>
        <div className="container">
            <div className="portfolio__title">
                <p>Dive into my Work</p>
                <h2>PORTFOLIO</h2>
            </div>
            <div className="portfolio__wrapper">
                <div className="portfolio__card">
                    <div className="portfolio__img">
                      <img src={wonderTour} alt="Wonder Tour" />  
                    </div>
                    <div className="portfolio__content">
                    <p>One of the engaging challenges i've experienced is the task of recreating a website by harnessing the capabilities of Tailwind CSS.</p>
                    <div className="portfolio__actions">
                        <ul>
                            <li><a href="https://wondertour.vercel.app/"><BiPlayCircle size={20}/>Demo</a></li>
                            <li><a href="https://github.com/cmllnnmrc/Tailwind-WonderTour"><FaGithub size={20}/>Code</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="portfolio__card">
                    <div className="portfolio__img">
                       <img src={edupit} alt="Edupit" /> 
                    </div>
                    <div className="portfolio__content">
                    <p>By leveraging the capabilities of Tailwind CSS, I've skillfully replicated the Edupit website.</p>
                    <div className="portfolio__actions">
                        <ul>
                            <li><a href="https://edupit.vercel.app/"><BiPlayCircle size={20}/>Demo</a></li>
                            <li><a href="https://github.com/cmllnnmrc/Tailwind-Edupit"><FaGithub size={20}/>Code</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="portfolio__card">
                    <div className="portfolio__img">
                        <img src={vsCode} alt="VS Code" />
                    </div>
                    <div className="portfolio__content">
                    <p>A task of Crafting the VS Code website by utilizing SASS as my primary tool for the design and development.</p>
                    <div className="portfolio__actions">
                        <ul>
                            <li><a href="https://vscode-tw.vercel.app/"><BiPlayCircle size={20}/>Demo</a></li>
                            <li><a href="https://github.com/cmllnnmrc/SASS-VS-Code"><FaGithub size={20}/>Code</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="portfolio__card">
                    <div className="portfolio__img">
                      <img src={starbucks} alt="Starbucks" />  
                    </div>
                    <div className="portfolio__content">
                    <p>Building this website was a challenging endeavor, because of its intricate design elements an structure. Utilizing SASS to build this website.</p>
                    <div className="portfolio__actions">
                        <ul>
                            <li><a href="https://starbucks-tw.vercel.app/"><BiPlayCircle size={20}/>Demo</a></li>
                            <li><a href="https://github.com/cmllnnmrc/SASS-Starbucks"><FaGithub size={20}/>Code</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="portfolio__card">
                    <div className="portfolio__img">
                      <img src={redesign} alt="Redesign" />  
                    </div>
                    <div className="portfolio__content">
                    <p>A task of redesigning the company's website with the help og figma</p>
                    <div className="portfolio__actions">
                        <ul>
                            <li><a href="https://www.figma.com/proto/WULO0mqevqHRC3onzl7VpO/Website-Redesign?type=design&t=FmJLNcR6j3HtH8Ct-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A3"><BiPlayCircle size={20}/>Demo</a></li>
                            <li><a href="https://www.figma.com/file/WULO0mqevqHRC3onzl7VpO/Website-Redesign?type=design&mode=design&t=FmJLNcR6j3HtH8Ct-0"><FaGithub size={20}/>Figma</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="portfolio__card">
                    <div className="portfolio__img">
                      <img src={webDesign} alt="Web Design" />  
                    </div>                 
                    <div className="portfolio__content">
                    <p>A task where the mentor provided only with a logo and tasked with building a website from scratch.</p>
                    <div className="portfolio__actions">
                        <ul>
                            <li><a href="https://www.figma.com/proto/XiBQaQgsQUAX9x6zpnKJUD/Camille's-Activity?type=design&node-id=30-46&t=Kljc3A5WieM0kZWI-0&scaling=min-zoom&page-id=30%3A45&starting-point-node-id=30%3A46"><BiPlayCircle size={20}/>Demo</a></li>
                            <li><a href="https://www.figma.com/file/XiBQaQgsQUAX9x6zpnKJUD/Camille's-Activity?type=design&node-id=30-45&mode=design&t=Kljc3A5WieM0kZWI-0"><FaGithub size={20}/>Figma</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio