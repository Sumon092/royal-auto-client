import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import bannerImage from '../../../images/banner/car.png'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className='container d-flex justify-center align-items-center w-100 mt-5'>
                <div className="banner-tet w-50">
                    <h1 className='fw-bold banner-title'>Find Your Next Car at
                        <br /> Auto Royal
                    </h1>
                    <p className='banner-text'>
                        Allow us to guide you through the innovative stress
                        <br />
                        free approach in finding your dream car.
                    </p>
                </div>
                <div className="banner-image w-50">
                    <img style={{ width: '610px' }} className='img-fluid' src={bannerImage} alt="" />
                </div>
            </div>
            <div className='container'>
                <div className="search-option d-flex justify-content-between">
                    <div className="car-name">
                        <h5>Make</h5>
                        <DropdownButton id="dropdown-item-button" title="Any">
                            <Dropdown.ItemText></Dropdown.ItemText>
                            <Dropdown.Item as="button">Mazda</Dropdown.Item>
                            <Dropdown.Item as="button">Audi</Dropdown.Item>
                            <Dropdown.Item as="button">BMW</Dropdown.Item>
                            <Dropdown.Item as="button">Honda</Dropdown.Item>
                            <Dropdown.Item as="button">Volvo</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className="car-model">
                        <h5>Model</h5>
                    </div>
                    <div className="price">
                        <h5>price</h5>
                    </div>
                    <div><button className='btn btn-danger mt-5 p-2 ps-5 pe-5'>Search</button></div>
                </div>
            </div>
        </>
    );
};

export default Banner;