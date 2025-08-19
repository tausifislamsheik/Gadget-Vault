import { useOutletContext } from "react-router-dom";
import WishlistItem from "../WishlistItem/WishlistItem";

const Wishlist = () => {
    
    const {wishlist} = useOutletContext();

    return (
        <div>
            {wishlist?.length > 0 ? (
                wishlist.map(item => <WishlistItem key={item.id} wishlist={item} />)
                ) : (
                <p>No items in wishlist</p>
            )}
        </div>
    );
};

export default Wishlist;
