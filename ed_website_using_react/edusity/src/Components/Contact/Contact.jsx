import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png'
import mail_icon from '../../assets/mail_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_icon.png'
import white_arrow from '../../assets/white_arrow.webp'
const Contact = () => {
       const [result, setResult] = React.useState("");

       const onSubmit = async (event) => {
       event.preventDefault();
       setResult("Sending....");
       const formData = new FormData(event.target);
       formData.append("access_key", "5ef2c5e5-5dcc-49ad-890f-7b49e3efb883");
       const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              body: formData});

       const data = await response.json();

       if (data.success) {
              setResult("Form Submitted Successfully");
              event.target.reset();
              setResult(response.message);
              event.target.reset();
       } else {
              console.log("Error", data);
              setResult(data.message);
       }
       };
       return (
       <div className='contact'>
              <div className="contact-col">
                     <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                     <p>
                     We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. Your React code looks mostly clean and well-structured, Dhanshri! But there’s one subtle issue.
                     </p>
                     <ul>
                            <li><img src={mail_icon} alt="" />contact@example.com</li>
                            <li><img src={phone_icon} alt="" />  8975156508</li>
                            <li><img src={location_icon} alt="" /> SGGS Institute of Engineering and Technology, Nanded, Maharashtra, India</li>
                     </ul>
              </div>
              <div className="contact-col">
                     <form onSubmit={onSubmit}>
                            <label>Your Name</label>
                            <input type="text" name='name' placeholder='Enter your Name' required/>
                            <label>Phone Number</label>
                            <input type="tel" name='phone' placeholder='Enter your Mobile Number' required/>         
                            <label>Write Your Msg Here</label>    
                            <textarea name="message" rows="6" placeholder='Enter your Message' required></textarea>
                            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
                     </form>
                     <span>
                            {result}
                     </span>
              </div>
    </div>
  )
}

export default Contact
