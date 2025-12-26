

// "use client";

// import Image from "next/image";
// import styles from "../../styles/homeStyles/Strengths.module.scss";

// export default function StrengthCard({ image, title, subtitle }) {
//   return (
//     <div className={styles.card}>
//       <Image src={image} alt={title} width={80} height={80} />
//       <h3>{title}</h3>
//       <p>{subtitle}</p>
//     </div>
//   );
// }

//.............

// "use client";

// import Image from "next/image";
// import styles from "../../styles/homeStyles/Strengths.module.scss";

// export default function StrengthCard({ image, title, subtitle, index }) {
//   return (
//     <div
//       className={styles.card}
//       style={{ animationDelay: `${index * 0.2}s` }} // stagger animation
//     >
//       <Image src={image} alt={title} width={80} height={80} />
//       <h3>{title}</h3>
//       <p>{subtitle}</p>
//     </div>
//   );
// }
//..............

"use client";

import Image from "next/image";
import styles from "../../styles/homeStyles/Strengths.module.scss";

export default function StrengthCard({ image, number, title, index }) {
  return (
    <div
      className={styles.card}
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      <Image src={image} alt={title} width={180} height={100} />
      <h2 className={styles.number}>{number}</h2>
      <h3 className={styles.title}>{title}</h3>
    </div>
  )
}
