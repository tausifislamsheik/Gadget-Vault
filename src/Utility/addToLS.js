// Cart

import { toast } from "react-toastify";

const getStoredCart = () => {
  try {
    const storedCart = localStorage.getItem("cart") || [];
    if (!storedCart) return [];

    let parsed = JSON.parse(storedCart);

    // Ensure it's always an array
    if (!Array.isArray(parsed)) {
      return [];
    }

    // Filter out invalid values (non-numbers, NaN, null, undefined)
    parsed = parsed
      .map(id => parseInt(id))
      .filter(id => Number.isInteger(id) && id > 0);

    return parsed;
  } catch (error) {
    console.error("Error parsing cart from localStorage", error);
    return [];
  }
};


const addCartToLS = (id) =>{
    const storedCart = getStoredCart();
    if(storedCart.includes(id)){
        console.log(id, 'Already existed')
    }else{
        storedCart.push(id)
        const storedCartStr = JSON.stringify(storedCart)
        localStorage.setItem('cart', storedCartStr)
        toast.success('Product successfully added to cart')
    }
}

// Wishlist


const getStoredWishlist = () => {
  try {
    const storedWishlist = localStorage.getItem("wishlist");
    if (!storedWishlist) return [];

    let parsed = JSON.parse(storedWishlist);

    if (!Array.isArray(parsed)) {
      return [];
    }

    parsed = parsed
      .map(id => parseInt(id))
      .filter(id => Number.isInteger(id) && id > 0);

    return parsed;
  } catch (error) {
    console.error("Error parsing wishlist from localStorage", error);
    return [];
  }
};


const addWishlistToLS = (id) =>{
    const storedWishlist = getStoredWishlist();
    if(storedWishlist.includes(id)){
        console.log(id, 'Already existed')
    }else{
        storedWishlist.push(id)
        const storedWishlistStr = JSON.stringify(storedWishlist);
        localStorage.setItem('wishlist', storedWishlistStr)
        toast.success('Product successfully added to wishlist')
    }
}

export { addCartToLS, addWishlistToLS, getStoredCart, getStoredWishlist }