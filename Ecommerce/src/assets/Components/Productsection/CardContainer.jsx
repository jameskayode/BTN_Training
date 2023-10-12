// import React from 'react';
import ProductCard from './Card';

const ParentComponent = () => {
  const productData = [
    {
      imageUrl: '/src/assets/images/P1.png',
      title: 'Graphic Design',
      category: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
      colors: ['red', 'green', 'blue'],
      column: 35,
    },
    {
      imageUrl: '/src/assets/images/P2.png',
      title: 'Graphic Design',
      category: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
      colors: ['red', 'green', 'blue'],
      column: 36,
    },
    {
      imageUrl: '/src/assets/images/P3.png',
      title: 'Graphic Design',
      category: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
      colors: ['red', 'green', 'blue'],
      column: 37,
    },
    {
      imageUrl: '/src/assets/images/P4.png',
      title: 'Graphic Design',
      category: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
      colors: ['red', 'green', 'blue'],
      column: 38,
    },
    {
      imageUrl: '/src/assets/images/P5.png',
      title: 'Graphic Design',
      category: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
      colors: ['red', 'green', 'blue'],
      column: 38,
    },
    {
      imageUrl: '/src/assets/images/P6.png',
      title: 'Graphic Design',
      category: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
      colors: ['red', 'green', 'blue'],
      column: 38,
    },
    {
      imageUrl: '/src/assets/images/P7.png',
      title: 'Graphic Design',
      category: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
      colors: ['red', 'green', 'blue'],
      column: 38,
    },
    {
      imageUrl: '/src/assets/images/P8.png',
      title: 'Graphic Design',
      category: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
      colors: ['red', 'green', 'blue'],
      column: 38,
    },
    {
      imageUrl: '/src/assets/images/P9.png',
      title: 'Graphic Design',
      category: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
      colors: ['red', 'green', 'blue'],
      column: 38,
    },
    {
      imageUrl: '/src/assets/images/P10.png',
      title: 'Graphic Design',
      category: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
      colors: ['red', 'green', 'blue'],
      column: 38,
    },
    {
      imageUrl: '/src/assets/images/P11.png',
      title: 'Graphic Design',
      category: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
      colors: ['red', 'green', 'blue'],
      column: 38,
    },
    {
      imageUrl: '/src/assets/images/P12.png',
      title: 'Graphic Design',
      category: 'English Department',
      price: 16.48,
      discountPrice: 6.48,
      colors: ['red', 'green', 'blue'],
      column: 38,
    },
    
    // Add data for other cards as needed
  ];

  const renderProductCardRow = (start, end) => {
    return productData.slice(start, end).map((data, index) => (
      <ProductCard key={index} {...data} />
    ));
  };

  return (
    <div className="desktop-product-cards-10">
      <div className="container5">
        {Array.from({ length: 3 }).map((_, rowIndex) => (
          <div className="row" key={rowIndex}>
            {renderProductCardRow(rowIndex * 4, (rowIndex + 1) * 4)}
          </div>
        ))}
        <div className="pagination">
          <div className="ul">
            <div className="prev">
              <b className="login-register">First</b>
            </div>
            <div className="div6">
              <b className="login-register">1</b>
            </div>
            <div className="div7">
              <b className="login-register">2</b>
            </div>
            <div className="div6">
              <b className="login-register">3</b>
            </div>
            <div className="next">
              <b className="login-register">Next</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentComponent;
