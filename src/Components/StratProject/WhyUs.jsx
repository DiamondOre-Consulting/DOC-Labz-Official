import React from 'react'
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const WhyUs = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <>
            <div class="h-full  w-full mt-24  pt-12 p-4">
                <div className='flex mb-20'>
                    <h1 className='text-4xl md:text-7xl font-bold px-10'>WHY US ?</h1>
                    <div className=' w-1 bg-gradient-to-r from-teal-300 to-green-400'></div>

                </div>
                <div class="grid gap-14 md:grid-cols-4 md:gap-5 px-10">
                    <div className={`rounded-xl  p-6 text-center shadow-xl ${inView ? 'animate__animated animate__backInLeft' : ''}`} ref={ref}>
                        <div
                            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-gradient-to-r from-teal-300 to-green-400 shadow-lg shadow-teal-500/40">
                           <svg xmlns="http://www.w3.org/2000/svg" fill='white' className='text-white' viewBox="0 0 256 256"><defs><style>.cls-1</style></defs><g id="icons_without_caption" data-name="icons without caption"><g id="MONEY_BAG" data-name="MONEY BAG"><path fill = "white"
                           class="cls-1" d="M154.69 211.35h-55a39.85 39.85 0 0 1-35.25-23.37 41.3 41.3 0 0 1 4.68-43c21.76-28.1 36.17-49.55 40.57-60.39l.29-.74c2.28-5 .92-12.15.9-12.22a26.82 26.82 0 0 0-26.39-22.98v-4a30.81 30.81 0 0 1 30.35 26.25c.05.25 1.59 8.37-1.18 14.5l-.24.61c-5.82 14.33-25.58 41.27-41.13 61.35a37.31 37.31 0 0 0-4.22 38.88 35.91 35.91 0 0 0 31.76 21.08H156.16a35.91 35.91 0 0 0 31.76-21.08 37.31 37.31 0 0 0-4.22-38.88c-22.3-28.8-36.13-49.43-41.1-61.3-2.89-6.89-1.52-14.73-1.46-15.06a30.75 30.75 0 0 1 30.37-26.36v4a26.76 26.76 0 0 0-26.42 23c0 .15-1.22 7.11 1.2 12.89 4.77 11.39 18.8 32.27 40.58 60.39a41.3 41.3 0 0 1 4.68 43 39.85 39.85 0 0 1-35.25 23.37z"/><path class="cls-1" d="M142.61 161.81c0 6.42-4.51 10.93-12.16 11.54V181h-4.21v-7.68a21.92 21.92 0 0 1-12.86-6.17l3.28-3.93a17.86 17.86 0 0 0 12.13 5.22c4.64 0 8.07-2.3 8.07-6.26 0-4.51-3.62-6-9.42-7.83-6.88-2.21-13.14-4.36-13.14-11.85 0-6.11 4.27-10.74 11.94-11.11v-8h4.21v8.23a25.72 25.72 0 0 1 10.71 4.57L138 140.1a19.52 19.52 0 0 0-10.59-3.71c-4.39 0-7.46 2.06-7.46 5.74 0 3.93 3.81 5.37 9.06 7.09 7.74 2.46 13.6 4.51 13.6 12.59zM105.21 75.64h45.57v4h-45.57z"/></g></g></svg>
                        </div>
                        <h1 class="text-darken mb-3 text-xl font-medium lg:px-4">Affordable Pricing</h1>
                        <p class="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
                            modi
                            accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
                    </div>


                    <div className={`rounded-xl  p-6 text-center shadow-xl ${inView ? 'animate__animated animate__backInDown' : ''}`} ref={ref}>
                        <div
                            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-gradient-to-r from-teal-300 to-green-400 shadow-lg shadow-teal-500/40">
                            <svg viewBox="0 0 33 46" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white">
                                <path
                                    d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                                    fill="white"></path>
                            </svg>
                        </div>
                        <h1 class="text-darken mb-3 text-xl font-medium lg:px-4">Experienced team</h1>
                        <p class="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
                            modi
                            accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
                    </div>


                    <div className={`rounded-xl  p-6 text-center shadow-xl ${inView ? 'animate__animated animate__backInUp' : ''}`} ref={ref}>
                        <div
                            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-gradient-to-r from-teal-300 to-green-400 shadow-lg shadow-teal-500/40">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" xml:space="preserve"><g fill="white"><path fill="white"
                            d="M63.272 50.502a.729.729 0 0 0 .728-.729V40c0-.4-.326-.726-.728-.726H40a.728.728 0 0 0-.728.726v23.274c0 .402.327.726.728.726h23.272a.727.727 0 0 0 .728-.727v-9.619a.728.728 0 1 0-1.455 0v8.893H40.728V40.728h5.818v3.615a.727.727 0 0 0 1.455 0v-3.615h7.272v6.375l-3.341-1.486a.74.74 0 0 0-.591 0l-4.363 1.941a.727.727 0 0 0 .295 1.393c.1 0 .2-.021.296-.062l4.068-1.811 4.067 1.811a.729.729 0 0 0 1.023-.666v-7.494h5.818v9.045a.729.729 0 0 0 .727.728z"/><path d="M54.06 58.869a.729.729 0 0 0 0 1.456h5.334a.728.728 0 0 0 0-1.456H54.06zM36.12 62.547H19.637a2.187 2.187 0 0 1-2.183-2.184V48.222a.728.728 0 0 0-1.455 0v12.141A3.643 3.643 0 0 0 19.637 64H36.12a.727.727 0 1 0 0-1.453zM16.728 45.07a.727.727 0 0 0 .727-.726V19.637c0-1.203.979-2.182 2.183-2.182h5.091v1.212a3.64 3.64 0 0 0 3.636 3.636H40a3.64 3.64 0 0 0 3.637-3.636v-1.212h5.092c1.202 0 2.182.978 2.182 2.182v16.484a.728.728 0 1 0 1.455 0V19.637A3.64 3.64 0 0 0 48.73 16H36.905a.729.729 0 0 0 0 1.456h5.276v1.212a2.185 2.185 0 0 1-2.182 2.182H28.363a2.185 2.185 0 0 1-2.182-2.182v-1.212h6.845a.728.728 0 0 0 0-1.456h-13.39A3.641 3.641 0 0 0 16 19.637v24.707c0 .4.326.726.728.726z"/><path d="M40.622 25.697a.728.728 0 1 0 0 1.454h5.196a.728.728 0 1 0 0-1.454h-5.196zM38.439 26.424a.727.727 0 0 0-.728-.727h-8.887a.727.727 0 1 0 0 1.454h8.887a.728.728 0 0 0 .728-.727zM24.946 25.697h-2.4a.727.727 0 1 0 0 1.454h2.4a.726.726 0 0 0 0-1.454zM46.546 33.213a.728.728 0 0 0-.728-.728h-8.347a.728.728 0 0 0 0 1.455h8.347a.728.728 0 0 0 .728-.727zM28.825 32.486a.727.727 0 1 0 0 1.455h5.736a.729.729 0 0 0 0-1.455h-5.736zM24.946 32.486h-2.4a.727.727 0 1 0 0 1.455h2.4a.727.727 0 0 0 0-1.455zM36.12 39.273h-7.294a.728.728 0 1 0 0 1.455h7.294a.728.728 0 0 0 0-1.455zM24.946 39.273h-2.4a.728.728 0 1 0 0 1.455h2.4a.727.727 0 0 0 0-1.455zM28.826 47.517h5.354a.729.729 0 0 0 0-1.456h-5.354a.728.728 0 1 0 0 1.456zM24.946 46.062h-2.4a.728.728 0 1 0 0 1.456h2.4a.727.727 0 0 0 0-1.456zM36.12 52.851h-7.294a.727.727 0 1 0 0 1.454h7.294a.727.727 0 1 0 0-1.454zM24.946 52.851h-2.4a.727.727 0 1 0 0 1.454h2.4a.726.726 0 0 0 .726-.727.725.725 0 0 0-.726-.727z"/></g></svg>
                        </div>
                        <h1 class="text-darken mb-3 text-xl font-medium lg:px-4">On-Time Delivery</h1>
                        <p class="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
                            modi
                            accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
                    </div>

                    <div className={`rounded-xl  p-6 text-center shadow-xl ${inView ? 'animate__animated animate__backInRight' : ''}`} ref={ref}>
                        <div
                            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-gradient-to-r from-teal-300 to-green-400 shadow-lg shadow-teal-500/40">
                            <svg viewBox="0 0 33 46" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white">
                                <path
                                    d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                                    fill="white"></path>
                            </svg>
                        </div>
                        <h1 class="text-darken mb-3 text-xl font-medium lg:px-4">The Best Support</h1>
                        <p class="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
                            modi
                            accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
                    </div>


                </div>

            </div>


        </>
    )
}

export default WhyUs