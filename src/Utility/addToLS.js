// Cart

const getStoredCart = () =>{
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        const storedCartParse = JSON.parse(storedCart)
        return storedCartParse;
    }return [] ;
}


const addCartToLS = (id) =>{
    const storedCart = getStoredCart();
    if(storedCart.includes(id)){
        console.log(id, 'Already existed')
    }else{
        storedCart.push(id)
        const storedCartStr = JSON.stringify(storedCart)
        localStorage.setItem('cart', storedCartStr)
    }
}

// Wishlist


const getStoredWishlist = () =>{
    const storedWishlist = localStorage.getItem('wishlist');
    if(storedWishlist){
        const storedWishlistParse = JSON.parse(storedWishlist)
        return storedWishlistParse;
    }else{
        return [] ;
    }
}

const addWishlistToLS = (id) =>{
    const storedWishlist = getStoredWishlist();
    if(storedWishlist.includes(id)){
        console.log(id, 'Already existed')
    }else{
        storedWishlist.push(id)
        const storedWishlistStr = JSON.stringify(storedWishlist);
        localStorage.setItem('wishlist', storedWishlistStr)
    }
}

export { addCartToLS, addWishlistToLS, getStoredCart, getStoredWishlist }