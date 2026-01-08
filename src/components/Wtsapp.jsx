// "use client";

// import { FaWhatsapp } from "react-icons/fa";
// import styles from "../styles/Wtsapp.module.scss";

// export default function WhatsAppButton() {
//   return (
//     <a
//       href="https://wa.me/919999999999?text=Hello%20I%20want%20more%20details"
//       target="_blank"
//       rel="noopener noreferrer"
//       className={styles.whatsapp}
//       aria-label="Chat on WhatsApp"
//     >
//       <FaWhatsapp />
//     </a>
//   );
// }

//.................

"use client";

import { FaWhatsapp } from "react-icons/fa";
import styles from "../styles/Wtsapp.module.scss";

export default function WhatsAppButton({ moveLeft }) {
  return (
    <a
      href="https://wa.me/919493323547"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.whatsapp} ${moveLeft ? styles.moveLeft : ""}`}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

