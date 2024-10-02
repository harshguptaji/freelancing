import React from 'react'
import "../Styling/Work.css";
import container from "../Assets/container.png";
const Work = () => {
  return (
    <section className='work-section'>
      <h4 className='work-title'>How We Work</h4>
      <p className='work-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <div className='work-btn-div'>
        <button className='work-btn'>Place Enquiry Now</button>
      </div>
      <div className='work-ribbon'></div>
      <div className='work-img-div-content'>
        <div className='work-img-div'>
            <img className='work-img' src={container} alt="container" />
        </div>
        <div className='work-img-content'>
            <div className='work-img-content1'>
                <h5 className='work-img-content1-title'>01.</h5>
                <h6 className='work-img-content1-sub-title'>Order Placement.</h6>
                <p className='work-img-content1-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
            <div className='work-img-content2'>
                <h5 className='work-img-content1-title'>02.</h5>
                <h6 className='work-img-content1-sub-title'>Transportation.</h6>
                <p className='work-img-content1-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
        </div>
        <div className='work-img-content'>
        <div className='work-img-content1'>
                <h5 className='work-img-content1-title'>03.</h5>
                <h6 className='work-img-content1-sub-title'>Route Planning.</h6>
                <p className='work-img-content1-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
            <div className='work-img-content2'>
                <h5 className='work-img-content1-title'>04.</h5>
                <h6 className='work-img-content1-sub-title'>Training & Marketing.</h6>
                <p className='work-img-content1-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Work
