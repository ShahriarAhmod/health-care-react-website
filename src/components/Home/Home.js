import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Doctors from '../Doctors/Doctors';
import Department from '../Department/Department';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Doctors />
            <Department/>
        </div>
    );
};

export default Home;