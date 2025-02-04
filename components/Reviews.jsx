"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper'; // Autoplay modülü eklendi
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const reviewsData = [
  {
    src: '/images/reviewgril3-removebg-preview.png',
    name: 'Jonathan Smith',
    tagline: 'Kahvenin tadı muhteşem, zarif ve yumuşak bir aromaya sahip.',
    description:
      'Kahvenin tadı kullanılan kahve çekirdeğinin türüne, kavrulma seviyesine ve demleme yöntemine bağlı olarak değişebilir. Bazı insanlar güçlü ve yoğun bir tat tercih ederken, bazıları daha zarif ve yumuşak aromaları sever.',
  },
  {
    src: '/images/reviewgril6-removebg-preview.png',
    name: 'Zehhira Jaden',
    tagline: 'Kahvenin tadı muhteşem, zarif ve yumuşak bir aromaya sahip.',
    description:
      'Kahvenin tadı kullanılan kahve çekirdeğinin türüne, kavrulma seviyesine ve demleme yöntemine bağlı olarak değişebilir. Bazı insanlar güçlü ve yoğun bir tat tercih ederken, bazıları daha zarif ve yumuşak aromaları sever.',
  },
  {
    src: '/images/reviewgril7-removebg-preview.png',
    name: 'Blue Tadery',
    tagline: 'Kahvenin tadı muhteşem, zarif ve yumuşak bir aromaya sahip.',
    description:
      'Kahvenin tadı kullanılan kahve çekirdeğinin türüne, kavrulma seviyesine ve demleme yöntemine bağlı olarak değişebilir. Bazı insanlar güçlü ve yoğun bir tat tercih ederken, bazıları daha zarif ve yumuşak aromaları sever.',
  },
];

const Reviews = () => {
  return (
    <section className="reviews container" id="reviews">
      <div className="heading">
        <h2>Müşteri Yorumları</h2>
      </div>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]} // Autoplay modülü eklendi
        autoplay={{
          delay: 3000, // 3 saniyede bir otomatik geçiş
          disableOnInteraction: false, // Kullanıcı kaydırdığında autoplay durmaz
        }}
        loop={true} // Sonsuz döngü modu
        className="mySwiper"
      >
        {reviewsData.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-box">
              <Image
                src={review.src}
                alt={review.name}
                width={150}
                height={150}
              />
              <h2>{review.name}</h2>
              <span>{review.tagline}</span>
              <p>{review.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
