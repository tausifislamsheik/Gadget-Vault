import { useLoaderData } from "react-router-dom";
import WishlistItem from "../WishlistItem/WishlistItem";
import { getStoredWishlist } from "../../Utility/addToLS";
import { useEffect, useState } from "react";

const Wishlists = () => {
    const [wishlists, setWishlists] = useState([]);
    const allProducts = useLoaderData();

    useEffect(() =>{
        const storedWishlist = getStoredWishlist();
        const storedWishlistInt = storedWishlist.map(id => parseInt(id))
        const wishlist = allProducts.filter(wishlist => storedWishlistInt.includes(wishlist.id))
        setWishlists(wishlist)
    },[allProducts])

    return (
        <div>
            {
                 wishlists.map(wishlist => <WishlistItem key={wishlist.id} wishlist={wishlist}></WishlistItem>)
            }
        </div>
    );
};

export default Wishlists;