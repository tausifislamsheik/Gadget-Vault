import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { BiSolidSortAlt } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { getStoredCart } from "../../Utility/addToLS";

const Dashboard = () => {
    const allProducts = useLoaderData(); 
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        
        // Cart
        const storedCart = getStoredCart();
        const storedCartInt = storedCart.map(id => parseInt(id));
        const matchedCart = allProducts.filter(p => storedCartInt.includes(p.id));
        setCart(matchedCart);

        // Wishlist
        const storedWishlist = getStoredCart();
        const storedWishlistInt = storedWishlist.map(id => parseInt(id));
        const matchedWishlist = allProducts.filter(p => storedWishlistInt.includes(p.id));
        setWishlist(matchedWishlist);
    }, [allProducts]);

    // total cost
    const totalCost = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <Helmet>
                <title>Gadget Vault | Dashboard</title>
            </Helmet>
           <div className="bg-[#9538E2] text-center text-white mx-4 lg:mx-12">
                <h1 className="text-xl lg:text-3xl font-bold mb-3">Dashboard</h1>
                <p className="text-gray-200 text-sm">Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="py-10">
                     <NavLink to='cart' className={({isActive}) => 
                        isActive ? 'text-[#9538E2] bg-white rounded-3xl px-10 py-3 font-semibold mr-4' : 
                                   'btn btn-outline rounded-3xl px-10 py-3 hover:text-[#9538E2] mr-4'}>
                        Cart
                     </NavLink>
                     <NavLink to='wishlist' className={({isActive}) => 
                        isActive ? 'text-[#9538E2] bg-white rounded-3xl px-10 py-3 font-semibold ml-4' : 
                                   'btn btn-outline rounded-3xl px-10 py-3 hover:text-[#9538E2] ml-4'}>
                        Wishlist
                     </NavLink>
                </div>
            </div> 
            <div className="lg:flex items-center mx-4 justify-around my-10">
                <h1 className="text-2xl lg:text-3xl font-bold">Cart</h1>
                <div className="flex items-center gap-5">
                    <p className="lg:text-xl font-semibold">
                        Total cost: $ <span className="font-bold">{totalCost}</span>
                    </p>
                    <button className="btn btn-outline text-[#9538E2] lg:px-6 font-semibold p-2 rounded-full">
                        Sort by Price <BiSolidSortAlt className="text-lg" />
                    </button>
                    <button className="btn btn-outline text-white bg-[#9538E2] lg:px-10 font-semibold p-2 rounded-full">
                        Purchase
                    </button>
                </div>
            </div>
                
            {/* Pass products to children */}
            <Outlet context={{ allProducts, cart, setCart, wishlist, setWishlist }} />
        </div>
    );
};

export default Dashboard;
