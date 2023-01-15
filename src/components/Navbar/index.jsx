import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Search from "../Search";

export default function NavBar() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <nav className="navbar sticky-top bg-light shadow mb-2">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            REDUX STORE
          </Link>
          <div className="p-2">
            <Link
              type="button"
              to="../cart/"
              className="btn btn-link position-relative"
            >
              <i className="fa fa-shopping-cart fa-lg"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                {cart.length}
              </span>
            </Link>
          </div>
        </div>
      </nav>
      <Search />
    </>
  );
}
