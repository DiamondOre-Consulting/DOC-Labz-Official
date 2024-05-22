import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const Home = () => {
    const typeRef = useRef(null);

    useEffect(() => {
        const typewriter = new Typewriter(typeRef.current, {
            loop: true,
            delay: 75,
        });

        typewriter
            .typeString('<span class="inline-block font-bold">Let\'s </span>')
            .typeString('<span class="relative whitespace-nowrap text-green-400"><span class="relative"> Work </span></span>')
            .typeString('<span class="inline-block font-bold"> Together</span>')
            .pauseFor(2000)
            .deleteChars(8)
            .typeString('<span class="inline-block font-bold">Seamlessly</span>')
            .pauseFor(2000)
            .deleteChars(10)
            .typeString('<span class="inline-block font-bold">Unitedly</span>')
            .pauseFor(2000)
            .deleteAll()
            .start();

        return () => {
            typewriter.stop();
        };
    }, []);
    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-6 px-10 justify-center justify-items-center content-center'>
                <div class="mx-auto col-span-4   sm:px-6 lg:px-8  pb-16 text-center pt-20  lg:pt-32">


                    <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                        <span className="inline-block font-bold" ref={typeRef}></span>
                    </h1>



                    <div class="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
                        <a class="group inline-flex items-center justify-center rounded-full py-2 px-8 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 animate-fade-in-left"
                            href="#">

                            <span class="ml-3">HIRE NOW</span>
                        </a>

                    </div>

                    <p class="mx-auto mt-6 max-w-3xl text-lg tracking-tight text-slate-700 sm:mt-20">
                        <span class="inline-block">Partner with us to leverage cutting-edge technology solutions and drive your business forward.</span>
                        <span class="inline-block"></span>
                    </p>

                </div>


                <div className='col-span-2 w-full mt-10'>
                    <form class="max-w-md mx-auto  p-6 bg-gradient-to-r from-emerald-200 to-lime-300 border rounded-lg shadow-lg">
                        <h2 class="text-2xl font-bold mb-6">Contact Form</h2>
                        <div class="mb-4">

                            <input class="shadow appearance-none bg-gray-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
                        </div>
                        <div class="mb-4">
                            <input class="shadow appearance-none border bg-gray-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
                        </div>

                        <div class="mb-4">
                            <input class="shadow appearance-none border bg-gray-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your phone" />
                        </div>
                        <div class="mb-4">

                            <textarea class="shadow appearance-none border  bg-gray-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="feedback" rows="5" placeholder="Enter your message"></textarea>
                        </div>
                        <button class="bg-gray-50 rounded-md font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Home