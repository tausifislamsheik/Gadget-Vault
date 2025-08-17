import { useEffect, useState } from "react";
import Phone from "../Phone/Phone";

const Phones = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() =>{
        fetch('allProducts.json')
        .then(res => res.json())
        .then(data => setPhones(data))
    },[])

    let allPhones = phones.filter(phone => phone.category === "Smartphone")

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ml-10">
            {
                allPhones.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
            }
        </div>
    );
};

export default Phones;