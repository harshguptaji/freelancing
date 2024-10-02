import React from 'react';
import "../Styling/Finder.css";


const Finder = () => {
  return (
    <>
        <main className='find-main'>
            <div className='find-main-title'>Find Your Product Requirement</div>
            <div className='find-main-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            <div className='find-main-search'>
                <input className='find-search' type="text" placeholder='search'/>
                <button className='find-btn'>Search Now</button>
            </div>

            <section className='find-section'>
                <div className='find-section-1'>
                    <div className='find-section-11'>
                        <div className='find-section-1-1'></div>
                        <div className='find-section-1-1'></div>
                    </div>
                    <div className='find-section-12'>
                        <div className='find-section-1-1'></div>
                        <div className='find-section-1-1'></div>
                    </div>
                    
                    
                </div>
                <div className='find-section-2'>
                    <div className='find-section-21'>
                        <div className='find-section-1-1'></div>
                        <div className='find-section-1-1'></div>
                    </div>
                    <div className='find-section-22'>
                        <div className='find-section-1-1'></div>
                        <div className='find-section-1-1'></div>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Finder
