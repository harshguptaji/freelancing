import React from 'react'
import { Parallax } from 'react-parallax';
import "../Styling/Distributors.css"
const Distributors = () => {
  return (
    <Parallax
    blur={0}
    bgImage={'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg'} // Path to your background image
    bgImageAlt="background"
    strength={900}
    className="distributors1--parallax-container">

      <div className="distributors1--content">
              <div className='distributors1--title'>
                  Distributors And Marketing Agents
              </div>

              <div className='distributors1--para'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, laudantium alias numquam commodi iure unde beatae officiis ratione optio aliquam.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at voluptatem dicta fugiat quae consequatur sunt provident et asperiores beatae.
              </div>

              <div className='distributors1--btn'>
                  <button className='distributors1--btn-enquiry'>Check More</button>
              </div>
      </div>
    
  </Parallax>
  )
}

export default Distributors
