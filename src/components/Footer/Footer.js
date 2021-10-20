import React from 'react';

const Footer = () => {
    return (
        <div className="p-3" style={{backgroundColor: 'rgb(16, 28, 46)'}}>
        <div className="text-center text-white fs-6 mt-2">
            <h3 class="fw-bold text-center">Northern Medical</h3>
            <h4 className="mb-3">Follow Us</h4>
                        <i class="fab fa-facebook-square fs-2"></i>
                        <i class="fab fa-instagram-square fs-2 ps-2"></i>
                        <i class="fab fa-linkedin fs-2 ps-2"></i>
                        <i class="fab fa-google-plus-square fs-2 ps-2"></i>
            <p>Copyright <i class="far fa-copyright"></i> 2021 by Northern Medical</p>
        </div>
    </div>
    );
};

export default Footer;