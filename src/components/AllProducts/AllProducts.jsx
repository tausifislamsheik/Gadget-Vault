import { useEffect, useState } from "react";
import AllProduct from "../AllProduct/AllProduct";

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() =>{
        fetch('allProducts.json')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ml-10">
            {
                allProducts.map(allProduct => <AllProduct key={allProduct.id} allProduct={allProduct}></AllProduct>)
            }
        </div>
    );
};

export default AllProducts;