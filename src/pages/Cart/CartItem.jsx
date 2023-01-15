import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeCart } from "../../redux/sliceCart";
import { base64Encode } from "../../utils";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const handlerRemove = (id) => {
    dispatch(removeCart(id));
  };

  return (
    <div className="custom-container mb-2">
      <div className="row">
        <div className="col-md-1 mb-2">
          <div className="text-center">
            <img
              src={item.image}
              className="img-fluid"
              style={{ width: "4rem" }}
            />
          </div>
        </div>
        <div className="col-md-9">
          <div className="fw-normal">
            <Link to={`../product/${base64Encode(item.id)}`}>{item.title}</Link>
          </div>
          <div className="badge bg-success">{item.qty} Items</div>
          <div className="fw-bold">
            PKR {(item.qty * item.price).toLocaleString()}
          </div>
        </div>
        <div className="col-md-2 text-end">
          <button
            className="btn text-danger"
            title="Click to remove from cart"
            onClick={() => handlerRemove(item.id)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
