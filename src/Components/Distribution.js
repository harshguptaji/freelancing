import React from 'react'
import { Parallax } from 'react-parallax';
import "../Styling/Distribution.css"
import img1 from "../Assets/dis-1.png";
import img2 from "../Assets/dis-2.png";
import img3 from "../Assets/dis-3.png";
import img4 from "../Assets/dis-4.png";
import img5 from "../Assets/arrow-1.png"

const Distribution = () => {
  return (
    <>
        <Parallax
            blur={0}
            bgImage={'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg'} // Path to your background image
            bgImageAlt="background"
            strength={900}
            className="distribution1--parallax-container">
                <div className="distribution1--content">
                        <div className='distribution1--title'>
                            Distribution Of Products Overseas
                        </div>

                        <div className='distribution1--para'>
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>

                        <div className='distribution1--btn'>
                            <button className='distribution1--btn-enquiry'>Discover More</button>
                        </div>
                        

                        <div className='dis-flex'>
                            <div className='dis-flex-1'>
                                <div className='dis-flex-1-img-div'>
                                    <div className='div-center'>
                                        <img className='dis-flex-1-img' src={img1} alt="img1" />
                                    </div>
                                </div>
                                <div className='dis-flex-1-title'>
                                    Explosure Your Requirements
                                </div>
                            </div>
                            <div className='dis-flex-2'>
                                <img className='dis-flex-2-img' src={img5} alt="img5" />
                            </div>
                            <div className='dis-flex-1'>
                                <div className='dis-flex-1-img-div'>
                                    <div className='div-center'>
                                        <img className='dis-flex-1-img' src={img2} alt="img1" />
                                    </div>
                                </div>
                                <div className='dis-flex-1-title'>
                                    Arranging Your Requirements 
                                </div>
                            </div>
                            <div className='dis-flex-2'>
                                <img className='dis-flex-2-img' src={img5} alt="img5" />
                            </div>
                            <div className='dis-flex-1'>
                                <div className='dis-flex-1-img-div'>
                                    <div className='div-center'>
                                        <img className='dis-flex-1-img' src={img3} alt="img1" />
                                    </div>
                                </div>
                                <div className='dis-flex-1-title'>
                                    Arrange Logistics For Product
                                </div>
                            </div>
                            <div className='dis-flex-2'>
                                <img className='dis-flex-2-img' src={img5} alt="img5" />
                            </div>
                            <div className='dis-flex-1'>
                                <div className='dis-flex-1-img-div'>
                                    <div className='div-center'>
                                        <img className='dis-flex-1-img' src={img4} alt="img1" />
                                    </div>
                                </div>
                                <div className='dis-flex-1-title'>
                                    Adapt and Promote Through Shipment
                                </div>
                            </div>
                        </div>
                </div>
      
        </Parallax>
    </>
  )
}

export default Distribution;
