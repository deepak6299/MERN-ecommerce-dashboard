import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductProvider } from "./store/productItemsStore";
import { ProductContext } from "./store/productItemsStore";

export default function AdminDashboard() {

 const {products,handleDeleteButton,selectProductForEdit }=useContext(ProductContext)

 const handleEditProduct = (product) => {
  selectProductForEdit(product); // Store product for editing
};

  return (
    <ProductProvider>
    <div className="container ">
      <div>
        <button className="btn btn-primary ">
          <Link to="/addList" className="text-white text-decoration-none">
            Add New Product
          </Link>
        </button>
      </div>
      {products.map((item) => (
        <div className="row text-center" key={item.id}>
          <div className="col">
            <img src={item.image} style={{ width: "100%" }} />
          </div>
          <div className="col">{item.name}</div>
          <div className="col">{item.price}</div>
          <div className="col">{item.category}</div>
          <div className="col">{item.description}</div>
          <div className="col">
            <button className="btn btn-secondary ">
              <Link to="/edit" className="text-white text-decoration-none"   onClick={()=>handleEditProduct(item)}>Edit</Link></button>
          </div>
          <div className="col">
            <button className="btn btn-danger" onClick={()=>handleDeleteButton(item.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
    </ProductProvider>
  );
}
