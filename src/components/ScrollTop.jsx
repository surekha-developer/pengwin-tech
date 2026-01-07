"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "../styles/ScrollToTop.module.scss"; // create this SCSS file

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  };

  return (
    <>
      {visible && (
        <button className={styles.scrollTop} onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
