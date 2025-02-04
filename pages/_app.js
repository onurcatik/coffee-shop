// pages/_app.js
import '../app/globals.css';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize ScrollReveal only on the client.
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

  return <Component {...pageProps} />;
}

export default MyApp;
