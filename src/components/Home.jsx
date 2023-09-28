import React from 'react'
import HeroImage from '../assets/heroImage.svg'
import { BiChevronDown, BiLogoFacebookCircle, BiLogoGithub, BiLogoLinkedinSquare } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'

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
    <section className="banner">
        <div className="container">
            <div className="banner__wrapper">
                <div className="banner__img">
                    <img src={HeroImage} alt="Banner Img" />
                </div>
                <div className="banner__content">
                    <div className="banner__text">
                        <h5>Hey, I'm Camille</h5>
                        <h1>I am a Frontend Developer</h1>
                        <p>A frontend developer that skillfully employs SASS and Tailwind CSS to craft stunning and responsive websites, while also exploring React.js and Python for web development.
                        </p>
                    </div>
                    <button className="btn orange">
                        Portfolio
                    </button>
                    <div className="banner__socials">
                        <ul>
                            {links.map(({id, child, href}) => (
                                <li key={id}><a href={href} target='_blank' rel='noreferrer'>{child}</a></li>
                            ))}
                        </ul>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="banner__action">
                <span><BiChevronDown size={60} /></span>
            </div>
        </div>
    </section>
  )
}

export default Home