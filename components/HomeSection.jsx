import Link from 'next/link';
import Image from 'next/image';

const HomeSection = () => {
  return (
    <section className="home container" id="home">
      <div className="home-text">
        <h1>
          Yeni Bir Karışımın <br />
          Keyfini Çıkarın
        </h1>
        <p>
          Modunuza göre mükemmel bir kahve demleyin veya sipariş edin, 
          istediğiniz yerde ve istediğiniz zaman.
        </p>
        <Link href="#" className="btn">
          <span>Şimdi Satın Al</span>
          <i className="bx bx-up-arrow-alt"></i>
        </Link>
      </div>
      <div className="home-img">
        <Image
          src="/images/coffee2-removebg-preview.png"
          alt="Kahve çekirdekleri"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default HomeSection;
