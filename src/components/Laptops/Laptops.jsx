import { useEffect, useState } from "react";
import Laptop from "../Laptop/Laptop";

const Laptops = () => {
    const [laptops,setLaptops] = useState([]);
    
    useEffect(() =>{
        fetch('allProducts.json')
        .then(res => res.json())
        .then(data => setLaptops(data))
    },[])

    const allLaptops = laptops.filter(laptop => laptop.category === 'Laptop')

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ml-10">
            {
               allLaptops.map(laptop => <Laptop key={laptop.id} laptop={laptop}></Laptop>) 
            }
        </div>
    );
};

export default Laptops;