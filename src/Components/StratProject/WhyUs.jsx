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
                           <svg data-name="Layer 1" className='h-6 w-6' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M122.25 90.491H120V24.835a6.758 6.758 0 0 0-6.75-6.75h-98.5A6.758 6.758 0 0 0 8 24.835v65.656H5.75A5.756 5.756 0 0 0 0 96.241v7.923a5.756 5.756 0 0 0 5.75 5.75h116.5a5.756 5.756 0 0 0 5.75-5.75v-7.923a5.756 5.756 0 0 0-5.75-5.75zM11.5 24.835a3.254 3.254 0 0 1 3.25-3.25h98.5a3.254 3.254 0 0 1 3.25 3.25v65.656h-105zm70.639 69.156-1.682 4.461H47.543l-1.682-4.461zm42.361 10.174a2.253 2.253 0 0 1-2.25 2.25H5.75a2.253 2.253 0 0 1-2.25-2.25v-7.924a2.253 2.253 0 0 1 2.25-2.25h36.37l2.58 6.829a1.75 1.75 0 0 0 1.638 1.133h35.329a1.75 1.75 0 0 0 1.633-1.133l2.575-6.829h36.37a2.253 2.253 0 0 1 2.25 2.25z"/><path d="M110 82.241V29.835a1.75 1.75 0 0 0-1.75-1.75h-88.5a1.75 1.75 0 0 0-1.75 1.75v52.406a1.75 1.75 0 0 0 1.75 1.75h88.5a1.75 1.75 0 0 0 1.75-1.75zm-3.5-1.75h-85V31.585h85z"/></svg>
                        </div>
                        <h1 class="text-darken mb-3 text-xl font-medium lg:px-4">Latest Technologies</h1>
                        <p class="px-4 text-gray-500">Utilization of the latest technologies, ensuring your project is built on the most advanced frameworks and tools available.</p>
                    </div>


                    
                    <div className={`rounded-xl  p-6 text-center shadow-xl ${inView ? 'animate__animated animate__backInRight' : ''}`} ref={ref}>
                        <div
                            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-gradient-to-r from-teal-300 to-green-400 shadow-lg shadow-teal-500/40">
                            <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 " fill='white' viewBox="0 0 48 48"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="layer_1-2" data-name="layer 1"><path class="cls-1" d="M24 48H0v-2h24a22.11 22.11 0 0 0 21.12-15.82l1.92.56A24.12 24.12 0 0 1 24 48zM2.88 17.82 1 17.26A24.12 24.12 0 0 1 24 0h24v2H24A22.11 22.11 0 0 0 2.88 17.82z"/><path class="cls-1" d="M48 37h-2v-5.38l-4.55 2.27-.9-1.78 6-3A1 1 0 0 1 48 30zM1 19a1 1 0 0 1-.53-.15A1 1 0 0 1 0 18v-7h2v5.38l4.55-2.27.9 1.78-6 3A1 1 0 0 1 1 19zM36 29a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10 10 0 0 0 36 7z"/><path class="cls-1" d="M36 20c-2.21 0-4-2.24-4-5a3.71 3.71 0 0 1 4-4 3.71 3.71 0 0 1 4 4c0 2.76-1.79 5-4 5zm0-7c-1.79 0-2 1.14-2 2 0 1.6.93 3 2 3s2-1.4 2-3c0-.86-.21-2-2-2z"/><path class="cls-1" d="M43 26h-2v-4.31a1 1 0 0 0-.83-1L36 20l-4.17.7a1 1 0 0 0-.83 1V26h-2v-4.31a3 3 0 0 1 2.51-3l4.33-.69a1.71 1.71 0 0 1 .32 0l4.33.73a3 3 0 0 1 2.51 3zM12 43a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm0-22a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"/><path class="cls-1" d="M12 33c-2.21 0-4-2.24-4-5a3.71 3.71 0 0 1 4-4 3.71 3.71 0 0 1 4 4c0 2.76-1.79 5-4 5zm0-7c-1.79 0-2 1.14-2 2 0 1.6.93 3 2 3s2-1.4 2-3c0-.86-.21-2-2-2z"/><path class="cls-1" d="M19 40h-2v-5.31a1 1 0 0 0-.83-1L12 33l-4.17.7a1 1 0 0 0-.83 1V40H5v-5.31a3 3 0 0 1 2.51-2.95l4.33-.74a1.71 1.71 0 0 1 .32 0l4.33.73A3 3 0 0 1 19 34.69z"/><path class="cls-1" d="M11 35h2v2h-2zM11 38h2v2h-2z"/></g></g></svg>
                        </div>
                        <h1 class="text-darken mb-3 text-xl font-medium lg:px-">End-to-End Client Connections</h1>
                        <p class="px-4 text-gray-500">we forge strong, end-to-end connections with our clients. From inception to execution, we ensure transparent communication and collaboration.</p>
                    </div>



                    <div className={`rounded-xl  p-6 text-center shadow-xl ${inView ? 'animate__animated animate__backInDown' : ''}`} ref={ref}>
                        <div
                            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-gradient-to-r from-teal-300 to-green-400 shadow-lg shadow-teal-500/40">
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 ' fill='white' viewBox="0 0 48 48"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="layer_1-2" data-name="layer 1"><path class="cls-1" d="M37 48a11 11 0 1 1 11-11 11 11 0 0 1-11 11zm0-20a9 9 0 1 0 9 9 9 9 0 0 0-9-9z"/><path class="cls-1" d="M37 40c-2.21 0-4-2.24-4-5a3.71 3.71 0 0 1 4-4 3.71 3.71 0 0 1 4 4c0 2.76-1.79 5-4 5zm0-7c-1.79 0-2 1.14-2 2 0 1.6.93 3 2 3s2-1.4 2-3c0-.86-.21-2-2-2z"/><path class="cls-1" d="M44 45h-2v-3.31a1 1 0 0 0-.84-1L37 40l-4.17.7a1 1 0 0 0-.83 1V45h-2v-3.31a3 3 0 0 1 2.51-2.95l4.33-.74h.32l4.33.73A3 3 0 0 1 44 41.69zM11 48a11 11 0 1 1 11-11 11 11 0 0 1-11 11zm0-20a9 9 0 1 0 9 9 9 9 0 0 0-9-9z"/><path class="cls-1" d="M11 40c-2.21 0-4-2.24-4-5a3.71 3.71 0 0 1 4-4 3.71 3.71 0 0 1 4 4c0 2.76-1.79 5-4 5zm0-7c-1.79 0-2 1.14-2 2 0 1.6.93 3 2 3s2-1.4 2-3c0-.86-.21-2-2-2z"/><path class="cls-1" d="M18 45h-2v-3.31a1 1 0 0 0-.84-1L11 40l-4.17.7a1 1 0 0 0-.83 1V45H4v-3.31a3 3 0 0 1 2.51-2.95l4.33-.74h.32l4.33.73A3 3 0 0 1 18 41.69zM37 22a11 11 0 1 1 11-11 11 11 0 0 1-11 11zm0-20a9 9 0 1 0 9 9 9 9 0 0 0-9-9z"/><path class="cls-1" d="M37 14c-2.21 0-4-2.24-4-5a3.71 3.71 0 0 1 4-4 3.71 3.71 0 0 1 4 4c0 2.76-1.79 5-4 5zm0-7c-1.79 0-2 1.14-2 2 0 1.6.93 3 2 3s2-1.4 2-3c0-.86-.21-2-2-2z"/><path class="cls-1" d="M44 19h-2v-3.31a1 1 0 0 0-.84-1L37 14l-4.17.7a1 1 0 0 0-.83 1V19h-2v-3.31a3 3 0 0 1 2.51-2.95l4.33-.74h.32l4.33.73A3 3 0 0 1 44 15.69zM11 22a11 11 0 1 1 11-11 11 11 0 0 1-11 11zm0-20a9 9 0 1 0 9 9 9 9 0 0 0-9-9z"/><path class="cls-1" d="M11 14c-2.21 0-4-2.24-4-5a3.71 3.71 0 0 1 4-4 3.71 3.71 0 0 1 4 4c0 2.76-1.79 5-4 5zm0-7C9.21 7 9 8.14 9 9c0 1.6.93 3 2 3s2-1.4 2-3c0-.86-.21-2-2-2z"/><path class="cls-1" d="M18 19h-2v-3.31a1 1 0 0 0-.84-1L11 14l-4.17.7a1 1 0 0 0-.83 1V19H4v-3.31a3 3 0 0 1 2.51-2.95l4.33-.74h.32l4.33.73A3 3 0 0 1 18 15.69zM36 21h2v6h-2zM10 21h2v6h-2zM21 10h6v2h-6zM21 36h6v2h-6z"/></g></g></svg>
                        </div>
                        <h1 class="text-darken mb-3 text-xl font-medium lg:px-4">Experienced team</h1>
                        <p class="px-4 text-gray-500">our seasoned team brings years of experience and proficiency to the table. Trust in our expertise to navigate complex challenges and deliver exceptional results for your projects.</p>
                    </div>


                    <div className={`rounded-xl  p-6 text-center shadow-xl ${inView ? 'animate__animated animate__backInUp' : ''}`} ref={ref}>
                        <div
                            class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-gradient-to-r from-teal-300 to-green-400 shadow-lg shadow-teal-500/40">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" xml:space="preserve"><g fill="white"><path fill="white"
                            d="M63.272 50.502a.729.729 0 0 0 .728-.729V40c0-.4-.326-.726-.728-.726H40a.728.728 0 0 0-.728.726v23.274c0 .402.327.726.728.726h23.272a.727.727 0 0 0 .728-.727v-9.619a.728.728 0 1 0-1.455 0v8.893H40.728V40.728h5.818v3.615a.727.727 0 0 0 1.455 0v-3.615h7.272v6.375l-3.341-1.486a.74.74 0 0 0-.591 0l-4.363 1.941a.727.727 0 0 0 .295 1.393c.1 0 .2-.021.296-.062l4.068-1.811 4.067 1.811a.729.729 0 0 0 1.023-.666v-7.494h5.818v9.045a.729.729 0 0 0 .727.728z"/><path d="M54.06 58.869a.729.729 0 0 0 0 1.456h5.334a.728.728 0 0 0 0-1.456H54.06zM36.12 62.547H19.637a2.187 2.187 0 0 1-2.183-2.184V48.222a.728.728 0 0 0-1.455 0v12.141A3.643 3.643 0 0 0 19.637 64H36.12a.727.727 0 1 0 0-1.453zM16.728 45.07a.727.727 0 0 0 .727-.726V19.637c0-1.203.979-2.182 2.183-2.182h5.091v1.212a3.64 3.64 0 0 0 3.636 3.636H40a3.64 3.64 0 0 0 3.637-3.636v-1.212h5.092c1.202 0 2.182.978 2.182 2.182v16.484a.728.728 0 1 0 1.455 0V19.637A3.64 3.64 0 0 0 48.73 16H36.905a.729.729 0 0 0 0 1.456h5.276v1.212a2.185 2.185 0 0 1-2.182 2.182H28.363a2.185 2.185 0 0 1-2.182-2.182v-1.212h6.845a.728.728 0 0 0 0-1.456h-13.39A3.641 3.641 0 0 0 16 19.637v24.707c0 .4.326.726.728.726z"/><path d="M40.622 25.697a.728.728 0 1 0 0 1.454h5.196a.728.728 0 1 0 0-1.454h-5.196zM38.439 26.424a.727.727 0 0 0-.728-.727h-8.887a.727.727 0 1 0 0 1.454h8.887a.728.728 0 0 0 .728-.727zM24.946 25.697h-2.4a.727.727 0 1 0 0 1.454h2.4a.726.726 0 0 0 0-1.454zM46.546 33.213a.728.728 0 0 0-.728-.728h-8.347a.728.728 0 0 0 0 1.455h8.347a.728.728 0 0 0 .728-.727zM28.825 32.486a.727.727 0 1 0 0 1.455h5.736a.729.729 0 0 0 0-1.455h-5.736zM24.946 32.486h-2.4a.727.727 0 1 0 0 1.455h2.4a.727.727 0 0 0 0-1.455zM36.12 39.273h-7.294a.728.728 0 1 0 0 1.455h7.294a.728.728 0 0 0 0-1.455zM24.946 39.273h-2.4a.728.728 0 1 0 0 1.455h2.4a.727.727 0 0 0 0-1.455zM28.826 47.517h5.354a.729.729 0 0 0 0-1.456h-5.354a.728.728 0 1 0 0 1.456zM24.946 46.062h-2.4a.728.728 0 1 0 0 1.456h2.4a.727.727 0 0 0 0-1.456zM36.12 52.851h-7.294a.727.727 0 1 0 0 1.454h7.294a.727.727 0 1 0 0-1.454zM24.946 52.851h-2.4a.727.727 0 1 0 0 1.454h2.4a.726.726 0 0 0 .726-.727.725.725 0 0 0-.726-.727z"/></g></svg>
                        </div>
                        <h1 class="text-darken mb-3 text-xl font-medium lg:px-4">On-Time Delivery</h1>
                        <p class="px-4 text-gray-500">Doc-Labz prioritizes delivering your projects on time, every time. Count on us to meet your deadlines with precision and reliability, ensuring your satisfaction and success.</p>
                    </div>



                </div>

            </div>


        </>
    )
}

export default WhyUs