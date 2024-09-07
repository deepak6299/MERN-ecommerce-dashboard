import React, { useContext } from 'react'


export default function ProductList({products}) {


console.log(products);

  
  
  return (
<div className='container productListing '>
    {
        products.map((item)=>  
            <div className="card " style={{width: "18rem"}} key={item.id}>
        <img src={item.image} className="card-img-top" alt="..."/>
        <div className="card-body ">
          <h5 className="card-title">{item.name}</h5>
          <h6 >{item.price}</h6>
          <a href="#" className="btn btn-success">Buy Now</a>
        </div>
      </div>
        )
    }




</div>
  )
}
