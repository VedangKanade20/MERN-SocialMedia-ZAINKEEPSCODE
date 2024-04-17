import React from 'react';
import './Advertise.css';

const Advertise = () => {
    return (
        <div className="advertise">
            <h1>Advertisements : </h1>
            <img src={require('../../img/new-frooti-ad-7.jpg')} alt="Advertisement"  />
            <h4 style={{ cursor: 'pointer' }}>More Advertises.... </h4 >
        </div>

    );
};

export default Advertise;