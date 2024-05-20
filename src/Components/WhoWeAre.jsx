import React from 'react';
import { Fade } from 'react-awesome-reveal';

const WhoWeAre = () => {
    return (
        <div className='px-10 'id="about">
            <Fade cascade>
                <h1 className='text-center mx-auto text-5xl font-bold mt-20'>Who We Are?</h1>
            </Fade>
            <div className='px-0 md:px-20 mt-10'>
                <p>
                    DocLabz is a premier IT consulting firm dedicated to providing exceptional services in web development, UX/UI design, and digital marketing.
                </p>
                <p>
                    We specialize in crafting unique and innovative solutions tailored to meet the specific needs of our clients. Our team of experts is committed to delivering excellence in every project, ensuring client satisfaction and success.
                </p>
                <p>
                    At DocLabz, we believe in the power of technology to transform businesses and drive growth. Whether you're looking to create a stunning website, optimize user experience, or boost your online presence, we've got you covered.
                </p>
                <p>
                    With our comprehensive range of services, we help businesses thrive in the digital landscape, empowering them to reach their full potential and achieve their goals.
                </p>
            </div>
        </div>
    );
};

export default WhoWeAre;
