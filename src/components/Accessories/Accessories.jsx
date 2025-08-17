import { useEffect, useState } from "react";
import Accessory from "../Accessory/Accessory";

const Accessories = () => {

    const [accessories, setAccessories] = useState([]);

    useEffect(() =>{
        fetch('allProducts.json')
        .then(res => res.json())
        .then(data => setAccessories(data))
    },[])

    const allAccessories = accessories.filter(accessory => accessory.category === "Accessory")
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ml-10">
            {
                allAccessories.map(accessory => <Accessory key={accessory.id} accessory={accessory}></Accessory>)
            }
        </div>
    );
};

export default Accessories;