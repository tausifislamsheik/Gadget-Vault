import { useEffect, useState } from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getStoredCart, getStoredWishlist } from "../../Utility/addToLS";
import Cart from "../Cart/Cart";
import { BiSolidSortAlt } from "react-icons/bi";
import Wishlist from "../Wishlist/Wishlist";


const Dashboard = () => {
    
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const allProducts = useLoaderData();
    
    useEffect(() =>{
        const storedCart = getStoredCart();
        const storedCartInt = storedCart.map(id => parseInt(id));
        const cart = allProducts.filter(cart => storedCartInt.includes(cart.id))
        setCart(cart)
    },[allProducts])

    useEffect(() =>{
        const storedWishlist = getStoredWishlist();
        const storedWishlistInt = storedWishlist.map(id => parseInt(id))
        const wishlist = allProducts.filter(wishlist => storedWishlistInt.includes(wishlist.id))
        setWishlist(wishlist)
    },[allProducts])
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
            <div className="lg:flex items-center mx-4 justify-around my-10">
                <h1 className="text-2xl lg:text-3xl font-bold">Cart</h1>
                <div className="flex items-center gap-5">
                    <p className="lg:text-xl font-semibold">Total cost: $ <span className="font-bold">10000</span></p>
                    <button className="btn btn-outline text-[#9538E2] lg:px-6 font-semibold p-2 rounded-full">Sort by Price <BiSolidSortAlt className="text-lg" /></button>
                    <button className="btn btn-outline text-white bg-[#9538E2] lg:px-10 font-semibold p-2 rounded-full">Purchase</button>
                </div>
            </div>
                {
                    cart.map((cart) => <Cart key={cart.id} cart={cart}></Cart>)
                }
                {
                    wishlist.map(wishlist => <Wishlist key={wishlist.id} wishlist={wishlist}></Wishlist>)
                }
            <Outlet>
            </Outlet>
        </div>
    );
};

export default Dashboard;


// className="btn btn-outline text-white hover:text-[#9538E2] px-10 font-semibold p-2 rounded-full mr-5"