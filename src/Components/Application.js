import React from 'react'
import "../Styling/Application.css";
import img1 from "../Assets/application-1.png";
import img2 from "../Assets/application-2.png";
import img3 from "../Assets/application-3.png";
import img4 from "../Assets/application-4.png";


const Application = () => {
  return (
    <>
      <section className='application-main'>
        <div className='application-title'>Application Industries Or Market</div>
        <div className='application-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet itaque placeat recusandae temporibus aut animi explicabo adipisci quo cumque, similique culpa minima nemo quia. In, ipsa. Quisquam ab dicta consequatur?</div>

        <div className='flex-div'>
          <ul>
            <li>
              <div className='flex-div-1'>
                    <div className='flex-div-1-img-div'>
                        <img className='flex-div-1-img' src={img1} alt="img1" />
                    </div>
                    <div className='flex-div-1-title'>
                        Glass Chemicals
                    </div>
                    <div className='flex-div-1-para'> 
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vero neque debitis ipsum sint excepturi quam voluptates quae rerum inventore.
                    </div>
              </div>
            </li>
            <li>
            <div className='flex-div-2'>
                    <div className='flex-div-2-img-div'>
                        <img className='flex-div-2-img' src={img2} alt="img2" />
                    </div>
                    <div className='flex-div-2-title'>
                        Ceramic Chemicals
                    </div>
                    <div className='flex-div-2-para'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vero neque debitis ipsum sint excepturi quam voluptates quae rerum inventore.
                    </div>
              </div>
            </li>
          </ul>

          <ul>
            <li>
            <div className='flex-div-3'>
                    <div className='flex-div-3-img-div'>
                        <img className='flex-div-3-img' src={img3} alt="img3" />
                    </div>
                    <div className='flex-div-3-title'>
                        Paint and Polymer Chemical
                    </div>
                    <div className='flex-div-3-para'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vero neque debitis ipsum sint excepturi quam voluptates quae rerum inventore.
                    </div>
              </div>
            </li>
            <li>
            <div className='flex-div-4'>
                    <div className='flex-div-4-img-div'>
                        <img className='flex-div-4-img' src={img4} alt="img4" />
                    </div>
                    <div className='flex-div-4-title'>
                        Cosmetic & Pharmaceuticals
                    </div>
                    <div className='flex-div-4-para'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vero neque debitis ipsum sint excepturi quam voluptates quae rerum inventore.
                    </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Application
