import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import {BsPencilSquare} from "react-icons/bs";

function Product() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    ProductData();
  }, []);

  
  async function ProductData() {
    let data = await fetch("http://localhost:5000/products");
    let response = await data.json();
    setProducts(response);
  }

  async function deleteProduct(id) {
    console.log(id);
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "delete",
    });
    let response = await result.json();
    console.log(response);
    if (response) {
      alert("Do You Want to Delete");
      ProductData();
    }
  }

  async function HandleSearch(event) {
    console.log(event.target.value);
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      let response = await result.json();
      if (response) {
        setProducts(response);
      }
    } else {
      ProductData();
    }
  }

  return (
    <div className="product-list">
      <h1>Our Products</h1>
      <input className="search-box" type="text" placeholder="search" onChange={HandleSearch} />
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Actions</li>
      </ul>
      {products.length>0?products.map((item, index) => (
        <ul key={item}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>${item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>
          <li>
            <AiFillDelete className="delete-icon" onClick={() => deleteProduct(item._id)} />
            <Link to={"/update/" + item._id}> <BsPencilSquare/> </Link>
          </li>
        </ul>
      )):
      <h1>No Product Found</h1>
      }
      
    </div>
  );
}
export default Product;
