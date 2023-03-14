import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { fontSize, padding } from '@mui/system';
const Homepage = () => {
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
        
        <footer class="bg-dark-1">
  <section id="footer" class="py-5">
    <div class="container text-center">
      <a href="#" class="twitter"></a>
      <a href="#" class="linkedin"></a>
      <a href="#" class="facebook"></a>
      <a href="#" class="skype"></a>
      <a href="#" class="flickr"></a>
      <h6 class="m-0 mt-4 text-center text-black text-capitalize">Copyright &copy; 2023 designed by martin kavindu</h6>
    </div>
  </section>
</footer>
</div>

  )
}
export default Homepage