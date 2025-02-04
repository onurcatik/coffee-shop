// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import HomeSection from '../components/HomeSection';
import Services from '../components/Services';
import Products from '../components/Products';
import Team from '../components/Team';
import Reviews from '../components/Reviews';
import Book from '../components/Book';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create a Responsive Coffee Shop Website</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* External stylesheets for icons (and Swiper if not using npm package) */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        />
      </Head>
      <Header />
      <main>
        <HomeSection />
        <Services />
        <Products />
        <Team />
        <Reviews />
        <Book />
      </main>
      <Footer />
    </>
  );
}
