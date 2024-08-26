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
                <div className="about__img animate__animated animate__delay-1s animate__fadeIn">
                    <img src={Img} alt="My Profile" />
                </div>
                <div className="about__content">
                    <div className="about__text">
                        <p className='animate__animated animate__delay-2s animate__fadeInRight'>I graduated with a degree in BSIT from the Polytechnic University of the Philippines. My passion for web development, especially frontend work, was sparked during my internship. With a solid foundation in HTML and CSS, I'm excited to explore new tools and programming languages to further enhance my skills in web application development.</p>
                        <p className='animate__animated animate__delay-3s animate__fadeInRight'>Despite my limited experience, I firmly believe in my existing skills and have a passionate drive to continually enhance them. I'm dedicated to ongoing learning and aspire to make a significant impact in the field of web development and the broader IT industry.</p>
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