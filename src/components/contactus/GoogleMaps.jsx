

"use client";
import styles from "@/styles/contactStyles/GoogleMap.module.scss";
import { FaMapLocationDot } from "react-icons/fa6";

export default function GoogleMap() {
  return (
    <section className={styles.mapSection}>
      <div className={styles.container}>

        {/* Heading with Icon */}
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>Our Location</h2>
          <FaMapLocationDot className={styles.headingIcon} />
        </div>

        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps?q=PengWIN+Tech+Solutions,+Chandrika+Vilasini+Apartments,+Rajamahendravaram,+Patha+Tungapadu,+Andhra+Pradesh+533107&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>

        <div className={styles.actions}>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=PengWIN+Tech+Solutions,+Chandrika+Vilasini+Apartments,+Rajamahendravaram,+Patha+Tungapadu,+Andhra+Pradesh+533107"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directionsBtn}
          >
            Directions
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=PengWIN+Tech+Solutions,+Chandrika+Vilasini+Apartments,+Rajamahendravaram,+Patha+Tungapadu,+Andhra+Pradesh+533107"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewMapBtn}
          >
            View larger map
          </a>
        </div>

      </div>
    </section>
  );
}
