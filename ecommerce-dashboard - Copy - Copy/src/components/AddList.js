import React, { useContext, useState } from "react";
import { ProductContext } from "../store/productItemsStore";
import { useNavigate } from 'react-router-dom'


export default function AddList() {

  const{handlePostProduct}=useContext(ProductContext)

  const[name,setname]=useState("")
  const[price,setPrice]=useState("")
  const[category,setcategory]=useState("")
  const[image,setimage]=useState("")
  const[description,setdescription]=useState("")

  const navigate=useNavigate()


const handleSubmit=(e)=>{
e.preventDefault()
handlePostProduct(name,price,category,image,description)
  // console.log(name,price,category,image,description);
  navigate("/admin")
  
}
   
  return (
    <div className=" addProductForm shadow p-3 mb-5 bg-body-tertiary rounded">
   <form onSubmit={handleSubmit}>
    <h3>Add New Product</h3>
   <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Exp:-T-shirt"
         onChange={(e)=>setname(e.target.value)}
      
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Price
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="$200"
          onChange={(e)=>setPrice(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Category
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Sports,fashion"
          onChange={(e)=>setcategory(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Image
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={(e)=>setimage(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(e)=>setdescription(e.target.value)}
        ></textarea>
      </div>
      <button className="btn btn-primary" >Add</button>
   </form>
    </div>
  );
}
