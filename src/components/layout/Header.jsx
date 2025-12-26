

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link"; // ✅ import Link
// import styles from "../../styles/layout/Header.module.scss";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className={styles.header}>
//       {/* LOGO */}
//       <div className={styles.logo}>
//         <Image
//           src="/SimplifiedPengwinLogo.png"
//           alt="Pengwin Tech Solutions"
//           width={220}
//           height={90}
//           priority
//         />
//       </div>

//       {/* NAV */}
//       <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
//         <Link
//           href="/"
//           onClick={() => {
//             setMenuOpen(false);
//             window.scrollTo({ top: 0, behavior: "smooth" });
//           }}
//         >
//           Home
//         </Link>

//         <Link href="/about" onClick={() => setMenuOpen(false)}>
//           About Us
//         </Link>

//         <Link href="/services" onClick={() => setMenuOpen(false)}>
//           Services
//         </Link>

//         <Link href="/contact" onClick={() => setMenuOpen(false)}>
//           Contact Us
//         </Link>
//       </nav>

//       {/* HAMBURGER */}
//       <div
//         className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         <span />
//         <span />
//         <span />
//       </div>
//     </header>
//   );
// }
//..........................

// above code is good


// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import styles from "../../styles/layout/Header.module.scss";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname(); // ✅ Get current route

//   return (
//     <header className={styles.header}>
//       {/* Logo */}
//       <div className={styles.logo}>
//         <Image
//           src="/SimplifiedPengwinLogo.png"
//           alt="Pengwin Tech Solutions"
//           width={220}
//           height={90}
//           priority
//         />
//       </div>

//       {/* Navigation */}
//       <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
//         <Link
//           href="/"
//           className={pathname === "/" ? styles.active : ""}
//           onClick={() => setMenuOpen(false)}
//         >
//           Home
//           <span className={pathname === "/" ? styles.underline : ""}></span>
//         </Link>

//         <Link
//           href="/about"
//           className={pathname === "/about" ? styles.active : ""}
//           onClick={() => setMenuOpen(false)}
//         >
//           About Us
//           <span
//             className={pathname === "/about" ? styles.underline : ""}
//           ></span>
//         </Link>

//         <Link
//           href="/services"
//           className={pathname === "/services" ? styles.active : ""}
//           onClick={() => setMenuOpen(false)}
//         >
//           Services
//           <span
//             className={pathname === "/services" ? styles.underline : ""}
//           ></span>
//         </Link>

//         <Link
//           href="/contact"
//           className={pathname === "/contact" ? styles.active : ""}
//           onClick={() => setMenuOpen(false)}
//         >
//           Contact Us
//           <span
//             className={pathname === "/contact" ? styles.underline : ""}
//           ></span>
//         </Link>
//       </nav>

//       {/* Hamburger */}
//       <div
//         className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         <span />
//         <span />
//         <span />
//       </div>
//     </header>
//   );
// }
//...................

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/layout/Header.module.scss";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image
          src="/SimplifiedPengwinLogo.png"
          alt="Pengwin Tech Solutions"
          width={220}
          height={90}
          priority
        />
      </div>

      {/* Navigation */}
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        {navLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className={pathname === link.href ? styles.active : ""}
          >
            {link.name}
            <span className={styles.underline}></span>
          </Link>
        ))}
      </nav>

      {/* Hamburger */}
      <div
        className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>
    </header>
  );
}
