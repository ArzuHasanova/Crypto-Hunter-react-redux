import { useState, useEffect } from "react";
import Product from "./Product";

const Products = () => {
const [data, setData] = useState([]);

useEffect(() => {
fetch(
"https://vuejsproject-806e8-default-rtdb.firebaseio.com/AllProducts.json"
)
.then((res) => res.json())
.then((result) => setData(result));
}, []);
const deleteProduct = (productName) =>
setData(data.filter((item) => item.name !== productName));
return (
<div className="products">
<div className="products-wrapper">
{data.map((item) => (
<Product item={item} deleteProduct={deleteProduct} />
))}
</div>

</div>
);
};

export default Products;