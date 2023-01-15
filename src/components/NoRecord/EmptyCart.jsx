import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="text-center text-muted py-4">
      <div className="mb-4">
        <i className="fa fa-shopping-cart fa-4x"></i>
      </div>
      <div className="">
        <Link to="../../">
          Continue Shopping <i className="fa fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}
