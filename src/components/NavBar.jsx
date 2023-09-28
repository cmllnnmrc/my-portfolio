import React, { useState } from 'react';
import { FaBars, FaTimes }from 'react-icons/fa';
import Logo from '../assets/logo.svg';
import { Link } from 'react-scroll';


const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'skills'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]
  return (
    <header className='header'>
        <div className='container'>
            <div className="header__wrapper">
                <div className="branding">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="header__nav">
                    <ul>
                        {links.map(({id, link}) => (
                            <li key={id}><Link to={link} smooth duration={500}>{link}</Link></li>
                        ))}
                    </ul>
                </div>
                <div onClick={() => setNav(!nav)} className="toggle__menu">
                    {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
                </div>
                {nav && (
                    <div className="mobile__nav">
                        <ul>
                            {links.map(({id, link}) => (
                                <li key={id}><Link to={link} smooth duration={500}>{link}</Link></li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    </header>
  )
}

export default NavBar