import React, { useRef } from 'react';

import "../Styling/Feedback.css"

const Feedback = () => {
    const listRef = useRef(null);

    const handleClick = (direction) => {
        if (listRef.current) {
          const itemWidth = listRef.current.firstChild.offsetWidth;
          const scrollAmount = direction === 'previous' ? -itemWidth : itemWidth;
          listRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      };

  return (
    <>
        <main>
            <div className='feedback-title'>What Our Client Says</div>
            <div className='feedback-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            <div className='feedback-btn-div'>
                <button className='feedback-btn'>Send Feedback</button>
            </div>

            <div className='new-div'>
            <div className="list-wrapper">
                <ul className="list" ref={listRef}>
                    <li className="item1">
                        <div className='item-title'>Ayush Bansal</div>
                        <div className='item-para'>Glass Industry Founder</div>
                        <div className='item-sub'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                    </li>
                    <li className="item">
                        <div className='item-title'>Ayush Bansal</div>
                        <div className='item-para'>Glass Industry Founder</div>
                        <div className='item-sub'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                    </li>
                    <li className="item">
                        <div className='item-title'>Ayush Bansal</div>
                        <div className='item-para'>Glass Industry Founder</div>
                        <div className='item-sub'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                    </li>
                    <li className="item">
                        <div className='item-title'>Ayush Bansal</div>
                        <div className='item-para'>Glass Industry Founder</div>
                        <div className='item-sub'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                    </li>
                    <li className="item">
                        <div className='item-title'>Ayush Bansal</div>
                        <div className='item-para'>Glass Industry Founder</div>
                        <div className='item-sub'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                    </li>
                    <li className="item">
                        <div className='item-title'>Ayush Bansal</div>
                        <div className='item-para'>Glass Industry Founder</div>
                        <div className='item-sub'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                    </li>
                    <li className="item">
                        <div className='item-title'>Ayush Bansal</div>
                        <div className='item-para'>Glass Industry Founder</div>
                        <div className='item-sub'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                    </li>
                    <li className="item">
                        <div className='item-title'>Ayush Bansal</div>
                        <div className='item-para'>Glass Industry Founder</div>
                        <div className='item-sub'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                    </li>
                </ul>
                
            </div>
            <button onClick={() => handleClick('previous')} className="button button--previous" type="button">➜</button>
            <button onClick={() => handleClick('next')} className="button button--next" type="button">➜</button>
            </div>

            {/* <div className="list-wrapper">
                <ul className="list" ref={listRef}>
                    <li className="item">
                        <div className='item-title'>Ayush Bansal</div>
                        <div className='item-para'>Glass Industry Founder</div>
                        <div className='item-sub'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                    </li>
                    <li className="item">
                        <div className='item-title'>Ayush Bansal</div>
                        <div className='item-para'>Glass Industry Founder</div>
                        <div className='item-sub'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                    </li>
                    <li className="item">
                        <div className='item-title'>Ayush Bansal</div>
                        <div className='item-para'>Glass Industry Founder</div>
                        <div className='item-sub'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                    </li>
                    <li className="item">
                        <div className='item-title'>Ayush Bansal</div>
                        <div className='item-para'>Glass Industry Founder</div>
                        <div className='item-sub'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                    </li>
                    <li className="item">
                        <div className='item-title'>Ayush Bansal</div>
                        <div className='item-para'>Glass Industry Founder</div>
                        <div className='item-sub'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                    </li>
                    <li className="item">
                        <div className='item-title'>Ayush Bansal</div>
                        <div className='item-para'>Glass Industry Founder</div>
                        <div className='item-sub'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                    </li>
                    <li className="item">
                        <div className='item-title'>Ayush Bansal</div>
                        <div className='item-para'>Glass Industry Founder</div>
                        <div className='item-sub'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                    </li>
                    <li className="item">
                        <div className='item-title'>Ayush Bansal</div>
                        <div className='item-para'>Glass Industry Founder</div>
                        <div className='item-sub'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                    </li>
                </ul>
                
            </div> */}
        </main>
    </>
  )
}

export default Feedback
