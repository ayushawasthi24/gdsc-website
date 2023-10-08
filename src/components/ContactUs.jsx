import React from 'react';
import './ContactUs.css';
import {FaEnvelope, FaLinkedin,FaGlobe} from 'react-icons/fa'

const ContactUs = () => {
    return (
    <div className="container">
        <div className='row'>
        <h1>Contact Us</h1>
        </div>
        <div className='content'>
            <div className='left-side'>
                <div className='centerdiv'>
                    <a href="#"><FaEnvelope className='setter' /></a>
                    <a href="#"><FaLinkedin className='setter linkedin' /></a>
                    <a href="#"><FaGlobe className='setter' /></a>
                </div>
            </div>
            <div className='map'>
            <iframe title='iitmap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5685680821744!2d75.91814817503867!3d22.520364634883258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIndian%20Institute%20Of%20Technology%20(IIT)%2C%20Indore!5e0!3m2!1sen!2sin!4v1693555440269!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
    );
};

export default ContactUs;