// components/Book.jsx
import Link from 'next/link';
import Image from 'next/image';

const Book = () => {
  return (
    <section className="book container" id="book">
      <div className="book-img">
        <Image
          src="/images/book4.jpeg"
          alt="Masa Rezervasyonu"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="book-overlay"></div>
      <div className="book-data">
        <h2>
          Sizin İçin <br />
          Bir Masa Ayırtalım
        </h2>
        <form action="book">
          <div className="input-box">
            <i className="bx bx-phone-call"></i>
            <input type="tel" placeholder="Telefon Numaranız" />
          </div>
          <div className="input-box">
            <i className="bx bx-user"></i>
            <input type="number" placeholder="Kişi Sayısı" />
          </div>
          <Link href="#" className="book-btn">
            Masa Ayırt
          </Link>
        </form>
        <p>Rezervasyonunuzu onaylamak için sizinle iletişime geçeceğiz</p>
      </div>
    </section>
  );
};

export default Book;
