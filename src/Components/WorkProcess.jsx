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
                <div className={`w-48 h-48 rounded-full flex justify-center  items-center text-3xl font-bold cursor-pointer ${inView ? 'animate__animated animate__backInDown' : ''}`} ref={ref} style={{ backgroundImage: `url('https://thumbs.dreamstime.com/b/multiethnic-group-people-planning-ideas-41108816.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
         
                    <span className='text-bold text-shadow-xl text-white z-50' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>PLAN</span>

                </div>
                <div className={`w-1 h-20 md:w-20 md:h-1 bg-black`}></div>
                <div className={`w-48 h-48 rounded-full flex justify-center items-center text-3xl font-bold cursor-pointer ${inView ? 'animate__animated animate__backInDown' : ''}`} ref={ref} style={{ backgroundImage: `url('https://media.istockphoto.com/id/1196702694/photo/designers-drawing-website-ux-app-development.jpg?s=612x612&w=0&k=20&c=nMyBxZuA19Lfow_eiUpZ1UAgibB4VJgR6t_7_e-tyMc=')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <span className='text-bold text-shadow-xl text-white z-50' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>DESIGN</span>

                </div>
                <div className={`w-1 h-20 md:w-20 md:h-1 bg-black`}></div>
                <div className={`w-48 h-48 rounded-full flex justify-center items-center text-3xl font-bold cursor-pointer ${inView ? 'animate__animated animate__backInDown' : ''}`} ref={ref} style={{ backgroundImage: `url('https://t3.ftcdn.net/jpg/03/86/83/28/360_F_386832865_KzXYSvOLzUhztbeVD5d6pi2MBMqwBGAL.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
         
                    <span className='text-bold text-shadow-xl text-white z-50' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>DEVELOP</span>

                </div>
                <div className={`w-1 h-20 md:w-20 md:h-1 bg-black`}></div>
                <div className={`w-48 h-48 rounded-full flex justify-center items-center text-3xl font-bold cursor-pointer ${inView ? 'animate__animated animate__backInDown' : ''}`} ref={ref} style={{ backgroundImage: `url('https://ceblog.s3.amazonaws.com/wp-content/uploads/2018/10/29145941/types-of-testing-1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

                    <span className='text-bold text-shadow-xl text-white z-50' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>TESTING</span>

                </div>
                <div className={`w-1 h-20 md:w-20 md:h-1 bg-black`}></div>
                <div className={`w-48 h-48 rounded-full flex justify-center items-center text-3xl font-bold cursor-pointer ${inView ? 'animate__animated animate__backInDown' : ''}`} ref={ref} style={{ backgroundImage: `url('https://st3.depositphotos.com/3591429/14207/i/450/depositphotos_142076814-stock-photo-diversity-people-sitting-in-circle.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <span className='text-bold text-shadow-xl text-white z-50' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>LAUNCH</span>

                </div>

            </div>
        </div>
    )
}

export default WorkProcess