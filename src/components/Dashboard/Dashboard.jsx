// import { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
import { BiSolidSortAlt } from "react-icons/bi";

const Dashboard = () => {
    // const {id} = useParams();
    // const idNum = parseInt(id)
    // const allProducts = useLoaderData();
    // const [cart, setCart] = useState([]);
    
    // useEffect(() =>{
    //     const cartList = allProducts.filter(cart => cart.id === idNum)
    //     setCart(cartList)
    // },[])
    return (
        <div>
           <div className="bg-[#9538E2] text-center text-white mx-4 lg:mx-12">
                <h1 className="text-xl lg:text-3xl font-bold mb-3">Dashboard</h1>
                <p className="text-gray-200 text-sm">Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="py-10">
                     <button className="btn btn-outline text-white hover:text-[#9538E2] px-10 font-semibold p-2 rounded-full mr-5">Cart</button>
                     <button className="btn btn-outline text-white hover:text-[#9538E2] px-10 font-semibold p-2 rounded-full">Wishlist</button>
                </div>
            </div> 
            <div className="flex items-center justify-around my-10">
                <h1 className="text-3xl font-bold">Cart</h1>
                <div className="flex items-center gap-5">
                    <p className="text-xl font-semibold">Total cost: $ <span className="font-bold">10000</span></p>
                    <button className="btn btn-outline text-[#9538E2] px-10 font-semibold p-2 rounded-full">Sort by Price <BiSolidSortAlt className="text-lg" /></button>
                    <button className="btn btn-outline text-white bg-[#9538E2] px-10 font-semibold p-2 rounded-full">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;