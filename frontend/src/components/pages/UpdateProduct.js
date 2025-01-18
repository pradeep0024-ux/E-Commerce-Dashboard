import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateProduct() {
  const [name, setProductName] = useState("");
  const [price, setProductPrice] = useState("");
  const [category, setProductCategory] = useState("");
  const [company, setProductCompany] = useState("");

  const params = useParams();
  const navigate = useNavigate();
  useState(() => {
    ProductDetails();
  }, []);

  async function ProductDetails() {
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    let response = await result.json();
    console.log("dekho data bhi a gaya", response);
    setProductName(response.name);
    setProductPrice(response.price);
    setProductCategory(response.category);
    setProductCompany(response.company);
  }

  async function UpdateProductData() {
    console.log({ name, price, category, company });
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-type": "application/json",
      },
    });
    
    let response = await result.json();
    console.log(response);
    navigate("/");
  }
  return (
    <div className="update-product">
      <h1> UpdateProduct</h1>
      <input
        className="inputField"
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        className="inputField"
        type="text"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <input
        className="inputField"
        type="text"
        placeholder="Product Category"
        value={category}
        onChange={(e) => setProductCategory(e.target.value)}
      />
      <input
        className="inputField"
        type="text"
        placeholder="Product Company"
        value={company}
        onChange={(e) => setProductCompany(e.target.value)}
      />
      <button className="btn-style" type="button" onClick={UpdateProductData}>
        Update Product
      </button>
    </div>
  );
}
export default UpdateProduct;
