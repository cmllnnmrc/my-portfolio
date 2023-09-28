import React from 'react'
import html from '../assets/file-type-html.svg'
import css from '../assets/file-type-css.svg'
import js from '../assets/javascript-js.svg'
import react from '../assets/react.svg'
import nodejs from '../assets/nodejs.svg'
import firebase from '../assets/firebase.svg'
import tailwind from '../assets/tailwind-css.svg'
import figma from '../assets/figma.svg'
import ps from '../assets/adobe-photoshop.svg'
import ai from '../assets/adobe-illustrator.svg'

const Skills = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
        },
        {
            id: 3,
            src: js,
            title: 'JavaScript',
        },
        {
            id: 4,
            src: react,
            title: 'React.js',
        },
        {
            id: 5,
            src: nodejs,
            title: 'Nodejs',
        },
        {
            id: 6,
            src: firebase,
            title: 'Firebase',
        },
        {
            id: 7,
            src: tailwind,
            title: 'Tailwind CSS',
        },
        {
            id: 8,
            src: figma,
            title: 'Figma',
        },
        {
            id: 9,
            src: ps,
            title: 'Photoshop',
        },
        {
            id: 10,
            src: ai,
            title: 'Illustrator',
        },
    ]

  return (
    <section className="skills">
        <div className="container">
            <div className="experience__title">
                <p>Unveil My Tech Toolbox</p>
                <h2>SKILLS and TECHNOLOGY</h2>
            </div>
            <div className="skills__wrapper">
                {
                    techs.map(({id, src, title}) => (
                        <div key={id} className="skills__card">
                            <img src={src} alt="" />
                            <p>{title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skills