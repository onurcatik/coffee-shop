// components/Footer.jsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-box">
        <Link href="/" className="logo">
          Kahve Dükkanı
        </Link>
        <div className="social">
          <Link href="#">
            <i className="bx bxl-twitch"></i>
          </Link>
          <Link href="#">
            <i className="bx bxl-twitter"></i>
          </Link>
          <Link href="#">
            <i className="bx bxl-linkedin"></i>
          </Link>
          <Link href="#">
            <i className="bx bxl-youtube"></i>
          </Link>
        </div>
      </div>
      <div className="footer-box">
        <h3>Hakkımızda</h3>
        <Link href="#">Hikayemiz</Link>
        <Link href="#">Sıkça Sorulan Sorular</Link>
        <Link href="#">Kariyer</Link>
      </div>
      <div className="footer-box">
        <h3>Müşteri Kaynakları</h3>
        <Link href="#">Menü</Link>
        <Link href="#">Konum</Link>
        <Link href="#">Destek</Link>
      </div>
      <div className="footer-box">
        <h3>Hizmetler</h3>
        <Link href="#">Ödeme Seçenekleri</Link>
        <Link href="#">İade & Değişim</Link>
        <Link href="#">Sorumluluk Sınırlamaları</Link>
      </div>
      <p className="copyright">&#169; Kahve Dükkanı - Tüm Hakları Saklıdır</p>
    </footer>
  );
};

export default Footer;
