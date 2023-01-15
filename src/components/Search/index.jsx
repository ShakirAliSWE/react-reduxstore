import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { base64Encode, serverRequest } from "./../../utils";

export default function Search() {
  const navigate = useNavigate();
  const [searchString, setSearchString] = useState("");
  const handlerSearch = (e) => {
    setSearchString(e.target.value);
  };

  const triggerSearch = (e) => {
    if (e.keyCode === 13) {
      navigate(`../search/${base64Encode(searchString)}`);
    }
  };

  return (
    <div className="d-flex justify-content-center m-3">
      <input
        className="form-control shadow"
        placeholder="Search items..."
        style={{ width: "34rem" }}
        onChange={handlerSearch}
        onKeyUp={triggerSearch}
      />
    </div>
  );
}
