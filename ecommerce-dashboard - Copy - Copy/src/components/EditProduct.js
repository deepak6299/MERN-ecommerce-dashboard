import React, { useContext ,useState,useEffect} from 'react'
import { ProductContext } from '../store/productItemsStore'
import { useNavigate } from 'react-router-dom';

export default function EditProduct() {
  const { selectedProduct, handleEdit } = useContext(ProductContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const navigate=useNavigate()

  // Populate the form with the selected product data
  useEffect(() => {
    if (selectedProduct) {
      setName(selectedProduct.name);
      setPrice(selectedProduct.price);
      setCategory(selectedProduct.category);
      setImage(selectedProduct.image);
      setDescription(selectedProduct.description);
    }
  }, [selectedProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...selectedProduct,
      name,
      price,
      category,
      image,
      description,
    };
    handleEdit(updatedProduct); // Call the context edit method
    navigate("/")
  };
  return (
    <div className=" addProductForm shadow p-3 mb-5 bg-body-tertiary rounded">
    <form  onSubmit={handleSubmit}>
     <h3>Edit Product</h3>
    <div className="mb-3">
         <label htmlFor="exampleFormControlInput1" className="form-label">
           Name
         </label>
         <input
           type="text"
           className="form-control"
           id="exampleFormControlInput1"
           placeholder="Exp:-T-shirt"
           value={name}
           onChange={(e) => setName(e.target.value)}
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
           value={price}
           onChange={(e) => setPrice(e.target.value)}
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
           value={category}
           onChange={(e) => setCategory(e.target.value)}
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
           value={image}
            onChange={(e) => setImage(e.target.value)}
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
           value={description}
           onChange={(e) => setDescription(e.target.value)}
         ></textarea>
       </div>
       <button className="btn btn-primary" >Save changes</button>
    </form>
     </div>
  )
}
