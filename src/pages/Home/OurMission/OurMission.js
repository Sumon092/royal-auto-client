import React from 'react';
import './OurMission.css'

const OurMission = () => {
    return (
        <div className='container mb-5'>
            <div className="mission">
                <div className=''>
                    <img className='w-100 img-fluid' src="https://i.ibb.co/0GTGWZJ/gallery-3-1024x721.jpg" alt="" />
                </div>
                <div className='ms-5 mission-text w-100'>
                    <p className="mission-button">Our Mission</p>
                    <h2>At autoRoyal, we want to provide
                        <br />
                        you with the best automotive
                        <br /> experience possible.
                    </h2>
                    <p className='text-muted'>
                        From researching the vehicle you want to test
                        <br /> driving your options, we’re here to help with our
                        <br /> knowledgeable sales staff and an impressive
                        <br /> selection of cars, trucks, and SUVs.!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurMission;