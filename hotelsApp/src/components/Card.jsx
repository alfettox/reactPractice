import React from 'react';
import '../style/Card.css';
import starfilled from '../assets/star-filled.svg';
import starempty from '../assets/star.svg';
import phoneicon from '../assets/phone.svg';
import emailicon from '../assets/email.svg';

export default function Card({ image, starred, name, description, review, phone, email, price }) {
  return (
    <div className="card">
      <div className="card-top">
        {starred ? <img src={starfilled} width="30px" alt="Star Icon" /> : <img src={starempty} width="30px" alt="Star Icon" />}
        <h1>{name}</h1>
      </div>
      <img src={image} alt="Room image" />
      <p>{description}</p>
      <div>
        <h4>Review {review} / 5</h4>
        <h3>{price}$</h3>
      </div>
      <div className="contacts">
        <div>
          <img src={phoneicon} width="12px" /> {phone}</div>
        <div> <img src={emailicon} width="12px" /> {email}</div>
      </div>
    </div>
  );
}
