// import { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";

import { NavLink, Outlet } from "react-router-dom";


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
                     <NavLink className={({isActive, isPending}) => isActive ? 'text-[#9538E2] bg-white rounded-3xl px-10 py-3 font-semibold mr-4' : isPending ? '' : 'btn btn-outline rounded-3xl px-10 py-3 hover:text-[#9538E2] mr-4'} to='cart'>
                        <button className="cursor-pointer">Cart</button>
                     </NavLink>
                     <NavLink className={({isActive, isPending}) => isActive ? 'text-[#9538E2] bg-white rounded-3xl px-10 py-3 font-semibold ml-4' : isPending ? '' : 'btn btn-outline rounded-3xl px-10 py-3 hover:text-[#9538E2] ml-4'} to='wishlist'>
                       <button className="cursor-pointer">Wishlist</button>
                     </NavLink>
                </div>
            </div> 
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;


// className="btn btn-outline text-white hover:text-[#9538E2] px-10 font-semibold p-2 rounded-full mr-5"