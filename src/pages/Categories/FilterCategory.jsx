import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./../../redux/sliceProducts";
import { useParams, Link } from "react-router-dom";
import Card from "../../components/Card";
import { LoadingBox } from "../../components/Loading";
import { serverRequest } from "../../utils";

export default function FilterCategory() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { id } = useParams();
  const [loadingProducts, setLoadingProducts] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [id]);

  const fetchProducts = async () => {
    setLoadingProducts(true);
    await serverRequest(
      `https://fakestoreapi.com/products/category/${id}`,
      (data) => {
        dispatch(setProducts(data));
        setLoadingProducts(false);
      }
    );
  };

  return (
    <>
      <div className="">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="../../">Home</Link>
            </li>
            <li
              className="breadcrumb-item active text-capitalize"
              aria-current="page"
            >
              {id}
            </li>
          </ol>
        </nav>
      </div>
      <div className="d-flex flex-wrap">
        {loadingProducts ? (
          <LoadingBox lines={9} />
        ) : (
          products.map((p) => (
            <Card
              key={p.id}
              id={p.id}
              title={p.title}
              image={p.image}
              price={p.price}
            />
          ))
        )}
      </div>
    </>
  );
}
