import Image from 'next/image';

const servicesData = [
  { src: '/images/scr1.png', title: 'Ekipman' },
  { src: '/images/scr2.png', title: 'Kahve Çeşitleri' },
  { src: '/images/scr3.png', title: 'Paket Servis' },
  { src: '/images/scr6.png', title: 'Çekirdek Çeşitleri' },
  { src: '/images/scr5.png', title: 'Pastane Ürünleri' },
];

const Services = () => {
  return (
    <section className="services container" id="services">
      <div className="heading">
        <h2>
          Kültür, Kahve ve <br />
          Üst Düzey Hizmetin Buluşması
        </h2>
      </div>
      <div className="service-content">
        {servicesData.map((service, index) => (
          <div key={index} className="ser-box">
            <Image
              src={service.src}
              alt={service.title}
              width={100}
              height={100}
            />
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
