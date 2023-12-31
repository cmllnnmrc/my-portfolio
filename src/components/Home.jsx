import React from 'react'
import HeroImage from '../assets/heroImage.svg'
import { BiChevronDown, BiLogoFacebookCircle, BiLogoGithub, BiLogoLinkedinSquare } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {
    const links = [
        {
            id: 1,
            child: (
                <BiLogoFacebookCircle size={30} />
            ),
            href: 'https://www.facebook.com/profile.php?id=100094639142962'
        },
        {
            id: 2,
            child: (
                <BiLogoGithub size={30} />
            ),
            href: 'https://github.com/cmllnnmrc'
        },
        {
            id: 3,
            child: (
                <BiLogoLinkedinSquare size={30} />
            ),
            href: 'https://www.linkedin.com/in/camille-ann-marca-45818b269'
        },
        {
            id: 4,
            child: (
                <HiOutlineMail size={30} />
            ),
            href: 'mailto:cmarca01@gmail.com'
        },
    ]


  return (
    <section className="home">
        <div className="container">
            <div className="home__wrapper">
                <div className="home__img">
                    <img className='animate__animated animate__delay-.8s animate__fadeInLeft' src={HeroImage} alt="home Img" />
                </div>
                <div className="home__content">
                    <div className="home__text">
                        <h5 className='animate__animated animate__delay-.8s animate__fadeInRight'>Hey, I'm Camille</h5>
                        <h1 className='animate__animated animate__delay-1s animate__fadeInRight'>I am a Frontend Developer</h1>
                        <p className='animate__animated animate__delay-2s animate__fadeInRight'>A frontend developer that skillfully employs SASS and Tailwind CSS to craft stunning and responsive websites, while also exploring React.js and Python for web development.
                        </p>
                    </div>
                    <button className="btn orange animate__animated animate__delay-3s animate__fadeIn">
                        Portfolio
                    </button>
                    <div className="home__socials animate__animated animate__delay-3s animate__fadeInRight">
                        <ul>
                            {links.map(({id, child, href}) => (
                                <li key={id}><a href={href} target='_blank' rel='noreferrer'>{child}</a></li>
                            ))}
                        </ul>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="home__action">
                <span><Link to={'About.jsx'} smooth duration={500}><BiChevronDown size={60} /></Link></span>
            </div>
        </div>
    </section>
  )
}

export default Home