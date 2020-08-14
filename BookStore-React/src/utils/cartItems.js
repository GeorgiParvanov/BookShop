const getCartItems = async (id) => {
    const promise = await fetch(`http://localhost:9999/api/cart/${id}`)
    const cartItems = await promise.json()
    return cartItems
}

export default getCartItems