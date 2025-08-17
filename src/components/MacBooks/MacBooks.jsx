import { useEffect, useState } from "react";
import MacBook from "../MacBook/MacBook";

const MacBooks = () => {

    const [macBooks, setMacBooks] = useState([]);

    useEffect(() =>{
        fetch('allProducts.json')
        .then(res => res.json())
        .then(data => setMacBooks(data))
    },[])

    const allMacBooks = macBooks.filter(macBook => macBook.category === "MacBook")

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ml-10">
            
            {
                allMacBooks.map(macBook => <MacBook key={macBook.id} macBook={macBook}></MacBook>)
            }
        </div>
    );
};

export default MacBooks;