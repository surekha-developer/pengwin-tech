// "use client";

// import Image from "next/image";
// import styles from "../../styles/contactStyles/ContactHeroSection.module.scss";
// import { FaWhatsapp, FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

// export default function ContactHero() {
//   return (
//     <section className={styles.contactHero}>
//       <div className={styles.overlay}>
//         <div className={styles.content}>
//           {/* Left Text */}
//           <div className={styles.left}>
//             <h1>Contact Us</h1>
//             <p>We’d love to hear from you. Reach out to us anytime!</p>
//           </div>

//           {/* Right Social Icons */}

        
//           <div className={styles.right}>
//             <a href="https://wa.me/919493323547" target="_blank" rel="noreferrer">
//               <FaWhatsapp />
//             </a>
//              <a href="https://www.instagram.com/pengwintech?igsh=NnR3cjVnN3l3NHNw" target="_blank" rel="noreferrer">
//               <FaInstagram />
//             </a>
//             <a href="https://www.linkedin.com/company/pengwintech/" target="_blank" rel="noreferrer">
//               <FaLinkedin />
//             </a>
//             <a href="https://twitter.com/" target="_blank" rel="noreferrer">
//               <FaTwitter />
//             </a>
            
//             <a href="https://www.facebook.com/people/Pengwin-Tech-Solutions/61574496058132/" target="_blank" rel="noreferrer">
//               <FaFacebook />
//             </a>
           
//           </div>
//         </div>
//       </div>

    
//     </section>
//   );
// }


//................

// "use client";

// import Image from "next/image";
// import styles from "../../styles/contactStyles/ContactHeroSection.module.scss";
// import { FaWhatsapp, FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";

// export default function ContactHero() {
//   return (
//     <section className={styles.contactHero}>
//       {/* Overlay with animated gradient */}
//       <div className={styles.overlay}>
//         {/* Floating Icons in background */}
//         <div className={styles.floatingIcons}>
//           <FaWhatsapp className={styles.icon} />
//           <FaInstagram className={styles.icon} />
//           <FaPhone className={styles.icon} />
//           <FaFacebook className={styles.icon} />
//           <FaTwitter className={styles.icon} />
//         </div>

//         {/* Main Content */}
//         <div className={styles.content}>
//           {/* Left Text */}
//           <div className={styles.left}>
//             <h1>Contact Us</h1>
//             <p>We’d love to hear from you. Reach out to us anytime!</p>
//           </div>

//           {/* Right Social Icons */}
//           <div className={styles.right}>
//             <a href="https://wa.me/919493323547" target="_blank" rel="noreferrer">
//               <FaWhatsapp />
//             </a>
//             <a href="https://www.instagram.com/pengwintech?igsh=NnR3cjVnN3l3NHNw" target="_blank" rel="noreferrer">
//               <FaInstagram />
//             </a>
//             <a href="https://www.linkedin.com/company/pengwintech/" target="_blank" rel="noreferrer">
//               <FaLinkedin />
//             </a>
//             <a href="https://twitter.com/" target="_blank" rel="noreferrer">
//               <FaTwitter />
//             </a>
//             <a href="https://www.facebook.com/people/Pengwin-Tech-Solutions/61574496058132/" target="_blank" rel="noreferrer">
//               <FaFacebook />
//             </a>
//             <a href="tel:+919493323547">
//               <FaPhone />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
//................

"use client";

import Image from "next/image";
import styles from "../../styles/contactStyles/ContactHeroSection.module.scss";
import {
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className={styles.contactHero}>
      {/* Overlay with animated gradient */}
      <div className={styles.overlay}>
        {/* Floating Icons in background */}
        <div className={styles.floatingIcons}>
          <FaWhatsapp className={styles.icon} />
          <FaInstagram className={styles.icon} />
          <FaPhone className={styles.icon} />
          <FaFacebook className={styles.icon} />
          <FaTwitter className={styles.icon} />
        </div>

        {/* Animated Main Content */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: -60 }}   // 🔥 from top
          animate={{ opacity: 1, y: 0 }}     // 🔥 to center
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          {/* Left Text */}
          <div className={styles.left}>
            <h1>Contact Us</h1>
            <p>We’d love to hear from you. Reach out to us anytime!</p>
          </div>

          {/* Right Social Icons */}
          <div className={styles.right}>
            <a href="https://wa.me/919493323547" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/pengwintech?igsh=NnR3cjVnN3l3NHNw"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/pengwintech/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/people/Pengwin-Tech-Solutions/61574496058132/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a href="tel:+919493323547">
              <FaPhone />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
