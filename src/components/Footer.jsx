import React from 'react'
import { BiLogoFacebookCircle, BiLogoGithub, BiLogoLinkedinSquare } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {

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
            href: 'https://mail.google.com/mail/?view=cm&fs=1&to=cmarca01@gmail.com'
        },
    ]


  return (
    <footer>
        <div className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__socials">
                        <ul>
                            {links.map(({id, child, href}) => (
                                <li key={id}><a href={href} target='_blank' rel='noreferrer'>{child}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer__copyright">
                        <p>©2023 Camille Ann Marca. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
