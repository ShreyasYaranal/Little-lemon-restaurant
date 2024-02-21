import React, { useState, useEffect } from 'react';
import './styles.css';

const Main = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ['images/Mario_and_Adrian_A.jpg', 'images/Mario_and_Adrian_B.jpg']; // Add paths to your images

  useEffect(() => {
      const interval = setInterval(() => {
          // Toggle between image indices
          setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
      }, 5000); // Change image every 5 seconds (5000 milliseconds)

      return () => clearInterval(interval);
  }, []);

    return (
        <main>
            <div className="hero">
                <div className='hero-col'>
                    <h1>LITTLE LEMON RESTAURANT</h1>
                    <h5>Berlin</h5>
                    <p>The Little Lemon restaurant is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button className="cta-button" href="/menu">Menu</button>
                </div>
                <div>
                    <div className='hero-col'>
                        <img className='lemon-slice' src="images\lemon-slice.png" alt="Lemon Slice"/>
                    </div>
                </div>
            </div>
            <div className='food-menu'>
                <div className='container'>
                    <div className='row'>
                        <div className='menu-col'>
                            <img src="images\bruchetta.svg" alt="Bruschetta"/>
                            <h2>Bruschetta</h2>
                            <p className="description">Toasted bread topped with tomatoes, Parmesan cheese, garlic, and fresh basil.</p>
                            <p className="price">€ 7.99</p>
                            <button type="button">Order for Delivery</button>
                        </div>
                        <div className='menu-col'>
                            <img src="images\greek salad.jpg" alt="Greek Salad"/>
                            <h2>Greek Salad</h2>
                            <p className="description">sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.</p>
                            <p className="price">€ 6.99</p>
                            <button type="button">Order for Delivery</button>
                        </div>
                        <div className='menu-col'>
                            <img src="images\lemon dessert.jpg" alt="Lemon Cake"/>
                            <h2>Lemon Cake</h2>
                            <p className="description">a dense, flavorful and very popular cake.</p>
                            <p className="price">€ 8.99</p>
                            <button type="button">Order for Delivery</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <div className='row'>
                        <div className='about-col'>
                            <h2>About Little Lemon</h2>
                            <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Berlin, and were inspired to bring the flavors of their hometown in Italy to the people of Berlin. The two brothers continue to oversee the Little Lemon restaurant, nearly fifteen years later.</p>
                        </div>
                        <div className='about-col'>
                            <img
                                className="about-image"
                                src={images[imageIndex]}
                                alt="Mario and Adrian"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;