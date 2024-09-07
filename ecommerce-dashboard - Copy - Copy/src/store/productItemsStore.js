import { createContext, useState } from "react";


export const ProductContext = createContext();

const initialProduct = [
  {
    id: "1",
    image:
      "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077",
    name: "t-shirt",
    price: "$20",
    category: "fashion",
    description: "made up of cotton",
  },
  {
    id: "2",
    image:
      "https://truewerk.com/cdn/shop/files/t1_werkpants_mens_olive_flat_lay_4825e693-f588-4813-bff0-1d4c46ce82ce.jpg?v=1713822726&width=2400",
    name: "Work Pants",
    price: "$50",
    category: "fashion",
    description: "made up of cotton",
  },
  {
    id: "3",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/in/sm-a055fzkdins/gallery/in-galaxy-a05-sm-a055-sm-a055fzkdins-thumb-538466635?$344_344_PNG$",
    name: "Smart Phone",
    price: "$250",
    category: "Electronics",
    description: "High resolution camera with monster battery",
  },

  {
    id: "4",
    image: "https://m.media-amazon.com/images/I/61+CDBo-phL.jpg",
    name: "Water Bottle",
    price: "$50",
    category: "Grosseries",
    description: "made of copper ",
  },
  {
    id: "5",
    image: "https://easycart.in/wp-content/uploads/2023/03/38-8.jpg",
    name: "Goggles",
    price: "$50",
    category: "fashion",
    description: "UV-rays protection",
  },
];

export const ProductProvider = ({ children }) => {
  let [products, setProducts] = useState(initialProduct);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDeleteButton = (productId) => {
    const newProduct = products.filter((item) => item.id !== productId);
    setProducts(newProduct);
  };

  const handlePostProduct = (name, price, category, image, description) => {
    const updatedProductsList = [
      { name, price, category, image, description },
      ...products,
    ];
    setProducts(updatedProductsList);
  };

 
  const handleEdit = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const selectProductForEdit = (product) => {
    setSelectedProduct(product); // Store product to be edited
  };

  return (
    <ProductContext.Provider
      value={{ products, handleDeleteButton, handlePostProduct,handleEdit,   selectedProduct,
        selectProductForEdit }}
      
      
    >
      {children}
    </ProductContext.Provider>
  );
};
