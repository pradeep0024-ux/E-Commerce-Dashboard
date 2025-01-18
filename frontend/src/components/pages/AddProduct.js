import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddProduct() {
  const [name, setProductName] = useState("");
  const [price, setProductPrice] = useState("");
  const [category, setProductCategory] = useState("");
  const [company, setProductCompany] = useState("");
  const [error, setError] = useState(false);

// success notification
  const showToastMessage = () => {
    toast.success('Product Added Successfully !', {
        position: toast.POSITION.TOP_RIGHT
    });
};
// 

  async function AddProduct() {

    if (!name || !price || !category || !company) {
      setError(true);
      console.log("error");
      return false;
    }

    let userId = JSON.parse(localStorage.getItem("user"))._id;
    let Product = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-type": "application/json",
      },
    });
    let response = await Product.json();
    showToastMessage();
  }

  function ClearInput(){
    console.log("clear called")
    setProductName("");
    setProductPrice("");
    setProductCategory("");
    setProductCompany("");
  }

  return (
    <div className="add-product">
      <h1>Add Products</h1>
      <input
        className="inputField"
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setProductName(e.target.value)}
      />
      {error && !name && (
        <span className="invalid-input"> Please Input Valid Name </span>
      )}

      <input
        className="inputField"
        type="text"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      {error && !price && (
        <span className="invalid-input"> Please Input Valid Price </span>
      )}

      <input
        className="inputField"
        type="text"
        placeholder="Product Category"
        value={category}
        onChange={(e) => setProductCategory(e.target.value)}
      />
      {error && !category && (
        <span className="invalid-input"> Please Input Valid Product Name </span>
      )}

      <input
        className="inputField"
        type="text"
        placeholder="Product Company"
        value={company}
        onChange={(e) => setProductCompany(e.target.value)}
      />
      {error && !company && (
        <span className="invalid-input"> Please Input Valid Company Name </span>
      )}

      <button className="btn-style" type="button" onClick={AddProduct}>
        Add Product
      </button>
      <button className="clear-button" type="reset" onClick={ClearInput}>Clear</button>
      <ToastContainer />
    </div>
  );
}
export default AddProduct;
