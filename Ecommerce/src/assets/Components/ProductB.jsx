
// import React from 'react'
import './navbar.css'
import BestCard from './BestCard.jsx'

const ProductB = () => {
  const featuredPosts = [
    {
      imgSrc: '/src/assets/images/mainroad.jpg',
      tag: 'NEW',
      title: 'Loudest à la Madison #1',
      tags: ['Google', 'Trending', 'New'],
      description: [
        `Problems trying to resolve the conflict between`,
        `the two major realms of Classical physics: Newtonian mechanics`,
      ],
      date: '22 April 2021',
      comments: 10,
    },
    {
      imgSrc: '/src/assets/images/car2.png',
      tag: 'NEW',
      title: 'Loudest à la Madison #1',
      tags: ['Google', 'Trending', 'New'],
      description: [
        `Problems trying to resolve the conflict between`,
        `the two major realms of Classical physics: Newtonian mechanics`,
      ],
      date: '22 April 2021',
      comments: 10,
    },
    {
      imgSrc: '/src/assets/images/umbrella.jpg',
      tag: 'NEW',
      title: 'Loudest à la Madison #1',
      tags: ['Google', 'Trending', 'New'],
      description: [
        `Problems trying to resolve the conflict between`,
        `the two major realms of Classical physics: Newtonian mechanics`,
      ],
      date: '22 April 2021',
      comments: 10,
    }
    
  ];


  return (
    <div className="desktop-blog-3">
      <div className="container6">
        <div className="row10">
          <div className="main-content1">
            <div className="login-register">Practice Advice</div>
            <div className="h1-headline">Featured Posts</div>
            <span className="paragraph2">
              Problems trying to resolve the conflict between 
              <br />
              the two major realms of Classical physics: Newtonian mechanics
            </span>
          </div>
        </div>
        <div className="row11">
          {featuredPosts.map((post, index) => (
            <div className="col-md-44" key={index}>
              <BestCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductB;

