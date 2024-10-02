import React from 'react'
import "../Styling/Reach.css";
import shipping from "../Assets/shipping.png";

const Reach = () => {
  return (
    <section className='reach-section'>
      
      <div className='reach-img-content'>
        <h4 className='reach-img-content-title'>Reach To Us Now</h4>
        <p className='reach-img-content-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <button className='reach-img-content-btn'>Contact Now</button>
        <div className='reach-img-div'>
            <img className='reach-img' src={shipping} alt="shipping" />
      </div>
      </div>
    </section>
  )
}

export default Reach
