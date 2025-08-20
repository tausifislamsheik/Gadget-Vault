import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { BiSolidSortAlt } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { getStoredCart, getStoredWishlist } from "../../Utility/addToLS";
import CartItem from "../CartItem/CartItem";
import WishlistItem from "../WishlistItem/WishlistItem";
import { toast } from "react-toastify";



const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const allProducts = useLoaderData(); 
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    
    useEffect(() => {

        setLoading(true);

        // Cart
        const storedCart = getStoredCart();
        const storedCartInt = storedCart.map(id => parseInt(id));
        const matchedCart = allProducts.filter(p => storedCartInt.includes(p.id));
        setCart(matchedCart);

        // Wishlist
        const storedWishlist = getStoredWishlist();
        const storedWishlistInt = storedWishlist.map(id => parseInt(id));
        const matchedWishlist = allProducts.filter(p => storedWishlistInt.includes(p.id));
        setWishlist(matchedWishlist);
        setLoading(false);
    }, [allProducts]);

    // total cost
    const totalCost = cart.reduce((sum, item) => sum + item.price, 0);

    // Loading

    if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard data...</p>
        </div>
      </div>
    );
  }


  // remove from cart
    const handleRemoveCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart.map(i => i.id)));
        toast('Selected product removed from Cart')
    };
  // remove from wishlist
    const handleRemoveWishlist = (id) => {
        const updatedWishlist = wishlist.filter(item => item.id !== id);
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist.map(i => i.id)));
        toast('Selected product removed from Wishlist')
    };

    // Sort by price

    const handleSort = () =>{
        const sortedCartPrice = [...cart].sort((a,b) => a.price - b.price)
        const sortedWishlistPrice = [...wishlist].sort((a,b) => a.price - b.price)
        setCart(sortedCartPrice)
        setWishlist(sortedWishlistPrice)
    }

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
                    <button onClick={handleSort} className="btn btn-outline text-[#9538E2] lg:px-6 font-semibold p-2 rounded-full">
                        Sort by Price <BiSolidSortAlt className="text-lg" />
                    </button>
                    <button className="btn btn-outline text-white bg-[#9538E2] lg:px-10 font-semibold p-2 rounded-full">
                        Purchase
                    </button>
                </div>
            </div>
                
            {cart?.length > 0 ? (
                cart.map(item => <CartItem key={item.id} cart={item} handleRemoveCart={handleRemoveCart}  />)
                ) : (
                <div className="text-center my-20">
                    <p className="text-4xl text-gray-400 border inline p-5 rounded-2xl border-gray-300">No items in cart</p>
                </div>
            )}


            {wishlist?.length > 0 ? (
                wishlist.map(item => <WishlistItem key={item.id} wishlist={item} handleRemoveWishlist={handleRemoveWishlist} />)
                ) : (
                <div className="text-center my-20">
                    <p className="text-4xl text-gray-400 border inline p-5 rounded-2xl border-gray-300">No items in wishlist</p>
                </div>
            )}

            {/* Pass products to children */}
            <Outlet context={{ allProducts, cart, setCart, wishlist, setWishlist }} />
        </div>
    );
};

export default Dashboard;
