import React from "react";
import "./card.css";

const CardProduk = ({ name, price, description, image = "" }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2 className="card-title">{name}</h2>
      <p className="card-price">Rp {price.toLocaleString()}</p>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default CardProduk;
