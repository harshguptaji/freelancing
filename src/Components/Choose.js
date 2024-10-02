import React from 'react'
import "../Styling/Choose.css";
import ship from "../Assets/ship.png";
import mobship from "../Assets/mob-ship.png";
const Choose = () => {
  return (
    <section className='choose-section'>
      <h4 className='choose-title'>Why People Choose Us</h4>
      <p className='choose-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <div className='choose-img-div-content'>
        <div className='choose-img-div'>
            <img className='choose-img' src={ship} alt="ship" />
        </div>
        <div className='choose-mob-img-div'>
            <img className='choose-mob-img' src={mobship} alt="mobship" />
        </div>
        <div className='choose-img-content'>
            <div className='choose-img-content1'>
                <h5 className='choose-img-content1-title'>01.</h5>
                <h6 className='choose-img-content1-sub-title'>Order Placement.</h6>
                <p className='choose-img-content1-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
            <div className='choose-img-content2'>
                <h5 className='choose-img-content1-title'>02.</h5>
                <h6 className='choose-img-content1-sub-title'>Transportation.</h6>
                <p className='choose-img-content1-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
        </div>
        <div className='choose-img-content'>
            <div className='choose-img-content1'>
                <h5 className='choose-img-content1-title'>03.</h5>
                <h6 className='choose-img-content1-sub-title'>Order Placement.</h6>
                <p className='choose-img-content1-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
            <div className='choose-img-content2'>
                <h5 className='choose-img-content1-title'>04.</h5>
                <h6 className='choose-img-content1-sub-title'>Transportation.</h6>
                <p className='choose-img-content1-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
        </div>
        <div className='choose-img-content'>
            <div className='choose-img-content1'>
                <h5 className='choose-img-content1-title'>05.</h5>
                <h6 className='choose-img-content1-sub-title'>Order Placement.</h6>
                <p className='choose-img-content1-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
            <div className='choose-img-content2'>
                <h5 className='choose-img-content1-title'>06.</h5>
                <h6 className='choose-img-content1-sub-title'>Transportation.</h6>
                <p className='choose-img-content1-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Choose
