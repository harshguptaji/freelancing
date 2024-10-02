import React from 'react';
import "../Styling/About.css";
import img1 from "../Assets/about-1.png"
import img2 from "../Assets/about-2.png"
import img3 from "../Assets/about-3.png"
import img4 from "../Assets/about-4.png"

const About = () => {
  return (
    <>
        <main id='abt'>
            <div className='about-title'>
                About ADP Trading Company
            </div>
            <div className='about-para'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam inventore perferendis similique eaque nostrum sequi molestias veniam magnam, tempora omnis!
            </div>

            <section className='about-section'>
                <ul>
                    <li>
                        <div className='about-section-1'>
                            <div className='about-section-1-img-div'>
                                <img className='about-section-1-img' src={img1} alt="img1" />
                            </div>
                            <div className='about-section-1-title'>
                                Best Quality
                            </div>
                            <div className='about-section-1-para'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, laborum veritatis dolorum hic quis nulla modi qui corporis iste. Vitae.
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className='about-section-2'>
                            <div className='about-section-2-img-div'>
                                <img className='about-section-2-img' src={img2} alt="img2" />
                            </div>
                            <div className='about-section-2-title'>
                                Distribution
                            </div>
                            <div className='about-section-2-para'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, laborum veritatis dolorum hic quis nulla modi qui corporis iste. Vitae.
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className='about-section-3'>
                            <div className='about-section-3-img-div'>
                                <img className='about-section-3-img' src={img3} alt="img3" />
                            </div>
                            <div className='about-section-3-title'>
                                Export / Import
                            </div>
                            <div className='about-section-3-para'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, laborum veritatis dolorum hic quis nulla modi qui corporis iste. Vitae.
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className='about-section-4'>
                            <div className='about-section-4-img-div'>
                                <img className='about-section-4-img' src={img4} alt="img4" />
                            </div>
                            <div className='about-section-4-title'>
                                On Demand
                            </div>
                            <div className='about-section-4-para'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, laborum veritatis dolorum hic quis nulla modi qui corporis iste. Vitae.
                            </div>
                        </div>
                    </li>
                </ul>
            </section>

        </main>
    </>
  )
}

export default About
