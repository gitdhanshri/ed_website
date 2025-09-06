import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next_icon.png'
import back_icon from '../../assets/back_icon.png'
import user_1 from '../../assets/user_1.png'
import user_2 from '../../assets/user_2.webp'
import user_3 from '../../assets/user_3.jpeg'
import user_4 from '../../assets/user_4.jpeg'

const Testimonials = () => {
       const slider = useRef();
       let tx = 0;
  const slideForward =()=>{
       if(tx > -50){
              tx-=25;
       }
       slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward =()=>{
       if(tx < 0){
              tx+=25;
       }
       slider.current.style.transform = `translateX(${tx}%)`;
  }
  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn'onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
       <ul ref={slider}>
              <li>
                 <div className="slide">
                     <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                   <h3>DR.MANISH KOKARE</h3>
                                   <span>SGGSIE & T ,NANDED ,India</span>
                            </div>
                     </div>
                     <p>
                         A dedicated educator with a calm presence and a sharp intellect, he brings clarity and depth to every classroom session. His approach to teaching emphasizes conceptual understanding, real-world relevance, and student engagement. Known for his patience and precision, he creates an environment where learners feel encouraged to ask questions, explore ideas, and grow with confidence.

Outside the classroom, he actively mentors students, supports academic projects, and fosters a culture of discipline and integrity. His consistent guidance and approachable nature make him a trusted figure in the academic journey of many. 
                     </p>
                 </div>
              </li>  
              <li>
                 <div className="slide">
                     <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                   <h3>J.WAAGHMARE</h3>
                                   <span>SGGSIE & T ,NANDED ,India</span>
                            </div>
                     </div>
                     <p>
                        A thoughtful and inspiring educator who brings both empathy and expertise into the classroom. With a strong grasp of her subject and a genuine care for student development, she creates a learning space that is inclusive, engaging, and intellectually stimulating. Her teaching style blends clarity with encouragement, helping students build confidence while mastering complex ideas.

Beyond academics, she serves as a mentor and role model—supporting students through challenges, celebrating their progress, and guiding them toward personal and professional growth. Her presence leaves a lasting impact, not only in what students learn, but in how they think, communicate, and lead. 
                     </p>
                 </div>
              </li>  
              <li>
                 <div className="slide">
                     <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                   <h3>S.B.TETHE</h3>
                                   <span>SGGSIE & T ,NANDED ,India</span>
                            </div>
                     </div>
                     <p>
                        He serves as a guide, mentor, and motivator in a student’s academic journey. With subject expertise and a passion for teaching, they simplify complex concepts and encourage independent thinking. Their role extends beyond delivering lectures—they foster curiosity, provide personalized support, and help students build confidence in their abilities.

Through consistent effort and clear communication, they create a learning environment that is both disciplined and inspiring. Their impact is felt not just in grades, but in the way students approach challenges, solve problems, and grow as individuals.  
                     </p>
                 </div>
              </li>  
              <li>
                 <div className="slide">
                     <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                   <h3>Atul D.Sinde</h3>
                                   <span>SGGSIE & T ,NANDED ,India</span>
                            </div>
                     </div>
                     <p>
                         An experienced and thoughtful educator who brings both structure and warmth to the classroom. With a strong command over the subject and a genuine interest in student development, they make learning both rigorous and rewarding. Their teaching style balances clarity with challenge—encouraging students to think critically, ask questions, and strive for excellence.

Beyond academics, they serve as a mentor and role model, offering guidance that extends into personal growth and career readiness. Their consistent support and high standards leave a lasting impression on students, shaping not just what they know, but how they learn and lead.   
                     </p>
                 </div>
              </li>  
       </ul>
      </div>
    </div>
  )
}

export default Testimonials
