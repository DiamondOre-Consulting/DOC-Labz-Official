import React from 'react'
import { useInView } from 'react-intersection-observer';
import 'animate.css';


const Teachnologies = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <>
            <div>
                <h1 className='font-semibold text-3xl md:text-5xl text-center mb-20 mt-20'> Technologies We Use</h1>
          
                <div className='px-10 grid grid-cols-3 md:grid-cols-6 gap-x-2 gap-y-10'>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`}ref={ref}>
                        <img src="https://www.ucodice.com/admin/image_data/technology/logo/react1590735611.png" alt="" className='w-20 h-20' />
                        <p>REACT</p>
                    </div>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`}ref={ref}>
                        <img src="https://www.ucodice.com/admin/image_data/technology/logo/node1589870192.png" alt="" className='w-20 h-20' />
                        <p>Node JS</p>
                    </div>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`}ref={ref}>
                        <img src="https://e7.pngegg.com/pngimages/768/167/png-clipart-mongodb-nosql-document-oriented-database-nosql-icon-leaf-grass-thumbnail.png" alt="" className='w-20 h-20' />
                        <p>Mongo DB</p>
                    </div>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`}ref={ref}>
                        <img src="https://w7.pngwing.com/pngs/270/103/png-transparent-typescript-language-javascript-static-type-typescript-logo-frontend-3d-icon.png" alt="" className='w-20 h-20' />
                        <p>TYPE SCRIPT</p>
                    </div>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`}ref={ref}>
                        <img src="https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg" alt="" className='w-20 h-20 rounded-full' />
                        <p>NEXT JS</p>
                    </div>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`}ref={ref}>
                        <img src="https://e7.pngegg.com/pngimages/87/538/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo.png" alt="" className='w-20 h-20 rounded-full' />
                        <p>JAVA SCRIPT</p>
                    </div>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`}ref={ref}>
                        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/html-2752158-2284975.png?f=webp" alt="" className='w-20 h-20 rounded-full' />
                        <p>HTML</p>
                    </div>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`}ref={ref}>
                        <img src="https://w7.pngwing.com/pngs/224/77/png-transparent-website-web-internet-css-style-css3-technology-social-media-logos-i-flat-colorful-icon-thumbnail.png" alt="" className='w-20 h-20 rounded-full' />
                        <p>CSS</p>
                    </div>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`}ref={ref}>
                        <img src="https://miro.medium.com/v2/resize:fit:1200/1*5y334csCSm6P4ISP4uYzhg.png" alt="" className='w-30 h-20 rounded-full' />
                        <p>EXPRESS JS</p>
                    </div>
                    <div className={`flex flex-col items-center ${inView ? 'animate__animated animate__backInDown' : ''}`}ref={ref}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7PB7gDdA6O7gpwXX-cDoelORPic-1rSP6xRUfJQX_zw&s" alt="" className='w-20 h-20 rounded-full' />
                        <p>AWS</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Teachnologies