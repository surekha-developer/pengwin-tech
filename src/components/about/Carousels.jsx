
// "use client";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useEffect } from "react";
// import Slider from "react-slick";
// import styles from "../../styles/aboutStyles/Carousels.module.scss";
// import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
// import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
// import { SiTicktick } from "react-icons/si";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function NextArrow(props) {
// const { onClick } = props;
//   return (
//     <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
//       <MdOutlineKeyboardDoubleArrowRight data-aos="fade-right"/>
//     </div>
//   );
// }

// function PrevArrow(props) {
//   const { onClick } = props;
//   return (
//     <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
//       <MdOutlineKeyboardDoubleArrowLeft data-aos="fade-left"/>
//     </div>
//   );
// }

// function Carousels() {

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 100,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };


//   return (
//     <div className={styles.bg}>
//       <section className={styles.carouselSection}>
//         <h2 className={styles.heading} data-aos="fade-up">
//           Car Wash <span className={styles.work}>Services</span>
//         </h2>
//         <p className={styles.subHeading} data-aos="fade-up">
//           Sai Annapurna Car Wash between Kwari market and Lalacheruvu
//           Road,Baskar Nagar, Rajahmundry
//         </p>
//         <Slider {...settings}>
//           {/* Slide 1 */}
//           <div className={styles.card} >
//             <div className={styles.image}>
//               <img src="/close-up-car-care-process.jpg" alt="Quality Service" />
//             </div>
//             <div className={styles.content}>
//               <h3>Car Washing Services</h3>
//               <p>
//                 At Sai Annapurna, we make every car shine with care and
//                 attention. We focus on quality and customer satisfaction,
//                 keeping your vehicle clean and well-maintained.
//               </p>
//               <ul>
//                 <li>
//                   <SiTicktick className={styles.tic} />
//                   Classic Foam Wash
//                 </li>
//                 <li>
//                   <SiTicktick className={styles.tic} />
//                   Complete Interior Vacuum Cleaning
//                 </li>
//                 <li>
//                   <SiTicktick className={styles.tic} />
//                   Dashboard Cleaning & Polishing
//                 </li>
//                 <li>
//                   <SiTicktick className={styles.tic} />
//                   Engine Bay Cleaning
//                 </li>
//                 <li>
//                   <SiTicktick className={styles.tic} />
//                   Intense Interior Cleaning
//                 </li>
//                 <li>
//                   <SiTicktick className={styles.tic} />
//                   Teflon Coating
//                 </li>
//                 <li>
//                   <SiTicktick className={styles.tic} />
//                   Scratch Removal
//                 </li>
//                 <li>
//                   <SiTicktick className={styles.tic} />
//                   Rat Inspect & Repellant Spray
//                 </li>
//                 <li>
//                   <SiTicktick className={styles.tic} />
//                   Compound Polish
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Slide 2 */}
//           <div className={styles.card} >
//             <div className={styles.images}>
//               <img src="/bikeunsplash.jpg" alt="Customer Care" />
//             </div>
//             <div className={styles.content}>
//               <h3>Bike Washing Services</h3>
//               <p>
//                 We give the same care to bikes, ensuring they look great and
//                 stay in top condition, with a reliable and professional touch.
//               </p>
//               <ul>
//                 <li>
//                   <SiTicktick className={styles.tic} />
//                   Classic Foam Wash
//                 </li>
//                 <li>
//                   <SiTicktick className={styles.tic} />
//                   Scratch Removal
//                 </li>
//                 <li>
//                   <SiTicktick className={styles.tic} />
//                   Compound Polish
//                 </li>
//                 <li>
//                   <SiTicktick className={styles.tic} />
//                   Teflon Coating
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </Slider>
//       </section>
//     </div>
//   );
// }

// export default Carousels;

//.............................

// "use client";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useEffect } from "react";
// import Slider from "react-slick";
// import styles from "../../styles/aboutStyles/Carousels.module.scss";
// import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
// import { SiTicktick } from "react-icons/si";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function NextArrow(props) {
//   const { onClick } = props;
//   return (
//     <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
//       <MdOutlineKeyboardDoubleArrowRight data-aos="fade-right"/>
//     </div>
//   );
// }

// function PrevArrow(props) {
//   const { onClick } = props;
//   return (
//     <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
//       <MdOutlineKeyboardDoubleArrowLeft data-aos="fade-left"/>
//     </div>
//   );
// }

// function Carousels() {

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 100,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   return (
//     <div className={styles.bg}>
//       <section className={styles.carouselSection}>
//         <h2 className={styles.heading} data-aos="fade-up">
//           Our <span className={styles.work}>Mission & Vision</span>
//         </h2>
//         <p className={styles.subHeading} data-aos="fade-up">
//           Sai Annapurna Car Wash between Kwari market and Lalacheruvu
//           Road, Baskar Nagar, Rajahmundry
//         </p>
//         <Slider {...settings}>

//           {/* Slide 1 */}
//           <div className={styles.card}>
//             <div className={styles.image}>
//               <img src="/misionrbg.png" alt="Mission Background" />
//             </div>
//             <div className={styles.content}>
//               <h3>Our Mission & Vision</h3>
//               <p>
//                 At Sai Annapurna, we make every car shine with care and
//                 attention. We focus on quality and customer satisfaction,
//                 keeping your vehicle clean and well-maintained.
//               </p>
//               <ul>
//                 <li><SiTicktick className={styles.tic} /> Classic Foam Wash</li>
//                 <li><SiTicktick className={styles.tic} /> Complete Interior Vacuum Cleaning</li>
//                 <li><SiTicktick className={styles.tic} /> Dashboard Cleaning & Polishing</li>
//                 <li><SiTicktick className={styles.tic} /> Engine Bay Cleaning</li>
//                 <li><SiTicktick className={styles.tic} /> Intense Interior Cleaning</li>
//                 <li><SiTicktick className={styles.tic} /> Teflon Coating</li>
//                 <li><SiTicktick className={styles.tic} /> Scratch Removal</li>
//                 <li><SiTicktick className={styles.tic} /> Rat Inspect & Repellant Spray</li>
//                 <li><SiTicktick className={styles.tic} /> Compound Polish</li>
//               </ul>
//             </div>
//           </div>

//           {/* Slide 2 */}
//           <div className={styles.card}>
//             <div className={styles.images}>
//               <img src="/visionrbg.png" alt="Vision Background" />
//             </div>
//             <div className={styles.content}>
//               <h3>Bike Washing Services</h3>
//               <p>
//                 We give the same care to bikes, ensuring they look great and
//                 stay in top condition, with a reliable and professional touch.
//               </p>
//               <ul>
//                 <li><SiTicktick className={styles.tic} /> Classic Foam Wash</li>
//                 <li><SiTicktick className={styles.tic} /> Scratch Removal</li>
//                 <li><SiTicktick className={styles.tic} /> Compound Polish</li>
//                 <li><SiTicktick className={styles.tic} /> Teflon Coating</li>
//               </ul>
//             </div>
//           </div>

//         </Slider>
//       </section>
//     </div>
//   );
// }

// export default Carousels;


//..........................

"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Slider from "react-slick";
import styles from "../../styles/aboutStyles/Carousels.module.scss";
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
      <MdOutlineKeyboardDoubleArrowRight data-aos="fade-right"/>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
      <MdOutlineKeyboardDoubleArrowLeft data-aos="fade-left"/>
    </div>
  );
}

function Carousels() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={styles.bg}>
      <section className={styles.carouselSection}>
        <h2 className={styles.heading} data-aos="fade-up">
          Our <span className={styles.work}>Mission & Vision</span>
        </h2>
        <p className={styles.subHeading} data-aos="fade-up">
          At PengWIN, we empower businesses with innovative software solutions and transform the way they operate.
        </p>
        <Slider {...settings}>

          {/* Slide 1 - Mission */}
          <div className={styles.card}>
            <div className={styles.image}>
              <img src="/misionrbg.png" alt="Mission Background" />
            </div>
            <div className={styles.content}>
              <h3>Our Mission</h3>
              <p>
                At PengWIN, our mission is to empower businesses through innovative, cutting-edge software solutions that drive transformation and growth. 
                We aim to unlock the full potential of our clients by optimizing operations, enhancing efficiency, and enabling them to thrive in a rapidly evolving digital landscape.
              </p>
              <ul>
                <li><SiTicktick className={styles.tic} /> Innovate with Purpose: Develop smart, scalable, and customized software solutions.</li>
                <li><SiTicktick className={styles.tic} /> Boost Efficiency: Streamline workflows and automate processes for maximum productivity.</li>
                <li><SiTicktick className={styles.tic} /> Unlock Business Potential: Enable growth, scalability, and digital competitiveness.</li>
                <li><SiTicktick className={styles.tic} /> Transform Operations: Modernize systems to stay ahead in the digital era.</li>
                <li><SiTicktick className={styles.tic} /> Deliver Exceptional Results: Provide reliable implementation and continuous support to ensure success.</li>
              </ul>
            </div>
          </div>

          {/* Slide 2 - Vision */}
          <div className={styles.card}>
            <div className={styles.image}>
              <img src="/visionrbg.png" alt="Vision Background" />
            </div>
            <div className={styles.content}>
              <h3>Our Vision</h3>
              <p>
                Our vision at PengWIN is to be a global leader in software innovation, empowering businesses to harness the power of technology and thrive in an ever-evolving digital world. 
                We envision creating transformative solutions that drive growth, efficiency, and long-term success for our clients.
              </p>
              <ul>
                <li><SiTicktick className={styles.tic} /> Lead in Innovation: Continuously develop next-generation software solutions.</li>
                <li><SiTicktick className={styles.tic} /> Enable Digital Transformation: Help businesses evolve and adapt with technology.</li>
                <li><SiTicktick className={styles.tic} /> Drive Growth & Success: Deliver measurable impact and sustainable business results.</li>
                <li><SiTicktick className={styles.tic} /> Foster Long-term Partnerships: Support clients with ongoing expertise and guidance.</li>
              </ul>
            </div>
          </div>

        </Slider>
      </section>
    </div>
  );
}

export default Carousels;

