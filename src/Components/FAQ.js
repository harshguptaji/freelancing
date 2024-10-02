import React, { useState } from 'react';
import "../Styling/FAQ.css";
import img1 from "../Assets/arrow-3.png"
const FAQ = () => {
    const [toggle,setToggle] = useState(false);
    const [toggle1,setToggle1] = useState(false);
    const [toggle2,setToggle2] = useState(false);
    const [toggle3,setToggle3] = useState(false);
    const [toggle4,setToggle4] = useState(false);
    const [toggle5,setToggle5] = useState(false);

    

  return (
    <>
        <main className='main-faq'>
            <div className='main-faq-title'>Frequently asked questions</div>
            <div className='main-faq-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            <section className='main-faq-1'>
                <div className='faq-1'>
                    <div className='faq-1-1'></div>
                    <div className='faq-1-2'>What is a Payment Gateway</div> 
                    <div>
                        <img className='faq-1-3' onClick={() => setToggle(!toggle)} src={img1} alt="img1" />
                    </div>
                </div>
                <div 
                    className={toggle ? "faq-11 ans-none" : "faq-11"}
                >
                    <div className='faq-11-1'></div>
                    <div className='faq-11-2'>Do I need to pay to Instapay even when there is no transaction going on in my business?</div>
                    <div>
                        <img className='faq-11-3' src={img1} alt="img1" />
                    </div>
                </div>
                <div className='faq-2'>
                    <div className='faq-1-1'></div>
                    <div className='faq-1-2'>What is a Payment Gateway</div>
                    <div>
                        <img className='faq-1-3' onClick={() => setToggle1(!toggle1)} src={img1} alt="img1" />
                    </div>
                </div>
                <div 
                    className={toggle1 ? "faq-22 ans-none" : "faq-22"}
                >
                    <div className='faq-11-1'></div>
                    <div className='faq-11-2'>Do I need to pay to Instapay even when there is no transaction going on in my business?</div>
                    <div>
                        <img className='faq-11-3' src={img1} alt="img1" />
                    </div>
                </div>
                <div className='faq-3'>
                    <div className='faq-1-1'></div>
                    <div className='faq-1-2'>What is a Payment Gateway</div>
                    <div>
                        <img className='faq-1-3' onClick={() => setToggle2(!toggle2)} src={img1} alt="img1" />
                    </div>
                </div>
                <div 
                    className={toggle2 ? "faq-33 ans-none" : "faq-33"}
                >
                    <div className='faq-11-1'></div>
                    <div className='faq-11-2'>Do I need to pay to Instapay even when there is no transaction going on in my business?</div>
                    <div>
                        <img className='faq-11-3' src={img1} alt="img1" />
                    </div>
                </div>
                <div className='faq-4'>
                    <div className='faq-1-1'></div>
                    <div className='faq-1-2'>What is a Payment Gateway</div>
                    <div>
                        <img className='faq-1-3' onClick={() => setToggle3(!toggle3)} src={img1} alt="img1" />
                    </div>
                </div>
                <div 
                    className={toggle3 ? "faq-44 ans-none" : "faq-44"}
                >
                    <div className='faq-11-1'></div>
                    <div className='faq-11-2'>Do I need to pay to Instapay even when there is no transaction going on in my business?</div>
                    <div>
                        <img className='faq-11-3' src={img1} alt="img1" />
                    </div>
                </div>
                <div className='faq-5'>
                    <div className='faq-1-1'></div>
                    <div className='faq-1-2'>What is a Payment Gateway</div>
                    <div>
                        <img className='faq-1-3' onClick={() => setToggle4(!toggle4)} src={img1} alt="img1" />
                    </div>
                </div>
                <div 
                    className={toggle4 ? "faq-55 ans-none" : "faq-55"}
                >
                    <div className='faq-11-1'></div>
                    <div className='faq-11-2'>Do I need to pay to Instapay even when there is no transaction going on in my business?</div>
                    <div>
                        <img className='faq-11-3' src={img1} alt="img1" />
                    </div>
                </div>
                <div className='faq-6'>
                    <div className='faq-1-1'></div>
                    <div className='faq-1-2'>What is a Payment Gateway</div>
                    <div>
                        <img className='faq-1-3' onClick={() => setToggle5(!toggle5)} src={img1} alt="img1" />
                    </div>
                </div>
                <div 
                    className={toggle5 ? "faq-66 ans-none" : "faq-66"}
                >
                    <div className='faq-11-1'></div>
                    <div className='faq-11-2'>Do I need to pay to Instapay even when there is no transaction going on in my business?</div>
                    <div>
                        <img className='faq-11-3' src={img1} alt="img1" />
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default FAQ
