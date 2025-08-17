import { useEffect, useState } from "react";
import SmartWatch from "../SmartWatch/SmartWatch";

const SmartWatches = () => {

    const [smartWatches, setSmartWatches] = useState([]);

    useEffect(() =>{
        fetch('allProducts.json')
        .then(res => res.json())
        .then(data => setSmartWatches(data))
    },[])

    let allSmartWatches = smartWatches.filter(smartWatch => smartWatch.category === "Smartwatch")
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ml-10">
            {
                allSmartWatches.map(smartWatch => <SmartWatch key={smartWatch.id} smartWatch={smartWatch}></SmartWatch>)
            }
        </div>
    );
};

export default SmartWatches;