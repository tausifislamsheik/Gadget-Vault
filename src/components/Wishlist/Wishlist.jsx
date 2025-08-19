import { useOutletContext } from "react-router-dom";
import WishlistItem from "../WishlistItem/WishlistItem";

const Wishlist = () => {
    
    const {wishlist} = useOutletContext();
    // you can build state if needed, but context already provides products
    // do filtering with getStoredWishlist() same way if required

    return (
        <div>
            {wishlist.map(item => (
                <WishlistItem key={item.id} wishlist={item} />
            ))}
        </div>
    );
};

export default Wishlist;
