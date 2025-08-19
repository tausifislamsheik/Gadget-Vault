import { useOutletContext } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, setCart } = useOutletContext();

    // remove from cart
    const handleRemove = (id) => {
        const updated = cart.filter(item => item.id !== id);
        setCart(updated);
        localStorage.setItem("cart", JSON.stringify(updated.map(i => i.id)));
    };

    return (
        <div>
            {cart?.length > 0 ? (
                cart.map(item => <CartItem key={item.id} cart={item} handleRemove={handleRemove} />)
                ) : (
                <p>No items in cart</p>
            )}
        </div>
    );
};

export default Cart;
