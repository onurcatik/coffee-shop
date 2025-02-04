// app/layout.js
'use client';

import '../app/globals.css';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function RootLayout({ children }) {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });
    sr.reveal(".nav");
    sr.reveal(".home-text", { origin: "left" });
    sr.reveal(".home-img", { origin: "bottom" });
    sr.reveal(".ser-box, .product-box, .team-box, .book-data", {
      interval: 100,
    });
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
