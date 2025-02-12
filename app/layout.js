'use client';

import '../app/globals.css';
import { useEffect } from 'react';

export default function RootLayout({ children }) {
  useEffect(() => {
    import('scrollreveal').then((module) => {
      const ScrollReveal = module.default;
      
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
    });
  }, []);

  return (
    <html lang="en">
    <title>Coffee Shop</title>
      <body>{children}</body>
    </html>
  );
}
