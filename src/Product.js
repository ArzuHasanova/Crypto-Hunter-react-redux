import { useState, useEffect } from "react";

const Product = ({ item, deleteProduct }) => {
const [price, setPrice] = useState(item.current_price);
return (
<div className="product">
<img src={item.image} />
<h3>{item.name}</h3>
<div>
<button onClick={() => setPrice(price + 1)}>-</button> {price}{" "}
<button onClick={() => setPrice(price - 1)}>+</button>
</div>
<button onClick={() => deleteProduct(item.name)}>Delete</button>
</div>
);
};

export default Product;