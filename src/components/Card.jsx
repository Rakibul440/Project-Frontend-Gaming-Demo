import React from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa'; 
import './css/card.scss';
import img from "../assets/cards/img/pubg.jpg"

// import cards from "../assets/cards/cards.js"

const Card = ({cards}) => {
 

  return (
    <>
      {cards.map(card=>(
        <div className="card-container" key={card.id}>

          <div className="card-image">
            <img src={card.imageUrl} alt={card.productName} />
            {card.discount && <span className="discount-badge">{card.discount}</span>}
            <div className="cart-icon">
              <FaShoppingCart />
            </div>
          </div>

          <div className="card-content">
            <h3>{card.productName}</h3>
            <div className="stars">
              {[...Array(5)].map((_, index) => {
                const starColor = index < card.rating ? '#ffc107' : '#bbb';
                return <FaStar key={index} color={starColor} />;
              })}
            </div>
          </div>

      </div>
      ))}
  </>
  );
};

export default Card;
