import { useOutletContext } from "react-router-dom";
import WishlistItem from "../WishlistItem/WishlistItem";

const Wishlist = () => {
    
    const { wishlist, setWishlist } = useOutletContext();

     const handleRemove = (id) => {
        const updated = wishlist.filter(item => item.id !== id);
        setWishlist(updated);
        localStorage.setItem("wishlist", JSON.stringify(updated.map(i => i.id)));
    };

    return (
        <div>
            {wishlist?.length > 0 ? (
                wishlist.map(item => <WishlistItem key={item.id} wishlist={item} handleRemove={handleRemove} />)
                ) : (
                <p>No items in wishlist</p>
            )}
        </div>
    );
};

export default Wishlist;
