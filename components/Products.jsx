import Image from 'next/image';

const productsData = [
  { src: '/images/product1.jpeg', types: '4 Çeşit Mevcut', title: 'Hazır Kahve', price: '$14' },
  { src: '/images/product2.jpeg', types: '4 Çeşit Mevcut', title: 'Siyah Kahve', price: '$14' },
  { src: '/images/product3.jpeg', types: '4 Çeşit Mevcut', title: 'Latte', price: '$14' },
  { src: '/images/product4.jpeg', types: '4 Çeşit Mevcut', title: 'Cappuccino', price: '$14' },
  { src: '/images/product5.jpeg', types: '4 Çeşit Mevcut', title: 'Espresso', price: '$14' },
  { src: '/images/product6.jpeg', types: '4 Çeşit Mevcut', title: 'Mocha', price: '$14' },
];

const Products = () => {
  return (
    <section className="products container" id="products">
      <div className="heading">
        <h2>En Çok Satan Ürünlerimiz</h2>
        <p>
          En iyi kahveyi yaratmak için her aşamada büyük bir özveri ve emek gerekir.
          Kendi yolculuğunuzda devam edebilmek için ihtiyacınız olan enerjiyi biz sağlıyoruz.
        </p>
      </div>
      <div className="product-content">
        {productsData.map((product, index) => (
          <div key={index} className="product-box">
            <i className="bx bx-heart heart-icon"></i>
            <Image
              src={product.src}
              alt={product.title}
              width={300}
              height={300}
            />
            <p>{product.types}</p>
            <h2>{product.title}</h2>
            <div className="product-info">
              <span>{product.price}</span>
              <i className="bx bx-shopping-bag"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
