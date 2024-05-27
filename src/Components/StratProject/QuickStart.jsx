import React from 'react'

const QuickStart = () => {
  return (
    <>


      <div aria-hidden="true" class="pointer-events-none mx-4 md:mx-20 mt-20">
        <h1 className='text-4xl md:text-7xl font-bold px-10 md:mb-10'>Quick And Easy Start</h1>
        <section class="relative overflow-hidden ">
          <div class="mt-2 md:mt-0 py-12 pb-6 sm:py-16 lg:pb-24 overflow-hidden">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
              <div class="relative mt-12 lg:mt-10">
                <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                  <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="875" height="48" viewBox="0 0 875 48"
                    fill="none">
                    <path
                      d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                      stroke="#D4D4D8" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 12" />
                  </svg>
                </div>
                <div
                  class="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-4 gap-x-12">
                  <div>
                    <div
                      class="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-emerald-200 to-lime-300  border-2 border-gray-200  rounded-full shadow">
                      <span class="text-xl font-semibold text-gray-100  ">1</span>
                    </div>
                    <h3
                      class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900  md:mt-10">
                      Contact Us
                    </h3>
                    <p class="mt-3 sm:mt-4 text-base text-gray-600 ">
                      Fill the contact form & brief of your requirements so we can align the best executive for discussion according to your requirements.
                    </p>
                  </div>
                  <div>
                    <div
                      class="flex items-center relative top-1 md:top-4 justify-center w-16 h-16 mx-auto bg-gradient-to-r from-emerald-200 to-lime-300  border-2 border-gray-200  rounded-full shadow">
                      <span class="text-xl font-semibold text-gray-100 ">2</span>
                    </div>
                    <h3
                      class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900  md:mt-10">
                      Expert Discussion
                    </h3>
                    <p class="mt-3 sm:mt-4 text-base text-gray-600 ">
                    Our team will connect with you to discuss your project requirements in detail to offer best available solutions.
                    </p>
                  </div>
                  <div>
                    <div
                      class="flex items-center justify-center relative bottom-0 md:bottom-4 w-16 h-16 mx-auto bg-gradient-to-r from-emerald-200 to-lime-300  border-2 border-gray-200  rounded-full shadow">
                      <span class="text-xl font-semibold text-gray-100 ">3</span>
                    </div>
                    <h3
                      class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900  md:mt-10">
                      Start Your Work
                    </h3>
                    <p class="mt-3 sm:mt-4 text-base text-gray-600 ">
                      We will start the work as per your requirements & provide you regular updates & reports.
                    </p>
                  </div>

                     <div>
                    <div
                      class="flex items-center justify-center relative top-2  md:top-4 w-16 h-16 mx-auto bg-gradient-to-r from-emerald-200 to-lime-300  border-2 border-gray-200  rounded-full shadow">
                      <span class="text-xl font-semibold text-gray-100 ">4</span>
                    </div>
                    <h3
                      class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900  md:mt-10">
                      Grow With US
                    </h3>
                    <p class="mt-3 sm:mt-4 text-base text-gray-600 ">
                     Doc-Labz will do its best to grow your business and make you stand firm in your respective industry.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div class="md:w-full ">
                <div class=" md:flex items-center  lg:space-x-8">
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8  md:px-0">
                    <div class="h-96 w-full md:w-80 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 bg-green-300 p-4">
                        <div className='flex flex-col justify-center text-center items-center'>
                            <div className='mt-8'><svg xmlns="http://www.w3.org/2000/svg" width="43.637" height="48.004"><g fill="black"><path d="M24.983 20.767a.726.726 0 0 0-.1 1.023 3.6 3.6 0 0 1 .817 2.3v4.693H15.515v-4.694a3.646 3.646 0 0 1 .818-2.3.727.727 0 1 0-1.127-.919 5.1 5.1 0 0 0-1.146 3.22v5.42a.729.729 0 0 0 .727.729h11.636a.728.728 0 0 0 .728-.729v-5.42A5.091 5.091 0 0 0 26 20.871a.723.723 0 0 0-1.017-.104zM20.607 20.187a3.636 3.636 0 1 0-3.637-3.637 3.641 3.641 0 0 0 3.637 3.637zm0-5.818a2.183 2.183 0 1 1-2.182 2.182 2.185 2.185 0 0 1 2.182-2.182z"/><path d="M43.637 5.576V3.637A3.641 3.641 0 0 0 40 0H6.546a4.126 4.126 0 0 0-4.122 4.121v1.695H.727a.728.728 0 0 0 0 1.456h1.7v4.363h-1.7a.728.728 0 0 0 0 1.456h1.7v4.363h-1.7a.728.728 0 0 0 0 1.456h1.7v4.363h-1.7a.728.728 0 0 0 0 1.456h1.7v4.365h-1.7a.727.727 0 1 0 0 1.454h1.7v4.365h-1.7a.728.728 0 0 0 0 1.456h1.7v4.363h-1.7a.728.728 0 0 0 0 1.456h1.7v1.7A4.127 4.127 0 0 0 6.546 48H40a3.641 3.641 0 0 0 3.636-3.637v-1.935a3.623 3.623 0 0 0-1.476-2.908 3.623 3.623 0 0 0 1.477-2.908v-1.939a3.622 3.622 0 0 0-1.478-2.91 3.622 3.622 0 0 0 1.478-2.91v-1.945A3.62 3.62 0 0 0 42.16 24a3.624 3.624 0 0 0 1.477-2.91v-1.939a3.618 3.618 0 0 0-1.478-2.908 3.625 3.625 0 0 0 1.478-2.91v-1.939a3.62 3.62 0 0 0-1.477-2.908 3.629 3.629 0 0 0 1.477-2.91zm-1.454 36.847v1.939A2.185 2.185 0 0 1 40 46.544h-4.156a4.083 4.083 0 0 0 1-2.666v-3.635H40.007a2.186 2.186 0 0 1 2.176 2.18zm0-7.755v1.939a2.185 2.185 0 0 1-2.175 2.182H36.849v-6.3H40a2.185 2.185 0 0 1 2.183 2.179zm0-7.76v1.939A2.185 2.185 0 0 1 40 31.029h-3.151v-6.3H40a2.185 2.185 0 0 1 2.183 2.179zm0-7.758v1.939A2.185 2.185 0 0 1 40 23.271h-3.151v-6.3H40a2.185 2.185 0 0 1 2.183 2.179zm0-7.758v1.939A2.185 2.185 0 0 1 40 15.513h-3.151V9.21h3.156a2.186 2.186 0 0 1 2.178 2.182zm0-5.816a2.183 2.183 0 0 1-2.177 2.18h-3.883a.728.728 0 0 0-.728.729V43.88a2.669 2.669 0 0 1-2.667 2.666H6.546a2.669 2.669 0 0 1-2.667-2.666v-1.7h1.7a.728.728 0 0 0 0-1.456h-1.7v-4.358h1.7a.728.728 0 0 0 0-1.456h-1.7v-4.365h1.7a.727.727 0 1 0 0-1.454h-1.7v-4.365h1.7a.728.728 0 0 0 0-1.456h-1.7v-4.362h1.7a.728.728 0 0 0 0-1.456h-1.7v-4.363h1.7a.728.728 0 0 0 0-1.456h-1.7V7.27h1.7a.728.728 0 0 0 0-1.456h-1.7v-1.7a2.669 2.669 0 0 1 2.667-2.661H40a2.185 2.185 0 0 1 2.182 2.182v1.941z"/></g></svg></div>
                            <h1 className='font-bold   mt-2 text-3xl'>Contact us</h1>
                            <p className='text-xl font-semibold mt-10'> 
                            Fill the contact form & brief of your requirements so we can align the best executive for discussion according to your requirements.
                            </p>
                        </div>
                    </div>
                    <div class="h-96 w-full md:w-80 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 bg-blue-300 p-4">
                        <div className='flex flex-col justify-center text-center items-center'>
                            <div className='mt-8'><svg xmlns="http://www.w3.org/2000/svg" width="43.637" height="48.004"><g fill="black"><path d="M24.983 20.767a.726.726 0 0 0-.1 1.023 3.6 3.6 0 0 1 .817 2.3v4.693H15.515v-4.694a3.646 3.646 0 0 1 .818-2.3.727.727 0 1 0-1.127-.919 5.1 5.1 0 0 0-1.146 3.22v5.42a.729.729 0 0 0 .727.729h11.636a.728.728 0 0 0 .728-.729v-5.42A5.091 5.091 0 0 0 26 20.871a.723.723 0 0 0-1.017-.104zM20.607 20.187a3.636 3.636 0 1 0-3.637-3.637 3.641 3.641 0 0 0 3.637 3.637zm0-5.818a2.183 2.183 0 1 1-2.182 2.182 2.185 2.185 0 0 1 2.182-2.182z"/><path d="M43.637 5.576V3.637A3.641 3.641 0 0 0 40 0H6.546a4.126 4.126 0 0 0-4.122 4.121v1.695H.727a.728.728 0 0 0 0 1.456h1.7v4.363h-1.7a.728.728 0 0 0 0 1.456h1.7v4.363h-1.7a.728.728 0 0 0 0 1.456h1.7v4.363h-1.7a.728.728 0 0 0 0 1.456h1.7v4.365h-1.7a.727.727 0 1 0 0 1.454h1.7v4.365h-1.7a.728.728 0 0 0 0 1.456h1.7v4.363h-1.7a.728.728 0 0 0 0 1.456h1.7v1.7A4.127 4.127 0 0 0 6.546 48H40a3.641 3.641 0 0 0 3.636-3.637v-1.935a3.623 3.623 0 0 0-1.476-2.908 3.623 3.623 0 0 0 1.477-2.908v-1.939a3.622 3.622 0 0 0-1.478-2.91 3.622 3.622 0 0 0 1.478-2.91v-1.945A3.62 3.62 0 0 0 42.16 24a3.624 3.624 0 0 0 1.477-2.91v-1.939a3.618 3.618 0 0 0-1.478-2.908 3.625 3.625 0 0 0 1.478-2.91v-1.939a3.62 3.62 0 0 0-1.477-2.908 3.629 3.629 0 0 0 1.477-2.91zm-1.454 36.847v1.939A2.185 2.185 0 0 1 40 46.544h-4.156a4.083 4.083 0 0 0 1-2.666v-3.635H40.007a2.186 2.186 0 0 1 2.176 2.18zm0-7.755v1.939a2.185 2.185 0 0 1-2.175 2.182H36.849v-6.3H40a2.185 2.185 0 0 1 2.183 2.179zm0-7.76v1.939A2.185 2.185 0 0 1 40 31.029h-3.151v-6.3H40a2.185 2.185 0 0 1 2.183 2.179zm0-7.758v1.939A2.185 2.185 0 0 1 40 23.271h-3.151v-6.3H40a2.185 2.185 0 0 1 2.183 2.179zm0-7.758v1.939A2.185 2.185 0 0 1 40 15.513h-3.151V9.21h3.156a2.186 2.186 0 0 1 2.178 2.182zm0-5.816a2.183 2.183 0 0 1-2.177 2.18h-3.883a.728.728 0 0 0-.728.729V43.88a2.669 2.669 0 0 1-2.667 2.666H6.546a2.669 2.669 0 0 1-2.667-2.666v-1.7h1.7a.728.728 0 0 0 0-1.456h-1.7v-4.358h1.7a.728.728 0 0 0 0-1.456h-1.7v-4.365h1.7a.727.727 0 1 0 0-1.454h-1.7v-4.365h1.7a.728.728 0 0 0 0-1.456h-1.7v-4.362h1.7a.728.728 0 0 0 0-1.456h-1.7v-4.363h1.7a.728.728 0 0 0 0-1.456h-1.7V7.27h1.7a.728.728 0 0 0 0-1.456h-1.7v-1.7a2.669 2.669 0 0 1 2.667-2.661H40a2.185 2.185 0 0 1 2.182 2.182v1.941z"/></g></svg></div>
                            <h1 className='font-bold   mt-2 text-3xl'>Start Your Work</h1>
                            <p className='text-xl font-semibold mt-10'> 
                            We will start the work as per your requirements & provide you regular updates & reports.
                            </p>
                        </div>
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 mt-6">
                    <div class="h-64  md:w-96 overflow-hidden rounded-lg">
                      <img src="https://media.istockphoto.com/id/1356364268/photo/close-up-focus-on-persons-hands-typing-on-the-desktop-computer-keyboard-screens-show-coding.jpg?b=1&s=612x612&w=0&k=20&c=HqAG1MsV4aH23204_xS1P_WEl9fy6hjrZTZRdfsnw60=" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                    <div class="h-64  md:w-96 overflow-hidden rounded-lg">
                      <img src="https://www.shutterstock.com/shutterstock/photos/593389664/display_1500/stock-photo-brainstorming-group-of-people-working-concept-business-team-brainstorming-marketing-plan-593389664.jpg" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                    <div class="h-64  md:w-80 overflow-hidden rounded-lg">
                      <img src="https://static.vecteezy.com/system/resources/previews/006/948/432/original/people-are-working-together-to-build-a-rocket-startup-project-development-team-start-your-business-and-teamwork-concept-flat-style-illustration-vector.jpg" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 mt-6 lg:gap-y-8">
                  <div class="h-96 w-full md:w-80 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 bg-blue-300 p-4">
                        <div className='flex flex-col justify-center text-center items-center'>
                            <div className='mt-8'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43.637" height="48.004"><g fill="black"><path d="M24.983 20.767a.726.726 0 0 0-.1 1.023 3.6 3.6 0 0 1 .817 2.3v4.693H15.515v-4.694a3.646 3.646 0 0 1 .818-2.3.727.727 0 1 0-1.127-.919 5.1 5.1 0 0 0-1.146 3.22v5.42a.729.729 0 0 0 .727.729h11.636a.728.728 0 0 0 .728-.729v-5.42A5.091 5.091 0 0 0 26 20.871a.723.723 0 0 0-1.017-.104zM20.607 20.187a3.636 3.636 0 1 0-3.637-3.637 3.641 3.641 0 0 0 3.637 3.637zm0-5.818a2.183 2.183 0 1 1-2.182 2.182 2.185 2.185 0 0 1 2.182-2.182z"/><path d="M43.637 5.576V3.637A3.641 3.641 0 0 0 40 0H6.546a4.126 4.126 0 0 0-4.122 4.121v1.695H.727a.728.728 0 0 0 0 1.456h1.7v4.363h-1.7a.728.728 0 0 0 0 1.456h1.7v4.363h-1.7a.728.728 0 0 0 0 1.456h1.7v4.363h-1.7a.728.728 0 0 0 0 1.456h1.7v4.365h-1.7a.727.727 0 1 0 0 1.454h1.7v4.365h-1.7a.728.728 0 0 0 0 1.456h1.7v4.363h-1.7a.728.728 0 0 0 0 1.456h1.7v1.7A4.127 4.127 0 0 0 6.546 48H40a3.641 3.641 0 0 0 3.636-3.637v-1.935a3.623 3.623 0 0 0-1.476-2.908 3.623 3.623 0 0 0 1.477-2.908v-1.939a3.622 3.622 0 0 0-1.478-2.91 3.622 3.622 0 0 0 1.478-2.91v-1.945A3.62 3.62 0 0 0 42.16 24a3.624 3.624 0 0 0 1.477-2.91v-1.939a3.618 3.618 0 0 0-1.478-2.908 3.625 3.625 0 0 0 1.478-2.91v-1.939a3.62 3.62 0 0 0-1.477-2.908 3.629 3.629 0 0 0 1.477-2.91zm-1.454 36.847v1.939A2.185 2.185 0 0 1 40 46.544h-4.156a4.083 4.083 0 0 0 1-2.666v-3.635H40.007a2.186 2.186 0 0 1 2.176 2.18zm0-7.755v1.939a2.185 2.185 0 0 1-2.175 2.182H36.849v-6.3H40a2.185 2.185 0 0 1 2.183 2.179zm0-7.76v1.939A2.185 2.185 0 0 1 40 31.029h-3.151v-6.3H40a2.185 2.185 0 0 1 2.183 2.179zm0-7.758v1.939A2.185 2.185 0 0 1 40 23.271h-3.151v-6.3H40a2.185 2.185 0 0 1 2.183 2.179zm0-7.758v1.939A2.185 2.185 0 0 1 40 15.513h-3.151V9.21h3.156a2.186 2.186 0 0 1 2.178 2.182zm0-5.816a2.183 2.183 0 0 1-2.177 2.18h-3.883a.728.728 0 0 0-.728.729V43.88a2.669 2.669 0 0 1-2.667 2.666H6.546a2.669 2.669 0 0 1-2.667-2.666v-1.7h1.7a.728.728 0 0 0 0-1.456h-1.7v-4.358h1.7a.728.728 0 0 0 0-1.456h-1.7v-4.365h1.7a.727.727 0 1 0 0-1.454h-1.7v-4.365h1.7a.728.728 0 0 0 0-1.456h-1.7v-4.362h1.7a.728.728 0 0 0 0-1.456h-1.7v-4.363h1.7a.728.728 0 0 0 0-1.456h-1.7V7.27h1.7a.728.728 0 0 0 0-1.456h-1.7v-1.7a2.669 2.669 0 0 1 2.667-2.661H40a2.185 2.185 0 0 1 2.182 2.182v1.941z"/></g></svg></div>
                            <h1 className='font-bold   mt-2 text-3xl'>Expert Discussion</h1>
                            <p className='text-xl font-semibold mt-10'> 
                            Our team will connect with you to discuss your project requirements in detail to offer best available solutions.
                            </p>
                        </div>
                    </div>
                    <div class="h-96 w-full md:w-80 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 bg-green-300 p-4">
                        <div className='flex flex-col justify-center text-center items-center'>
                            <div className='mt-8'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43.637" height="48.004"><g fill="black"><path d="M24.983 20.767a.726.726 0 0 0-.1 1.023 3.6 3.6 0 0 1 .817 2.3v4.693H15.515v-4.694a3.646 3.646 0 0 1 .818-2.3.727.727 0 1 0-1.127-.919 5.1 5.1 0 0 0-1.146 3.22v5.42a.729.729 0 0 0 .727.729h11.636a.728.728 0 0 0 .728-.729v-5.42A5.091 5.091 0 0 0 26 20.871a.723.723 0 0 0-1.017-.104zM20.607 20.187a3.636 3.636 0 1 0-3.637-3.637 3.641 3.641 0 0 0 3.637 3.637zm0-5.818a2.183 2.183 0 1 1-2.182 2.182 2.185 2.185 0 0 1 2.182-2.182z"/><path d="M43.637 5.576V3.637A3.641 3.641 0 0 0 40 0H6.546a4.126 4.126 0 0 0-4.122 4.121v1.695H.727a.728.728 0 0 0 0 1.456h1.7v4.363h-1.7a.728.728 0 0 0 0 1.456h1.7v4.363h-1.7a.728.728 0 0 0 0 1.456h1.7v4.363h-1.7a.728.728 0 0 0 0 1.456h1.7v4.365h-1.7a.727.727 0 1 0 0 1.454h1.7v4.365h-1.7a.728.728 0 0 0 0 1.456h1.7v4.363h-1.7a.728.728 0 0 0 0 1.456h1.7v1.7A4.127 4.127 0 0 0 6.546 48H40a3.641 3.641 0 0 0 3.636-3.637v-1.935a3.623 3.623 0 0 0-1.476-2.908 3.623 3.623 0 0 0 1.477-2.908v-1.939a3.622 3.622 0 0 0-1.478-2.91 3.622 3.622 0 0 0 1.478-2.91v-1.945A3.62 3.62 0 0 0 42.16 24a3.624 3.624 0 0 0 1.477-2.91v-1.939a3.618 3.618 0 0 0-1.478-2.908 3.625 3.625 0 0 0 1.478-2.91v-1.939a3.62 3.62 0 0 0-1.477-2.908 3.629 3.629 0 0 0 1.477-2.91zm-1.454 36.847v1.939A2.185 2.185 0 0 1 40 46.544h-4.156a4.083 4.083 0 0 0 1-2.666v-3.635H40.007a2.186 2.186 0 0 1 2.176 2.18zm0-7.755v1.939a2.185 2.185 0 0 1-2.175 2.182H36.849v-6.3H40a2.185 2.185 0 0 1 2.183 2.179zm0-7.76v1.939A2.185 2.185 0 0 1 40 31.029h-3.151v-6.3H40a2.185 2.185 0 0 1 2.183 2.179zm0-7.758v1.939A2.185 2.185 0 0 1 40 23.271h-3.151v-6.3H40a2.185 2.185 0 0 1 2.183 2.179zm0-7.758v1.939A2.185 2.185 0 0 1 40 15.513h-3.151V9.21h3.156a2.186 2.186 0 0 1 2.178 2.182zm0-5.816a2.183 2.183 0 0 1-2.177 2.18h-3.883a.728.728 0 0 0-.728.729V43.88a2.669 2.669 0 0 1-2.667 2.666H6.546a2.669 2.669 0 0 1-2.667-2.666v-1.7h1.7a.728.728 0 0 0 0-1.456h-1.7v-4.358h1.7a.728.728 0 0 0 0-1.456h-1.7v-4.365h1.7a.727.727 0 1 0 0-1.454h-1.7v-4.365h1.7a.728.728 0 0 0 0-1.456h-1.7v-4.362h1.7a.728.728 0 0 0 0-1.456h-1.7v-4.363h1.7a.728.728 0 0 0 0-1.456h-1.7V7.27h1.7a.728.728 0 0 0 0-1.456h-1.7v-1.7a2.669 2.669 0 0 1 2.667-2.661H40a2.185 2.185 0 0 1 2.182 2.182v1.941z"/></g></svg></div>
                            <h1 className='font-bold   mt-2 text-3xl'>Grow with Us</h1>
                            <p className='text-xl font-semibold mt-10'> 
                            Doc-Labz will do its best to grow your business and make you stand firm in your respective industry
                            </p>
                        </div>
                    </div>
                  </div>
                </div>
              </div> */}
      </div>
    </>
  )
}

export default QuickStart