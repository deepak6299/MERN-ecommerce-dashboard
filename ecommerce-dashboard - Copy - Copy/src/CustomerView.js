import React,{useState,useContext} from "react";
import ProductList from "./components/ProductList";
import { ProductContext } from "./store/productItemsStore";



export default function CustomerView() {

  const { products } = useContext(ProductContext); // Get the product list from context
  const [searchTerm, setSearchTerm] = useState(""); // Store the search input
  
  // Function to handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
   
      <div>
        <div className="container searchBox">
          <input type="text " placeholder="Search Product Here....." onChange={handleSearch}
          value={searchTerm}/>
        </div>
        <ProductList products={filteredProducts}></ProductList>
      </div>
   
  );
}
