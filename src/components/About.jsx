import React from 'react'
import { ABOUT_TEXT } from '../constants'
import AboutImg from '../assets/about.jpg'
import { motion } from "framer-motion"

const About = () => {
    return (
        <div id="about" className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl'>
                About
                <span className='text-neutral-500'> Me</span>
            </h1>
            <motion.div whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
             className="flex flex-col lg:flex-row items-center lg:items-start">
                <div className="flex-shrink-0 p-4">
                    <img className="mx-2 w-50 h-60 lg:w-50 lg:h-60 rounded-2xl" src={AboutImg} alt="AboutImg" />
                </div>
                <div className="flex-grow p-4">
                    <p className="text-center lg:text-left my-2 py-6 max-w-xl">{ABOUT_TEXT}</p>
                </div>
            </motion.div>


        </div>
    )
}

export default About