import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const home= () => {
    const images = [
       "http://localhost:3000/image-1.jpeg", 
    "http://localhost:3000/image-2.jpeg",
       "http://localhost:3000/image-3.jpeg",
       
       
    ];

    return (
      <div>
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Police recruitment</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span> police on service </span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Huduma kwa wote</span>
                </div>
            </div>
        </Slide>
        </div>
    );
};

export default home;