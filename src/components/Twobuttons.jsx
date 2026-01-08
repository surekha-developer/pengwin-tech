"use client";

import { useState } from "react";
// import ScrollToTop from "./ScrollToTop";
// import WhatsAppButton from "./WhatsAppButton";
import ScrollToTop from "./ScrollTop";
import WhatsAppButton from "./Wtsapp";

export default function Twobuttons() {
  const [scrollVisible, setScrollVisible] = useState(false);

  return (
    <>
      <WhatsAppButton moveLeft={scrollVisible} />
      <ScrollToTop onVisibleChange={setScrollVisible} />
    </>
  );
}
