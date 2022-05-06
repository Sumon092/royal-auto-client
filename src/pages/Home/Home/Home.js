import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            {
                <Loading />
            }
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;