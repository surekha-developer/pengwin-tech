

"use client";

import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import styles from "../../styles/homeStyles/Empowering.module.scss";

export default function Empowering() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const strengths = [
    "Custom Mobile App Development",
    "Website & Web-App Development",
    "E-commerce Solutions",
    "UI/UX Design",
    "Cloud & Server Deployments",
  ];

  return (
    <section className={styles.empowering}>
      <div className={styles.empowerRow}>
        {/* IMAGE */}
        <div className={styles.imageWrapper} data-aos="fade-right">
          <div className={styles.amoeba}>
            <Image
              src="/pengwinmockup.png"
              alt="Empowering Digital Transformation"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 50vw"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        {/* TEXT */}
        <div className={styles.text} data-aos="fade-left">
          <h2 data-aos="fade-up">
            Empowering Your Digital Transformation
          </h2>

          <p data-aos="fade-up" data-aos-delay="100">
            Pengwin Tech Solutions is a leading-edge software development company
            delivering robust, scalable, and intelligent digital solutions. We
            empower businesses to transform their ideas into seamless websites,
            mobile applications, e-commerce platforms, and enterprise systems.
          </p>

          <h3
            className={styles.subHeading}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our Strengths
          </h3>

          <ul className={styles.strengthList}>
            {strengths.map((item, i) => (
              <li key={i} data-aos="fade-up" data-aos-delay={200 + i * 80}>
                <MdKeyboardDoubleArrowRight className={styles.icon} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
