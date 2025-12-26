

// "use client";

// import styles from "@/styles/serviceStyles/serviceModal.module.scss";
// import { IoClose } from "react-icons/io5";

// export default function ServiceModal({ service, isOpen, onClose }) {
//   if (!isOpen || !service) return null;

//   return (
//     <div className={styles.modalOverlay} onClick={onClose}>
//       <div
//         className={styles.modal}
//         onClick={(e) => e.stopPropagation()} // prevent close on inner click
//       >
//         {/* HEADER */}
//         <div className={styles.header}>
//           <h2>{service.title}</h2>
//           <button className={styles.closeBtn} onClick={onClose}>
//             <IoClose />
//           </button>
//         </div>

//         {/* CONTENT (SCROLLABLE) */}
//         <div className={styles.content}>
//           <ul>
//             {service.description.map((point, index) => (
//               <li key={index}>{point}</li>
//             ))}
//           </ul>
//         </div>

//         {/* FOOTER */}
//         <div className={styles.footer}>
//           <button className={styles.closeAction} onClick={onClose}>
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
//..............

"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/serviceStyles/serviceModal.module.scss";
import { IoClose } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServiceModal({ service, isOpen, onClose }) {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  if (!isOpen || !service) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()} // prevent modal close on inner click
      >
        {/* HEADER */}
        <div className={styles.header}>
          <h2 data-aos="fade-right">{service.title}</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            <IoClose />
          </button>
        </div>

        {/* CONTENT */}
        <div className={styles.content}>
          {/* LEFT IMAGE */}
          <div className={styles.left} data-aos="fade-right">
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={400}
              className={styles.serviceImage}
            />
          </div>

          {/* RIGHT TEXT */}
          <div className={styles.right}>
            <ul>
              {service.description.map((point, index) => (
                <li
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay={index * 150} // stagger animation
                >
                  ✔ {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FOOTER */}
        <div className={styles.footer}>
          <button className={styles.closeAction} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
