import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Home = () => {
    const images = [
       "http://localhost:3000/image.jpg", 
    "http://localhost:3000/image-2.jpg",
       "http://localhost:3000/image-1.jpg",
       
       
    ];

    return (
      <div>
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>This years program. The disciplined services represented are ,the kenya police service,kenya wildlife service,kenya forest service,administration police service and national youth service</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span> Shoot first, deny later. Yesterday and today. We must not allow Kenya police service to be judge, jury and executioners. The pandora's box must not be shut because of the worms. </span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>"I am glad the president willim ruto has appointed me to executive of kenya police service" eliud comments</span>
                </div>
            </div>
        </Slide>
        </div>
    );
};

export default Home;