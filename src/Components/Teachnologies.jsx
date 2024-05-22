import React from 'react'
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import react from '../assets/react.png'
import node from '../assets/node.png'
import mongo from '../assets/mongo.png'
import typescript from '../assets/typescript.png'
import nextjs from '../assets/nextjs.jpg'
import js from '../assets/js.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import express from '../assets/express.png'
import aws from '../assets/aws.png'



const Teachnologies = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <>
            <div>
                <h1 className='font-semibold text-3xl md:text-5xl text-center mb-20 mt-20'> Technologies We Use</h1>

                <div className='px-6 md:px-10 grid grid-cols-3 md:grid-cols-6 gap-x-2 gap-y-10'>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`} ref={ref}>
                        <img src={react} alt="" className='w-20 h-20 ' />
                        <p>REACT</p>
                    </div>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`} ref={ref}>
                        <img src={node} alt="" className='w-20 h-20' />
                        <p>Node JS</p>
                    </div>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`} ref={ref}>
                        <img src={mongo} alt="" className='w-24 h-20' />
                        <p>Mongo DB</p>
                    </div>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`} ref={ref}>
                        <img src={typescript} alt="" className='w-20 h-20' />
                        <p>TYPE SCRIPT</p>
                    </div>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`} ref={ref}>
                        <img src={nextjs} alt="" className='w-20 h-20 rounded-full' />
                        <p>NEXT JS</p>
                    </div>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`} ref={ref}>
                        <img src={js} alt="" className='w-20 h-20 rounded-full' />
                        <p>JAVA SCRIPT</p>
                    </div>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`} ref={ref}>
                        <img src={html} alt="" className='w-20 h-20 rounded-full' />
                        <p>HTML</p>
                    </div>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`} ref={ref}>
                        <img src={css} alt="" className='w-20 h-20 rounded-full' />
                        <p>CSS</p>
                    </div>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`} ref={ref}>
                        <img src={express} alt="" className='w-30 h-20 rounded-full' />
                        <p>EXPRESS JS</p>
                    </div>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`} ref={ref}>
                        <img src={aws} alt="" className='w-20 h-20 rounded-full' />
                        <p>AWS</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Teachnologies