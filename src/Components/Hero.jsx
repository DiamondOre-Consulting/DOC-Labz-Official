import React from 'react';
import herovedio from '../assets/herovedio.mp4'

const Hero = () => {
    return (
        <section className="relative h-screen">
            {/* Video Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Video */}
                <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
                    <source src={herovedio} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
         
                <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>
            {/* Text Content */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-20 text-white">
                <div className="space-y-4">
                    <h1 className="text-8xl font-bold">DOC-LAB<span className='text-yellow-400 text-6xl'>Z</span></h1>
                    <span className='text-blue-200 ml-2 '><span className='text-yellow-400'>B</span>it <span className='text-yellow-400'>B</span>y <span className='text-yellow-400'>B</span>it, <span className='text-yellow-400'>B</span>uilding Tommorow</span>
                    <h3 className="text-3xl font-light ">with TailwindCSS</h3>
                </div>
            </div>
        </section>
    );
}

export default Hero;
