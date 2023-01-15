import React from "react";
import { AllCategories } from "../Categories";
import { AllProducts } from "../Products";

export default function Home() {
  return (
    <div className="row">
      <div className="col-md-3 mb-2">
        <AllCategories />
      </div>
      <div className="col-md-9 mb-2">
        <AllProducts />
      </div>
    </div>
  );
}
