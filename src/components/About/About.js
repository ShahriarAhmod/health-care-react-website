import React from 'react';
import about from '../../images/about.png';

const About = () => {
    return (
        <div>
           <div className="d-flex align-items-center justify-content-between ms-5 py-5" style={{backgroundColor: 'rgb(247, 248, 255)'}}>
            <div>
                <h1 className="banner-font">Who We Are?</h1>
                <p className="fs-4">
                    We are the Hearty people trying to provide best medical facilities to the people!
                </p>

                <button className="btn btn-secondary">Visit Us</button>
            </div>
            <div>
            <img className="ms-4 about" src={about} alt="" style={{width: '700px' }}/>
            </div>
        </div>
        <div className="text-center p-5 my-5">
            <h1 className="text-center fw-bold fs-1">What is Our Motive?</h1>
            <p className="fs-4">
                We want to provide the best medical facility for our patients. We also give free medical treatment to the poor patients. We provide teli-medicine so can serve people very well.
            </p>


        </div>
        </div>
    );
};

export default About;