import React from 'react';
import Emergency from '../../images/emergency.png';
import Clock from '../../images/clock.png';
import Appointment from '../../images/appointment.png';
import './Department.css';

const Department = () => {
    return (
        // Details in the homepage
        <div className="pt-5 mt-5 mb-3">
            <h1 className="text-center fw-bold" style={{ color: 'rgb(46, 140, 163)' }}>We are always available for you</h1>
            <div>
                <div className="department-container p-5 mx-5 mb-5">
                    <div className=" p-5 border rounded-3 m-4 text-center" style={{ backgroundColor: 'rgb(247, 230, 234)' }}>
                        <img className="emergency p-2 text-center" src={Emergency} alt="" style={{ width: '200px', height: '200px' }} />

                        <div className="">
                            <h5 className="fw-bold">Emergency Services</h5>
                            <p>Get 24/7 Emergency Support from us</p>
                        </div>

                    </div>
                    <div className="p-5 border rounded-3 m-4 text-center" style={{ backgroundColor: 'rgb(247, 230, 234)' }}>
                        <div>
                            <img className="clock  p-2" src={Clock} alt="" style={{ width: '150px', height: '150px' }} />
                        </div>
                        <div className="p-2">
                            <h5 className="fw-bold mt-3">Opening Hour</h5>
                            <p>9:00 AM - 11:00 PM</p>
                            <p>Saturday-Friday</p>
                            <p>Emergency : Everyday</p>
                        </div>

                    </div>
                    <div className="p-5 border rounded-3 m-4 text-center" style={{ backgroundColor: 'rgb(247, 230, 234)' }}>
                        <div>
                            <img className="appointment p-2" src={Appointment} alt="" style={{ width: '150px', height: '150px' }} />
                        </div>
                        <div className="text-center">
                        <h5 className="fw-bold mt-3">Opening Hour</h5>
                            <p>Call us to get our appointments</p>
                            <p>+9803533456</p>
                            <p>+9802356890</p>
                        </div>

                    </div>

                </div>

            </div>



        </div>
    );
};

export default Department;