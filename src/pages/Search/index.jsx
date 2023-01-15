import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../components/Card";
import { LoadingBox } from "../../components/Loading";
import EmptySearch from "../../components/NoRecord/EmptySearch";
import { base64Decode, serverRequest } from "../../utils";

const SearchContainer = ({ products }) => {
  if (!products.length) {
    return <EmptySearch />;
  }

  return (
    <div className="d-flex flex-wrap">
      {products.map((p) => (
        <Card
          key={p.id}
          id={p.id}
          title={p.title}
          image={p.image}
          price={p.price}
        />
      ))}
    </div>
  );
};

export default function Search() {
  const params = useParams();
  const q = params.q ? base64Decode(params.q) : "";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts(q);
  }, [q]);

  const fetchProducts = async (query) => {
    setLoading(true);
    await serverRequest(`https://fakestoreapi.com/products`, (data) => {
      const searchProduct = data.filter((p) => {
        const q = query.toLowerCase();
        const title = p.title.toLowerCase();
        const category = p.category.toLowerCase();
        const description = p.description.toLowerCase();
        return (
          title.includes(q) || description.includes(q) || category.includes(q)
        );
      });
      setProducts(searchProduct);
      setLoading(false);
    });
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
              {q}
            </li>
          </ol>
        </nav>
      </div>
      {loading ? <LoadingBox /> : <SearchContainer products={products} />}
    </>
  );
}
