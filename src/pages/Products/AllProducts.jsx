import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./../../redux/sliceProducts";

import Card from "../../components/Card";
import { LoadingBox } from "../../components/Loading";
import { serverRequest } from "../../utils";

export default function AllProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [loadingProducts, setLoadingProducts] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoadingProducts(true);
    await serverRequest("https://fakestoreapi.com/products/", (data) => {
      dispatch(setProducts(data));
      setLoadingProducts(false);
    });
  };

  return (
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
  );
}
