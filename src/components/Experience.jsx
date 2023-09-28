import React from 'react'
import { BsFillCircleFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section className="experience">
        <div className="container">
            <div className="experience__title">
                <p>Explore my journey</p>
                <h2>EXPERIENCE</h2>
            </div>
            <div className="experience__wrapper">
                <div className="experience__content">
                    <div className="experience__shape">
                        <span><BsFillCircleFill size={30} /></span>
                        <span></span>
                    </div>
                    <div className="experience__text">
                        <h3>Frontline Business Solutions Inc.</h3>
                        <p>Frontend Developer</p>
                    </div>
                </div>
                <div className="experience__content">
                    <div className="experience__shape">
                        <span><BsFillCircleFill size={30} /></span>
                        <span></span>
                    </div>
                    <div className="experience__text">
                        <h3>Special Program for Employment of Student</h3>
                        <p>Market Employee</p>
                    </div>
                </div>
                <div className="experience__content">
                    <div className="experience__shape">
                        <span><BsFillCircleFill size={30} /></span>
                        <span></span>
                    </div>
                    <div className="experience__text">
                        <h3>Special Program for Employment of Student</h3>
                        <p>Market Employee</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience