import React from 'react';
import Surgeon from '../../images/img1.jpg';
import Cardiologist from '../../images/img2.jpg';
import Psychiatrist from '../../images/img3.jpg';
import Pediatrician from '../../images/img4.jpg';
import Gynecologist from '../../images/img5.jpg';
import Neurologist from '../../images/img6.jpg';
import './Doctors.css';

const Doctors = () => {
    return (
        <div className = "container">
            <div className="pt-5 mt-5 mb-3">
            <h1 className="text-center fw-bold my-5" style={{color: 'rgb(61, 56, 122)'}}>Our Professional Doctors</h1>
            <div>
                <div className="department-container">
                    <div className=" p-1 border rounded-3" style={{backgroundColor: 'rgb(251, 242, 255)'}}>
                        <div>
                        <img className="surgeon p-2" src={Surgeon} alt="" style={{width: '350px', height:'350px'}}/>
                        </div>
                        <div className="p-2 text-center" style={{backgroundColor: 'rgb(204, 215, 217)'}}>
                            <h4>Dr. Alfred Gred</h4>
                            <h6 style={{color: 'rgb(62, 70, 181)'}}>Surgeon</h6>
                            <p>Hey! I,m a professional surgeon and always at your service.</p>
                        </div>

                    </div>
                    <div className="p-1  border rounded-3" style={{backgroundColor: 'rgb(251, 242, 255)'}}>
                        <div>
                        <img className="Cardiologist p-2" src={Cardiologist} alt="" style={{width: '350px', height:'350px'}}/>
                        </div>
                        <div className="p-2 text-center" style={{backgroundColor: 'rgb(204, 215, 217)'}}>
                            <h4>Dr. Mandy Jess</h4>
                            <h6 style={{color: 'rgb(62, 70, 181)'}}>Cardiologist</h6>
                            <p>Hi! I,m a cardiologist and promise to take care of your cardiac health.</p>
                        </div>

                    </div>
                    <div className="p-1 border rounded-3"style={{backgroundColor: 'rgb(251, 242, 255)'}}>
                        <div>
                        <img className="Psychiatrist p-2" src={Psychiatrist} alt="" style={{width: '350px', height:'350px'}}/>
                        </div>
                        <div className="p-2 text-center" bg-primary style={{backgroundColor: 'rgb(204, 215, 217)'}}>
                            <h4>Dr. James Den</h4>
                            <h6 style={{color: 'rgb(62, 70, 181)'}}>Psychiatrist</h6>
                            <p>Hey! I,m always there for you in relieving your mental stress and depression.</p>
                        </div>

                    </div>

                    <div className="p-1 border rounded-3"style={{backgroundColor: 'rgb(251, 242, 255)'}}>
                        <div>
                        <img className=" Pediatrician p-2" src={ Pediatrician} alt="" style={{width: '350px', height:'350px'}}/>
                        </div>
                        <div className="p-2 text-center" style={{backgroundColor: 'rgb(204, 215, 217)'}}>
                            <h4>Dr. Anny Watson</h4>
                            <h6 style={{color: 'rgb(62, 70, 181)'}}>Pediatrician</h6>
                            <p>Hlw! I,m a pediatrician and always at your child's service.</p>
                        </div>

                    </div>
                    <div className="p-1 border rounded-3" style={{backgroundColor: 'rgb(251, 242, 255)'}}>
                        <div>
                        <img className="gynecologist p-2" src={Gynecologist} alt="" style={{width: '350px', height:'350px'}}/>
                        </div>
                        <div className="p-2 text-center" style={{backgroundColor: 'rgb(204, 215, 217)'}}>
                            <h4>Dr. Tomas Cruise</h4>
                            <h6 style={{color: 'rgb(62, 70, 181)'}}>Gynecologist</h6>
                            <p>Hey! I,m there for you to provide best facilities to you and your baby.</p>
                        </div>

                    </div>
                    <div className="p-1 border rounded-3" style={{backgroundColor: 'rgb(251, 242, 255)'}}>
                        <div>
                        <img className="Neurologist p-2" src={Neurologist} alt="" style={{width: '350px', height:'350px'}}/>
                        </div>
                        <div className="p-2 text-center" style={{backgroundColor: 'rgb(204, 215, 217)'}}>
                            <h4>Dr. Ben Alfred</h4>
                            <h6 style={{color: 'rgb(62, 70, 181)'}}>Neurologist</h6>
                            <p>Hey! I,m a neurologist and always at your best service.</p>
                        </div>

                    </div>
                    </div>

                    </div>
                    

                    
                </div> 
        </div>
    );
};

export default Doctors;