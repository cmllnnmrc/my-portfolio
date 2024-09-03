import React from 'react'
import design from '../assets/design 3.png'
import wonderTour from '../assets/WonderTour.png'
import edupit from '../assets/Edupit.png'
import vsCode from '../assets/SASS-VS-Code.png'
import kierah from '../assets/whitelogo.png'
import redesign from '../assets/Redesign.png'
import webDesign from '../assets/webDesign.png'
import mistaWebsite from '../assets/mistawebsite.png'
import ppt from '../assets/ppt.png'
import { FaGithub } from 'react-icons/fa'
import { BiPlayCircle } from 'react-icons/bi'

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
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
                      <img src={kierah} alt="Graphic Design" />  
                    </div>
                    <div className="portfolio__content">
                    <p>I'm a graphic designer for my uncle's business. View all my works here.</p>
                    <div className="portfolio__actions">
                        <ul>
                            <li><a href="https://www.canva.com/design/DAGN4buM78Q/3I5qZY4g2ZJKS_yTvaqb5g/view?utm_content=DAGN4buM78Q&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank"><BiPlayCircle size={20}/>View</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="portfolio__card">
                    <div className="portfolio__img">
                      <img src={ppt} alt="Templates" />  
                    </div>
                    <div className="portfolio__content">
                    <p>I'm working at UNLAD Foundation, where one of my tasks is creating several PowerPoint templates.</p>
                    <div className="portfolio__actions">
                        <ul>
                            <li><a href="https://www.canva.com/folder/FAFPZJHHmSk" target="_blank"><BiPlayCircle size={20}/>View</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="portfolio__card">
                    <div className="portfolio__img">
                      <img src={mistaWebsite} alt="Mista UI/UX Design" />  
                    </div>
                    <div className="portfolio__content">
                    <p>I'm working at UNLAD Foundation, and one of my tasks is designing the UI/UX for MISTA Website.</p>
                    <div className="portfolio__actions">
                        <ul>
                            <li><a href="https://www.figma.com/proto/iqEOrsgKN7RARo1ngFmBUY/MISTA-Wireframe?node-id=54-51&node-type=SECTION&t=SBeGNsVfucq4ZEFJ-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=54%3A51" target="_blank"><BiPlayCircle size={20}/>Demo</a></li>
                            <li><a href="https://www.figma.com/design/iqEOrsgKN7RARo1ngFmBUY/MISTA-Wireframe?node-id=105-304&node-type=SECTION&t=SBeGNsVfucq4ZEFJ-0" target="_blank"><FaGithub size={20}/>Figma</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="portfolio__card">
                    <div className="portfolio__img">
                      <img src={wonderTour} alt="Wonder Tour" />  
                    </div>
                    <div className="portfolio__content">
                    <p>One of the engaging challenges i've experienced is the task of recreating a website by harnessing the capabilities of Tailwind CSS.</p>
                    <div className="portfolio__actions">
                        <ul>
                            <li><a href="https://wondertour.vercel.app/" target="_blank"><BiPlayCircle size={20}/>Demo</a></li>
                            <li><a href="https://github.com/cmllnnmrc/Tailwind-WonderTour" target="_blank"><FaGithub size={20}/>Code</a></li>
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
                            <li><a href="https://edupit.vercel.app/" target="_blank"><BiPlayCircle size={20}/>Demo</a></li>
                            <li><a href="https://github.com/cmllnnmrc/Tailwind-Edupit" target="_blank"><FaGithub size={20}/>Code</a></li>
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
                            <li><a href="https://vscode-tw.vercel.app/" target="_blank"><BiPlayCircle size={20}/>Demo</a></li>
                            <li><a href="https://github.com/cmllnnmrc/SASS-VS-Code" target="_blank"><FaGithub size={20}/>Code</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="portfolio__card">
                    <div className="portfolio__img">
                      <img src={redesign} alt="Redesign" />  
                    </div>
                    <div className="portfolio__content">
                    <p>A task of redesigning the company's website with the help of figma</p>
                    <div className="portfolio__actions">
                        <ul>
                            <li><a href="https://www.figma.com/proto/WULO0mqevqHRC3onzl7VpO/Website-Redesign?type=design&t=FmJLNcR6j3HtH8Ct-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A3" target="_blank"><BiPlayCircle size={20}/>Demo</a></li>
                            <li><a href="https://www.figma.com/file/WULO0mqevqHRC3onzl7VpO/Website-Redesign?type=design&mode=design&t=FmJLNcR6j3HtH8Ct-0" target="_blank"><FaGithub size={20}/>Figma</a></li>
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
                            <li><a href="https://www.figma.com/proto/XiBQaQgsQUAX9x6zpnKJUD/Camille's-Activity?type=design&node-id=30-46&t=Kljc3A5WieM0kZWI-0&scaling=min-zoom&page-id=30%3A45&starting-point-node-id=30%3A46" target="_blank"><BiPlayCircle size={20}/>Demo</a></li>
                            <li><a href="https://www.figma.com/file/XiBQaQgsQUAX9x6zpnKJUD/Camille's-Activity?type=design&node-id=30-45&mode=design&t=Kljc3A5WieM0kZWI-0" target="_blank"><FaGithub size={20}/>Figma</a></li>
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
