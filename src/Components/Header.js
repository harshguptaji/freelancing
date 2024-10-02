import React from 'react';
import { Parallax } from 'react-parallax';
import "../Styling/Header.css"

const Header = () => {
  return (
    <Parallax
      blur={0}
      bgImage={'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg'} // Path to your background image
      bgImageAlt="background"
      strength={900}
      className="header1-parallax-container">

        <div className="header1-content">
                <div className='header1-title'>
                    Serving The Entire Chemical Supply Chain's Distribution Business
                </div>

                <div className='header1-para'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, laudantium alias numquam commodi iure unde beatae officiis ratione optio aliquam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at voluptatem dicta fugiat quae consequatur sunt provident et asperiores beatae.
                </div>

                <div className='header1-btn'>
                    <button className='header1-btn-enquiry'>Place Enquiry Now</button>
                </div>
        </div>
      
    </Parallax>
  );
};

export default Header;