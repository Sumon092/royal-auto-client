import { getAuth } from 'firebase/auth';
import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import OurMission from '../OurMission/OurMission';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    const [loading] = useCreateUserWithEmailAndPassword(auth)
    return (
        <div>
            <Banner></Banner>

            {
                loading ? <Inventories></Inventories> : <Loading />
            }
            <OurMission></OurMission>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;