import React from 'react';
const About = () => {
    return (
        <section class="h-full gradient-form bg-gray-50 md:h-screen">
            <div class="container h-full">
                <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div class="xl:w-10/12">
                        <div class="block bg-green-200 shadow-lg rounded-lg">
                            <div class="lg:flex lg:justify-center lg:items-center g-0">
                                <div class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                                    <div class="text-white bg-green-300 px-4 py-6 md:p-12 md:mx-6">
                                        <h4 class="text-2xl font-semibold font-serif text-black mb-6">Hello!  <span className='text-prpule'>I'm <br />Erfath Parvez</span> </h4>
                                        <p class="text-xl font-semibold font-serif text-black">
                                            Jr. Web Developer
                                        </p>
                                        <br />
                                        <p className='text-black'>I am a Junior Front-end web developer. Now, I am working on frontend technologies and also working on backend technologies. I have completed some simple projects using react.js. I'm highly passionate about MERN Stack (MongoDB, Express.js, React JS, Node.js). I love to do Coding. I count myself as a hardworking person.</p>
                                        <br />                                       
                                        <p className='text-gray-600 font-serif font-medium border-t-2 py-2'>Contact:</p>
                                        <p className='text-gray-600 font-serif font-medium'>Cell:- +8801873844252</p>
                                        <p className='text-gray-600 font-serif font-medium'>Email:- erfathparvez1@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;