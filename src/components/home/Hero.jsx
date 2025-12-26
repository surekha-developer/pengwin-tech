

"use client";

import styles from "../../styles/homeStyles/Hero.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import Header from "../layout/Header";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter(); // Next.js router

  const handleGetStarted = () => {
    router.push("/contact"); // navigate to contact page
  };

  return (
    <section className={styles.hero}>
      {/* Header (optional) */}
      {/* <Header /> */}

      {/* Gradient overlay */}
      <div className={styles.overlay}></div>

      {/* Animated floating squares */}
      <div className={styles.squares}>
        {Array.from({ length: 50 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* Hero content */}
      <div className={styles.content}>
        <h1>
          Innovative <span>Software Solutions</span> for Your Business
        </h1>

        {/* <p>
          Expert mobile apps and website design services tailored to elevate
          your brand&apos;s online presence.
        </p> */}
        <p>Turning your ideas into innovative web and mobile solutions that grow your brand and business.</p>

        <button className={styles.ctaBtn} onClick={handleGetStarted}>
          <span>Get Started</span>
          <FaArrowRightLong className={styles.arrowIcon} />
        </button>
      </div>
    </section>
  );
};

export default Hero;

