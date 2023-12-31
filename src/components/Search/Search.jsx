import React, { useState } from "react";
import ImageComponent from "./imageComponent";
import "./Search.css"

const Search = () => {
  const [img, setImg] = useState("");
  const helper = (e) => {
    let data = e.target.value;
    setImg(data);
  };
  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Enter the image to search"
          onChange={helper}
          value={img}
        />
        {img === "" ? null : <ImageComponent name={img} />}
      </div>
    </>
  );
};

export default Search;
