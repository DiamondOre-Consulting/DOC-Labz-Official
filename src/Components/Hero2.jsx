import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import hero from '..//assets/hero.svg'


const Hero2 = () => {
    const typeRef = useRef(null);

    useEffect(() => {
        const typewriter = new Typewriter(typeRef.current, {
            loop: true,
            delay: 75,
        });

        typewriter
            .typeString('<span class="text-yellow-500">B</span>it ')
            .pauseFor(500)
            .typeString('<span class="text-yellow-500">B</span>y ')
            .pauseFor(500)
            .typeString('<span class="text-yellow-500">B</span>it, ')
            .pauseFor(500)
            .typeString('<span class="text-yellow-500">B</span>uilding Tomorrow')
            .pauseFor(2000)
            .deleteAll()
            .start();

        return () => {
            typewriter.stop();
        };
    }, []);

    return (
        <>
            <div className='grid md:grid-cols-2 gap-4 px-10 md:px-20 justify-items-center mt-10 md:mt-20 items-center'>
                <div>
                    <h1 className='text-4xl text-gray-800 text-wrap '>Start And Grow With <span className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-green-400'>DOC-LABZ</span>
                    </h1>
                    <p className=' mb-4 text-xl' ref={typeRef}></p>
                    {/* <p className='-mt-1 mb-4'><span className='text-yellow-500  '>B</span>it <span className='text-yellow-500'>B</span>y <span className='text-yellow-500'>B</span>it, <span className='text-yellow-500'>B</span>uilding Tommorow</p> */}
                    <span className=' font-semibold mb-4 text-xl'>WEB DEVELOPMENT | UX/UI | DIGITAL MARKETING</span>
                    <p className='mb-8 mt-4 text-xl'> Doc-Labz, a dynamic IT consulting firm where innovation
                        and excellence converge. Our newly curated company boasts a
                        dedicated team of experts committed to delivering unparalleled
                        branding solutions
                    </p>
                    {/* <a href=""
                        class="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium mt-3 px-4 py-2 rounded-lg bg-gradient-to-r hover:from-lime-300 tracking-wide text-white">
                        <span class="ml-2">Explore More</span>
                    </a> */}
                    <span className='px-6 py-4 bg-gradient-to-r from-emerald-200 to-lime-300 rounded-full cursor-pointer hover:px-20 bg-gradient-to-r hover:from-lime-300 hover:to-emerald-200 transition-all duration-300'>Explore More</span>


                </div>

                <img src={hero} alt="image" className='md:w-4/5 md:ml-10 hidden md:block' />

            </div>
            <div className='absolute top-0 right-0'>
                <div className=' bg-green-300 md:w-60 md:h-96 mt-0 float-right rounded-bl-full rounded-tl-2xl opacity-70 z-100'></div>
            </div>
        </>
    )
}

export default Hero2;