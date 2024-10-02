import React from 'react';
import "../Styling/Footer.css";
import img1 from "../Assets/arrow-3.png";
import img2 from "../Assets/Icon.png";
import img3 from "../Assets/mail.png";
import img4 from "../Assets/ar.png";
import i1 from "../Assets/01.png";
import i2 from "../Assets/02.png";
import i3 from "../Assets/03.png";
import i4 from "../Assets/04.png";
import building from "../Assets/building.png";

const Footer = () => {
  return (
    <footer className='main-footer'>
        <section className='footer-1'>
            <div className='footer-11'>
                <h5 className='footer-11-title'>Office Address</h5>
                <h6 className='footer-11-sub'>Head Office</h6>
                <p className='footer-11-para'>Lorem ipsum dolor sit amet.</p>
                <h6 className='footer-11-sub'>Branch</h6>
                <p className='footer-11-para'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='footer-22'>
                <h5 className='footer-11-title'>Contact Sellers</h5>
                <div className='footer-flex'>
                    <div className='footer-cir'></div>
                    <div>
                        <div className='footer-darell'>Darell Steward</div>
                        <div className='footer-no'>(+971) 555-55812</div>
                    </div>
                    <div>
                        <img className='arr-img' src={img1} alt="img1" />
                    </div>
                </div>

                <div className='flex-1'>
                    <img className='flex-1-img' src={img2} alt="img2" />
                    <div>
                        <div className='hotline'>Hotline : </div>
                        <div className='footer-no'>(+971) 555-0124</div>
                    </div>
                </div>

                <div className='flex-1'>
                    <img className='flex-1-img' src={img3} alt="img3" />
                    <div>
                        <div className='hotline'>Email : </div>
                        <div className='footer-no'>(+971) 555-0124</div>
                    </div>
                </div>

            </div>
            <div className='marg-top'>
                <h5 className='footer-11-title'>Our Company</h5>
                <div className='flex'>
                    <img src={img4} alt="img4" />
                    <div className='hotline'>Property For Sale</div>
                </div>
                <div className='flex'>
                    <img src={img4} alt="img4" />
                    <div className='hotline'>About Us</div>
                </div>
                <div className='flex'>
                    <img src={img4} alt="img4" />
                    <div className='hotline'>Our Agents</div>
                </div>
                <div className='flex'>
                    <img src={img4} alt="img4" />
                    <div className='hotline'>Term Of Use</div>
                </div>
                <div className='flex'>
                    <img src={img4} alt="img4" />
                    <div className='hotline'>Privacy Policy</div>
                </div>
                <div className='flex'>
                    <img src={img4} alt="img4" />
                    <div className='hotline'>Contact</div>
                </div>
            </div>
            <div className='marg-top'>
                <h5 className='footer-11-title'>Newsletter</h5>
                <div className='hotline'>Sign up to receive the latest articles</div>
                <div>
                    <input className='input-news' type="email" placeholder='Your email address' />
                    <div>
                        <button className='footer-btn'> Sign Up → </button>
                    </div>
                </div>
            </div>
        </section>
        <section className='flex-2'>
            <div className='flex-2-1'>
                <img className='build' src={building} alt="building" />
                <div className='flex-2-1-title'>InfraNew.com</div>
            </div>
            <div className='flex-2-2'>
                <h5 className='footer-link'>Home</h5>
                <h5 className='footer-link'>Page</h5>
                <h5 className='footer-link'>Blog</h5>
                <h5 className='footer-link'>Contact</h5>
            </div>
            <div className='flex-2-3'>
                <div>
                    <img className='social-img' src={i1} alt="i1" />
                </div>
                <div>
                    <img className='social-img' src={i2} alt="i2" />
                </div>
                <div>
                    <img className='social-img' src={i3} alt="i3" />
                </div>
                <div>
                    <img className='social-img' src={i4} alt="i4" />
                </div>
            </div>
        </section>
    </footer>
  )
}

export default Footer
