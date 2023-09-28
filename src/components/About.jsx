import React from 'react'
import Img from '../assets/about-img.png'
import design1 from '../assets/design 1.svg'

const About = () => {
  return (
    <section className="about">
        <div className="about__design">
            <img src={design1} alt="" />
        </div>
        <div className="container">
            <div className="about__title">
                <p>Get to know me</p>
                <h2>ABOUT ME</h2>
            </div>
            <div className="about__wrapper">
                <div className="about__img">
                    <img src={Img} alt="My Profile" />
                </div>
                <div className="about__content">
                    <div className="about__text">
                        <p>I'm currently a 4th-year BSIT student at Polytechnic University of the Philippines. My passion for web development, particularly in frontend development, has ignited recently. I possess a solid grasp of HTML and CSS and am eager to expand my horizons by exploring various tools and programming languages for web application development. Currently, I'm immersing myself in learning React.js and Python. My goal is to further delve into dynamic world of web development.</p>
                        <p>Despite my limited experience, I firmly believe in my existing skills and have a passionate drive to continually enhance them. I'm dedicated to ongoing learning and aspire to make a significant impact in the field of web development and the broader IT industry.</p>
                    </div>
                    <div className="about__action">
                        <a href='/MARCA_Resume.pdf' download='MARCA_Resume' className="btn orange">Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About