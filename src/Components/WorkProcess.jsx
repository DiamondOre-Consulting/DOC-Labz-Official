import React from 'react'
import { useInView } from 'react-intersection-observer';
import 'animate.css';


const WorkProcess = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <div className='mt-0 md:mt-68 mb-20 md:mb-40'>
              <h1 className='mx-auto text-3xl md:text-5xl text-center font-bold mb-10'>Our Work Process</h1>
            <div className='grid grid-cols-1 md:grid-cols-9 gap-0 px-10 justify-center justify-items-center content-center items-center px-20'>
                <div className={`w-48 h-48 rounded-full bg-green-300 flex justify-center items-center text-3xl font-bold opacity-50 hover:opacity-100 cursor-pointer ${inView ? 'animate__animated animate__backInDown' : ''}`}ref={ref}><span>PLAN</span></div>
                <div className={`w-1 h-20 md:w-20 md:h-1 bg-black`}></div>
                <div className={`w-48 h-48 rounded-full bg-sky-200 flex justify-center items-center text-3xl font-bold opacity-1 cursor-pointer ${inView ? 'animate__animated animate__backInDown' : ''}`}ref={ref}><span>DESIGN</span></div>
                <div className={`w-1 h-20 md:w-20 md:h-1 bg-black`}></div>
                <div className={`w-48 h-48 rounded-full bg-green-300 flex justify-center items-center text-3xl font-bold opacity-50 hover:opacity-100 cursor-pointer ${inView ? 'animate__animated animate__backInDown' : ''}`}ref={ref}><span>DEVELOP</span></div>
                <div className={`w-1 h-20 md:w-20 md:h-1 bg-black`}></div>
                <div className={`w-48 h-48 rounded-full bg-blue-200 flex justify-center items-center text-3xl font-bold opacity-1 cursor-pointer ${inView ? 'animate__animated animate__backInDown' : ''}`}ref={ref}><span>TESTING</span></div>
                <div className={`w-1 h-20 md:w-20 md:h-1 bg-black`}></div>
                <div className={`w-48 h-48 rounded-full bg-green-300 flex justify-center items-center text-3xl font-bold opacity-50 hover:opacity-100 cursor-pointer ${inView ? 'animate__animated animate__backInDown' : ''}`}ref={ref}><span>LAUNCH</span></div>

            </div>
        </div>
    )
}

export default WorkProcess