import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/sliceCategory";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";

import { serverRequest } from "../../utils";

export default function AllCategories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    await serverRequest(
      "https://fakestoreapi.com/products/categories",
      (data) => {
        dispatch(setCategory(data));
      }
    );
  };

  return (
    <div className="mb-2 custom-container">
      <div className="fw-bold mb-2">Categories</div>
      {categories.length ? (
        <ul className="list-group list-group-flush">
          {categories.map((c, i) => (
            <Link
              key={i}
              to={`../category/${c}`}
              className="list-group-item list-group-item-action text-capitalize"
            >
              {c}
            </Link>
          ))}
        </ul>
      ) : (
        <Loading lines={6} />
      )}
    </div>
  );
}
