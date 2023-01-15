import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { EmptyCart } from "../../components/NoRecord";
import CartItem from "./CartItem";

const CartComponent = ({ cart }) => {
  let subTotal = 0;
  let discountTotal = 0;

  return (
    <div className="row">
      <div className="offset-md-1 col-md-7">
        <div className="d-flex flex-column mb-3">
          {cart.map((item, i) => {
            subTotal += item.price * item.qty;
            return <CartItem item={item} key={i} />;
          })}
        </div>
      </div>
      <div className="col-md-4">
        <div className="custom-container">
          <div className="fw-bold">Total Items ({cart.length})</div>
          <table className="table mb-4">
            <tbody>
              <tr>
                <td>Sub Total</td>
                <td className="text-end">{subTotal.toLocaleString()}</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td className="text-end">{discountTotal.toLocaleString()}</td>
              </tr>
              <tr>
                <th>Total Amount</th>
                <th className="text-end">
                  {(subTotal - discountTotal).toLocaleString()}
                </th>
              </tr>
            </tbody>
          </table>
          <div className="mb-2">
            <button className="btn btn-primary w-100">CHECK OUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <div className="mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="../../">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Cart
            </li>
          </ol>
        </nav>
      </div>
      {cart.length > 0 ? <CartComponent cart={cart} /> : <EmptyCart />}
    </>
  );
}
