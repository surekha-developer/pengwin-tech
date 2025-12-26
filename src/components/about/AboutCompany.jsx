

// "use client";

// import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import { FaCheckCircle } from "react-icons/fa";
// import styles from "@/styles/aboutStyles/AboutCompany.module.scss";

// export default function AboutCompany() {
//   const highlights = [
//     "Startups & High-Growth Businesses",
//     "SaaS & Product-Driven Companies",
//     "Enterprises & Technology-Led Organizations",
//     "E-commerce & Digital Platforms",
//     "Small and Medium Enterprises (SMEs) undergoing digital transformation",
//   ];

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-out-cubic",
//       once: true,
//     });
//   }, []);

//   return (
//     <div className={styles.about}>
//       <section className={styles.aboutCompany}>
//         {/* SVG SHAPE */}
//         {/* <div className={styles.shapeTop}>
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path
//               d="M0,0V46.29c47.79,22.2,103.59,29,158,17.39
//                  C230.7,49.2,284.8,5.86,339.3,0Z"
//               className={styles.shapeFill}
//             />
//           </svg>
//         </div> */}
//          <div className={styles.shapeTop}>
//               <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//                 <path
//                   d="M0,0V46.29c47.79,22.2,103.59,29,158,17.39
//                      C230.7,49.2,284.8,5.86,339.3,0Z"
//                   className={styles.shapeFill}
//                 />
//               </svg>
//             </div>

//         <div className={styles.container}>
//           {/* IMAGE */}
//           <div className={styles.imageWrapper} data-aos="fade-right">
//             <div className={styles.imageShape}>
//               <Image
//                 src="/pengwinmockup.png"
//                 alt="About Company"
//                 width={420}
//                 height={420}
//                 priority
//                 className={styles.image}
//               />
//             </div>
//           </div>

//           {/* TEXT */}
//           <div className={styles.text} data-aos="fade-left">
//             <h2>About Company</h2>

//             <p>
//               Pengwin Tech Solutions is a technology-driven organization dedicated
//               to helping businesses grow, innovate, and scale through secure,
//               future-ready digital solutions. We specialize in delivering
//               end-to-end software ecosystems by combining strong engineering
//               expertise, modern digital practices, and a customer-first mindset
//               to create meaningful and measurable business impact.
//             </p>

//             <h3>Your Trusted Technology & Digital Solutions Partner</h3>
//             <p>
//               We partner with organizations across industries and growth stages
//               to deliver high-value, scalable solutions for:
//             </p>

//             <ul>
//               {highlights.map((item, index) => (
//                 <li key={index}>
//                   <FaCheckCircle className={styles.icon} /> {item}
//                 </li>
//               ))}
//             </ul>

//             <p>
//               Our team of experienced engineers, solution architects, and
//               delivery specialists brings deep hands-on expertise in designing
//               and building reliable, scalable, and high-performance applications
//               tailored to complex business needs. We believe in building
//               long-term partnerships, ensuring every solution we deliver aligns
//               with our clients’ strategic objectives, supports sustainable
//               growth, and enhances operational efficiency.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
//........................


"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "@/styles/aboutStyles/AboutCompany.module.scss";

export default function AboutCompany() {
  const highlights = [
    "Startups & High-Growth Businesses",
    "SaaS & Product-Driven Companies",
    "Enterprises & Technology-Led Organizations",
    "E-commerce & Digital Platforms",
    "Small and Medium Enterprises (SMEs) undergoing digital transformation",
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div className={styles.about}>
      <section className={styles.aboutCompany}>
        {/* SVG SHAPE */}
        <div className={styles.shapeTop}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,29,158,17.39
              C230.7,49.2,284.8,5.86,339.3,0Z"
              className={styles.shapeFill}
            />
          </svg>
        </div>

        <div className={styles.container}>
         
          <div className={styles.imageWrapper} data-aos="fade-right">
            <div className={styles.imageShape}>
              <Image
                src="/pengwinmockup.png"
                alt="About Company"
                width={420}
                height={420}
                priority
                className={styles.image}
              />
            </div>
          </div>

        
          <div className={styles.text} data-aos="fade-left">
            <h2>About Company</h2>

            <p className={styles.intro}>
              Pengwin Tech Solutions is a technology-driven organization dedicated
              to helping businesses grow, innovate, and scale through secure,
              future-ready digital solutions.
            </p>

            <h3>Your Trusted Technology & Digital Solutions Partner</h3>

            <p className={styles.beforeList}>
              We partner with organizations across industries and growth stages
              to deliver high-value, scalable solutions for:
            </p>

            <ul>
              {highlights.map((item, index) => (
                <li key={index}>
                  <FaCheckCircle className={styles.icon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className={styles.afterList}>
              Our experienced team builds reliable, scalable, and
              high-performance applications aligned with long-term business
              goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
