import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loading, LoadingBox } from "../../components/Loading";
import { serverRequest, base64Decode } from "../../utils";

import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../redux/sliceCart";

export default function ViewProduct() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [cartQty, setCartQty] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    setLoading(true);
    await serverRequest(
      `https://fakestoreapi.com/products/${base64Decode(id)}`,
      (data) => {
        setProduct(data);
        const cartProduct = cart.filter(
          (p) => p.id === parseInt(base64Decode(id))
        );
        if (cartProduct.length > 0) {
          setProduct(data);
          setCartQty(cartProduct[0].qty);
        }

        setLoading(false);
      }
    );
  };

  const handlerAddToCart = () => {
    const p = { ...product, qty: cartQty };
    dispatch(updateCart(p));
  };

  return (
    <>
      <div className="mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="../../">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.title}
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-md-3">
          {loading ? (
            <LoadingBox lines={1} />
          ) : (
            <div className="text-center custom-container">
              <img
                src={product.image}
                className="img-fluid"
                style={{ width: "60%" }}
                alt={product.image}
              />
            </div>
          )}
        </div>
        <div className="col-md-8">
          {loading ? (
            <Loading lines={8} />
          ) : (
            <>
              <div className="h4">{product.title}</div>
              <div className="badge bg-warning mb-2 text-uppercase">
                <Link to={`../category/${product.category}`}>
                  {product.category}
                </Link>
              </div>
              <div className="fw-normal mb-2">{product.description}</div>
              <div className="h2 fw-bold">PKR {product.price}</div>
              <div className="h5 fw-normal mb-4">
                Total : {(product.price * cartQty).toLocaleString()}
              </div>
              <div className="mb-2" style={{ width: "120px" }}>
                <div className="input-group input-group-sm">
                  <button
                    className="btn btn-outline-danger"
                    type="button"
                    id="addToCarMinus"
                    onClick={() =>
                      cartQty > 1 ? setCartQty(cartQty - 1) : setCartQty(1)
                    }
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  <input
                    type="text"
                    className="form-control text-center"
                    value={cartQty}
                    disabled
                  />
                  <button
                    className="btn btn-outline-success"
                    type="button"
                    id="addToCarPlus"
                    onClick={() => setCartQty(cartQty + 1)}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-row mb-3">
                <div className="p-1">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handlerAddToCart}
                    style={{ width: 220 }}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="p-1">
                  <button type="button" className="btn btn-outline-success">
                    <i className="fa fa-heart"></i>
                  </button>
                </div>
                <div className="p-1">
                  <button type="button" className="btn btn-outline-primary">
                    <i className="fa fa-share"></i>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
