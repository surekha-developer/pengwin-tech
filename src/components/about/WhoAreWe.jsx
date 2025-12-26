

// "use client";

// import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import styles from "@/styles/aboutStyles/WhoAreWe.module.scss";

// export default function WhoWeAre() {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-out-cubic",
//       once: true,
//     });
//   }, []);

//   return (
//     <div className={styles.who}>
//       <section className={styles.whoWeAre}>
//         <div className={styles.container}>
//           {/* IMAGE */}
//           <div className={styles.imageWrapper} data-aos="fade-right">
//             <div className={styles.imageShape}>
//               <Image
//                 src="/pengwinmockup.png"
//                 alt="Who We Are"
//                 width={420}
//                 height={420}
//                 priority
//                 className={styles.image}
//               />
//             </div>
//           </div>

//           {/* TEXT */}
//           <div className={styles.text} data-aos="fade-left">
//             <div className={styles.shapeTop}>
//               <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
//                 <path
//                   d="M0,0V46.29c47.79,22.2,103.59,29,158,17.39
//                      C230.7,49.2,284.8,5.86,339.3,0Z"
//                   className={styles.shapeFill}
//                 />
//               </svg>
//             </div>

//             <h2>Who We Are</h2>

//             <p>
//               Pengwin Tech Solutions is a customer-first, innovation-driven
//               technology company offering end-to-end digital development
//               services. With a mission to simplify technology for all businesses,
//               we create smart, secure and scalable solutions that deliver
//               long-term value.
//             </p>

//             <ul>
//               <li>Feature-rich mobile applications</li>
//               <li>High-performing websites</li>
//               <li>Fast & secure e-commerce systems</li>
//               <li>Customized business applications</li>
//               <li>Automation & workflow systems</li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
//................

"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "@/styles/aboutStyles/WhoAreWe.module.scss";

export default function WhoWeAre() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const features = [
    "Feature-rich mobile applications",
    "High-performing websites",
    "Fast & secure e-commerce systems",
    "Customized business applications",
    "Automation & workflow systems",
  ];

  return (
    <div className={styles.who}>
      <section className={styles.whoWeAre}>
        <div className={styles.container}>
          {/* IMAGE */}
          <div className={styles.imageWrapper} data-aos="fade-right">
            <div className={styles.imageShape}>
              <Image
                src="/pengwinmockup.png"
                alt="Who We Are"
                width={420}
                height={420}
                priority
                className={styles.image}
              />
            </div>
          </div>

          {/* TEXT */}
          <div className={styles.text} data-aos="fade-left">
            <div className={styles.shapeTop}>
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path
                  d="M0,0V46.29c47.79,22.2,103.59,29,158,17.39
                     C230.7,49.2,284.8,5.86,339.3,0Z"
                  className={styles.shapeFill}
                />
              </svg>
            </div>

            <h2>Who We Are</h2>

            <p>
              Pengwin Tech Solutions is a customer-first, innovation-driven
              technology company offering end-to-end digital development
              services. With a mission to simplify technology for all businesses,
              we create smart, secure and scalable solutions that deliver
              long-term value.
            </p>

            <ul>
              {features.map((item, index) => (
                <li key={index}>
                  <FaCheckCircle className={styles.icon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
