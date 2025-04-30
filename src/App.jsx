import ProductCard from "./components/ProductCard";
import { useState, useEffect } from "react";

function App() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);
// console.log(products);
 return products.map((product)=>

    <ProductCard
      key = {product.id}
      name={product.name}
      price = {product.price}
      description={product.description}
      imageLink = {product.image} onBuy={() => alert(`You bought ${product.name} for $${product.price}`)}
/>

  )

}

export default App;
