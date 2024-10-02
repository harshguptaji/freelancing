import React from 'react'
import "../Styling/Contact.css";
const Contact = () => {

    
  return (
    <>
        <main className='main-contact'>
            <section className='main-contact-1'>
                <div className='main-contact-1-title'>Get In Touch with us about your chemical product</div>
                <div className='main-contact-1-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                <div className='center-div'>
                    <button className='main-contact-btn'>Know More</button>                    
                </div>
            </section>
            <section className='main-contact-2'>
                <div className='main-contact-2-title'>Fill The Form To Reach Us</div>
                <div className='main-contact-2-para'>Please rate your experience below</div>
                <form action="https://api.web3forms.com/submit" method="POST" className='contact-form'>
                <input type="hidden" name="access_key" value="3a84fb24-9aed-4da5-8490-86d267ad62a0"/>
                   <div>
                        <label>First Name *</label> <br />
                        <input type="text" name='first-name' className='contact-inputs' placeholder='John' required />
                   </div>
                   <div>
                        <label>Last Name *</label> <br />
                        <input type="text" name='last-name' className='contact-inputs' placeholder='Doe' required />
                   </div>
                   <div>
                        <label>Phone Number *</label> <br />
                        <input type='number' name='phone-number' className='contact-inputs' placeholder='John@gmail.com' required />
                   </div>
                   <div>
                        <label>Product Requirement *</label> <br />
                        <input type="text" name='product-requirement' className='contact-inputs' placeholder='List of products' required />
                   </div>
                   <button type="submit" className='contact-btn'>Submit</button>
                </form>
            </section>
        </main>
    </>
  )
}

export default Contact
