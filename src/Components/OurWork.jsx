import React from 'react'
import cvgenie from '../assets/cvgenie.png'
import diamondore from '../assets/diamondore.png'
import referbiz from '../assets/referbiz.png'
import mentor from '../assets/mentor.png'
import niyor from '../assets/niyor.jpeg';
import redefine from '../assets/redefine.jpeg';
import portfolio from '../assets/profilelgenie.png';
import haridwar from '../assets/haridwarparadise.jpeg';
import coatrans from '../assets/coa-trans.png';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const OurWork = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className='mt-10 md:mt-20' id="ourwork">
            <h1 className='mx-auto text-5xl text-center font-bold mb-10 md:mb-20'>Our Work</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-y-4 gap-y-10 px-10 '>
                <a href='https://www.cvgenie.in/' target='_blank' >
                    <div className='relative overflow-hidden'>
                        <img src="https://laurent.qodeinteractive.com/wp-content/plugins/laurent-core/assets/img/laptop.png" alt="Laptop" className='w-full z-10' style={{ maxWidth: '100%' }} />
                        <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0'>
                            <img
                                src={cvgenie}
                                alt="CVGenie"
                                className="absolute top-0 left-0 w-full h-full cursor-pointer object-cover object-top transition-slow ease-in-out hover:object-bottom rounded-md"
                                style={{ width: '72%', height: '78%', objectFit: 'cover', top: '10%', left: '13%' }}
                            />
                        </div>
                    </div>
                </a>

                <a href='https://www.diamondore.in/' target='_blank'>
                    <div className='relative overflow-hidden'>
                        <img src="https://laurent.qodeinteractive.com/wp-content/plugins/laurent-core/assets/img/laptop.png" alt="Laptop" className='w-full z-10' style={{ maxWidth: '100%' }} />
                        <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0'>
                            <img
                                src={diamondore}
                                alt="DiamondOre"
                                className="absolute top-0 left-0 w-full h-full cursor-pointer object-cover object-top transition-slow ease-in-out hover:object-bottom rounded-md"
                                style={{ width: '72%', height: '78%', objectFit: 'cover', top: '10%', left: '13%' }}
                            />
                        </div>
                    </div>
                </a>

                <a href='https://www.referbiz.in/' target='_blank' >
                    <div className='relative overflow-hidden'>
                        <img src="https://laurent.qodeinteractive.com/wp-content/plugins/laurent-core/assets/img/laptop.png" alt="Laptop" className='w-full z-10' style={{ maxWidth: '100%' }} />
                        <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0'>
                            <img
                                src={referbiz}
                                alt="ReferBiz"
                                className="absolute top-0 left-0 w-full h-full cursor-pointer object-cover object-top transition-slow ease-in-out hover:object-bottom rounded-md"
                                style={{ width: '72%', height: '78%', objectFit: 'cover', top: '10%', left: '13%' }}
                            />
                        </div>
                    </div>
                </a>


            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-y-4 gap-y-10 px-10 '>
                <a href='https://www.profilegenie.in/dynamic-catalogue/1/Ishan_Niyor_Perfumes' target='_blank' >
                    <div className='relative overflow-hidden'>
                        <img src="https://laurent.qodeinteractive.com/wp-content/plugins/laurent-core/assets/img/laptop.png" alt="Laptop" className='w-full z-10' style={{ maxWidth: '100%' }} />
                        <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0'>
                            <img
                                src={niyor}
                                alt="Niyor"
                                className="absolute top-0 left-0 w-full h-full cursor-pointer object-cover object-top transition-slow ease-in-out hover:object-bottom rounded-md"
                                style={{ width: '72%', height: '78%', objectFit: 'cover', top: '10%', left: '13%' }}
                            />
                        </div>
                    </div>
                </a>

                <a href='https://renderboxx-redefine.onrender.com/' target='_blank'>
                    <div className='relative overflow-hidden'>
                        <img src="https://laurent.qodeinteractive.com/wp-content/plugins/laurent-core/assets/img/laptop.png" alt="Laptop" className='w-full z-10' style={{ maxWidth: '100%' }} />
                        <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0'>
                            <img
                                src={redefine}
                                alt="redefine"
                                className="absolute top-0 left-0 w-full h-full cursor-pointer object-cover object-top transition-slow ease-in-out hover:object-bottom rounded-md"
                                style={{ width: '72%', height: '78%', objectFit: 'cover', top: '10%', left: '13%' }}
                            />
                        </div>
                    </div>
                </a>

                <a href='https://www.redefinegroup.com/' target='_blank' >
                    <div className='relative overflow-hidden'>
                        <img src="https://laurent.qodeinteractive.com/wp-content/plugins/laurent-core/assets/img/laptop.png" alt="Laptop" className='w-full z-10' style={{ maxWidth: '100%' }} />
                        <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0'>
                            <img
                                src={haridwar}
                                alt="Haridwar"
                                className="absolute top-0 left-0 w-full h-full cursor-pointer object-cover object-top transition-slow ease-in-out hover:object-bottom rounded-md"
                                style={{ width: '72%', height: '78%', objectFit: 'cover', top: '10%', left: '13%' }}
                            />
                        </div>
                    </div>
                </a>


            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-20 md:mb-20 px-10 mt-10'>
                

                    <a href='https://www.mentorlanguageinstitute.com/' target='_blank' >
                        <div className='relative overflow-hidden'>
                            <img src="https://laurent.qodeinteractive.com/wp-content/plugins/laurent-core/assets/img/laptop.png" alt="Laptop" className='w-full z-10' style={{ maxWidth: '100%' }} />
                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0'>
                                <img
                                    src={mentor}
                                    alt="mentor Institute"
                                    className="absolute top-0 left-0 w-full h-full cursor-pointer object-cover object-top transition-slow ease-in-out hover:object-bottom rounded-md"
                                    style={{ width: '72%', height: '78%', objectFit: 'cover', top: '10%', left: '13%' }}
                                />
                            </div>
                        </div>
                    </a>

                    <a href='https://coa-brandforce-static.onrender.com/' target='_blank' >
                        <div className='relative overflow-hidden'>
                            <img src="https://laurent.qodeinteractive.com/wp-content/plugins/laurent-core/assets/img/laptop.png" alt="Laptop" className='w-full z-10' style={{ maxWidth: '100%' }} />
                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0'>
                                <img
                                    src={coatrans}
                                    alt="COA"
                                    className="absolute top-0 left-0 w-full h-full cursor-pointer object-cover object-top transition-slow ease-in-out hover:object-bottom rounded-md"
                                    style={{ width: '72%', height: '78%', objectFit: 'cover', top: '10%', left: '13%' }}
                                />
                            </div>
                        </div>
                    </a>

                    <a href='https://www.profilegenie.in/profile/1/ATS690' target='_blank' >
                        <div className='relative overflow-hidden'>
                            <img src="https://laurent.qodeinteractive.com/wp-content/plugins/laurent-core/assets/img/laptop.png" alt="Laptop" className='w-full z-10' style={{ maxWidth: '100%' }} />
                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0'>
                                <img
                                    src={portfolio}
                                    alt="Portfolio"
                                    className="absolute top-0 left-0 w-full h-full cursor-pointer object-cover object-top transition-slow ease-in-out hover:object-bottom rounded-md"
                                    style={{ width: '72%', height: '78%', objectFit: 'cover', top: '10%', left: '13%' }}
                                />
                            </div>
                        </div>
                    </a>



                    

            </div>
        </div>
    )
}

export default OurWork
