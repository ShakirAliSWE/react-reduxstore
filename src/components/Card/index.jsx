import React from "react";
import { Link } from "react-router-dom";
import { base64Encode } from "../../utils";

export default function Card({ id = 0, title = "", image = "", price = 0 }) {
  if (title.length > 16) {
    title = title.substring(0, 12) + "...";
  }

  return (
    <Link to={`../product/${base64Encode(id)}`}>
      <div className="mb-2 custom-product-card" style={{ width: 176 }}>
        <div className="mb-2 custom-product-card-title">{title}</div>
        <img
          src={image}
          style={{ width: "140px", height: "120px" }}
          className="mb-2"
          alt={title}
        />
        <div className="fw-bolder mb-2">PKR {price}</div>
        <div className="text-center">
          <button className="w-100 btn btn-primary">ADD TO CART</button>
        </div>
      </div>
    </Link>
  );
}
