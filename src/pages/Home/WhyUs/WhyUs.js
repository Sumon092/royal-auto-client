import React from 'react';
import image1 from '../../../images/review/undraw_credit_card_payment_12va.svg'
import image2 from '../../../images/review/undraw_business_deal_cpi9.svg'
import image3 from '../../../images/review/undraw_fast_car_p4cu-2.svg'
import './WhyUs.css'

const WhyUs = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col col-md-4">
                    <img style={{ width: "300px" }} src={image1} alt="" />
                    <h3 className='mt-3 mb-3'>In House Financing </h3>
                    <p className="text-muted">
                        We are open to offer you in house
                        <br /> financing to save you money!
                    </p>
                    <button className='review-button'>Apply Now</button>

                </div>
                <div className="col col-md-4">

                    <img style={{ width: "300px" }} src={image2} alt="" />
                    <h3 className='mt-3 mb-3'>Trusted car dealers </h3>
                    <p className="text-muted">
                        With more than 15 years on the market we
                        <br />
                        know how to care about our customers.
                    </p>
                    <button className='review-button'>get started</button>

                </div>
                <div className="col col-md-4">

                    <img style={{ width: "300px" }} src={image3} alt="" />
                    <h3 className='mt-3 mb-3'>Service and Maintenance</h3>
                    <p className="text-muted">
                        Our service department maintain your car
                        <br />
                        to stay safe on the road and off the road.
                    </p>
                    <button className='review-button mt-3'>learn more</button>
                </div>
            </div>

        </div>
    );
};

export default WhyUs;