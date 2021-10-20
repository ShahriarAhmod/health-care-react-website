import React from 'react';

const Banner = () => {
    return (
        <div className="banner">
            <div className="mt-5 py-5 ms-5 ps-5">
            <h1 className="fw-bold fs-1 mt-5 pt-5">Welcome to <br/><span style={{color: 'rgb(21, 95, 207)'}}> Northern Medical </span></h1>
            <p className="fs-4">Warmly welcome you to our hospital <br/> and wish you a very happy life.</p>
            <button className="btn btn-dark" >Explore</button>
            </div>   
        </div>
    );
};

export default Banner;