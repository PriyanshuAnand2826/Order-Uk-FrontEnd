import React ,{useState,useEffect}from 'react'
import styles from './Testimonials.module.css'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import image from '../assets/Ellipse 3.png'
import { FaStar } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import testimonial from '../data/Testimonial';


function Testimonial_Card ({item}){
  return(
    <div className={styles.div_container}>
      <div className={styles.card_header}>
         <div className={styles.left}>
          <img src={image} alt="" />
          <hr style={{color:'#FC8A06'}} />
          <div>
          <p style={{fontWeight:'bold'}}>{item.name}</p>
          <span style={{color:'#FC8A06'}}>{item.location}</span>
          </div>
 
         </div>
         <div className={styles.right}>
           <div style={{display:'flex' ,gap:'10px'}}>
            <FaStar style={{color:'#FC8A06'}}/>
            <FaStar style={{color:'#FC8A06'}}/>
            <FaStar style={{color:'#FC8A06'}}/>
            <FaStar style={{color:'#FC8A06'}}/>
            <FaStar style={{color:'#FC8A06'}}/>
            <FaStar style={{color:'#FC8A06'}}/>

            </div>  
            <div style={{display:'flex' , gap:'10px',marginTop:'10px'}}>
               <GoClock style={{color:'#FC8A06'}} size={20} />
               <span>24th Sept,2023</span>

            </div>
         </div>
      </div>

      <div className={styles.card_body}>
         <p>{item.subtext}</p>
      </div>

    </div>
  )
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Detect screen size and adjust cards to show
  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(window.innerWidth <= 768 ? 1 : 3);
    };
    handleResize(); // Initialize on component mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= testimonial.length - (cardsToShow - 1) ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? testimonial.length - cardsToShow : prevIndex - 1
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
         <h1>Customer Reviews</h1> 
         <div style={{display:'flex',gap:'10px',cursor:'pointer',marginRight:'20px'}}>
            <IoIosArrowDropleftCircle color='#FC8A06' size={50} onClick={handlePrev}/>
            <IoIosArrowDroprightCircle   color='#FC8A06' size={50} onClick={handleNext}/>
         </div>

      </div>

      <div className={styles.body}>
        {testimonial.slice(currentIndex, currentIndex + cardsToShow).map((item,index)=>{
          return (
            <Testimonial_Card item={item}/>
          )
        })}
      </div>

      <div className={styles.bottom}>
         <h1>
          3.4
         </h1>
         <div style={{display:'flex',gap:'10px'}}>
             <FaStar style={{color:'#FC8A06'}}/>
             <FaStar style={{color:'#FC8A06'}}/>
             <FaStar style={{color:'#FC8A06'}}/>
             <FaStar style={{color:'grey'}}/>
             <FaStar style={{color:'grey'}}/>
         </div>
         <p style={{color:'grey',marginTop:'10px'}}>1,360 Reviews</p>
      </div>
    </div>
  )
}
