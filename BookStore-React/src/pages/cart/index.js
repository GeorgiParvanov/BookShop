import React, { useState, useCallback, useEffect, useContext } from 'react'
import PageLayout from '../../components/page-layout';
import Title from '../../components/title'
import getCartItems from '../../utils/cartItems'
import userContext from '../../Context';
import './index.module.css'

const CartPage = () => {
  const [cartItems, setCartItems] = useState([])
  const context = useContext(userContext)

  const getCartItemsFunc = useCallback(async () => {
    const cartItems = await getCartItems(context.user.id)
    setCartItems(cartItems)
  }, [])

  const onDelete = async (id) => {
    const promise = await fetch(`http://localhost:9999/api/cart/removeFromCart/${id}`)
    const updatedUser = await promise.json()
    getCartItemsFunc()
    return updatedUser
  }

  const renderRow = (cartItem, idx) => {
    console.log("cartItem: ", cartItem);
    const { id, name, price } = cartItem
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td>${price}</td>
        <td>
          <button onClick={() => onDelete(id)} className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    )
  }

  useEffect(() => {
    getCartItemsFunc()
  }, [getCartItemsFunc])

  return (
    <PageLayout>
      <Title title="Cart" />
      <div className="shopping-cart-table">
        <h2>Your Order</h2>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map(renderRow)}
          </tbody>
        </table>
        {/* <div className="total">
          Total: ${total}
        </div> */}
      </div>
    </PageLayout>
  )
}

export default CartPage