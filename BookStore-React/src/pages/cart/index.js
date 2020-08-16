import React, { useState, useCallback, useEffect, useContext } from 'react'
import PageLayout from '../../components/page-layout';
import Title from '../../components/title'
import getCartItems from '../../utils/cartItems'
import userContext from '../../Context';
import Spinner from '../../components/loading-spinner';
import styles from './index.module.scss'

const CartPage = () => {
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const context = useContext(userContext)

  const getCartItemsFunc = useCallback(async () => {
    const cartItems = await getCartItems(context.user.id)
    setCartItems(cartItems)
    setLoading(!loading)
  }, [context.user.id])

  const onDeleteBook = async (bookid) => {
    const promise = await fetch(`http://localhost:9999/api/cart/removeFromCart/${bookid}/${context.user.id}`)
    const updatedUser = await promise.json()
    getCartItemsFunc()
    return updatedUser
  }

  const onEmptyCart = async () => {
    const promise = await fetch(`http://localhost:9999/api/cart/removeAllFromCart/${context.user.id}`)
    const updatedUser = await promise.json()
    setCartItems([])
    return updatedUser
  }

  const renderRow = (cartItem, idx) => {
    const { _id, name, price } = cartItem

    if (loading) {
      return (
        <Spinner />
      )
    }
    return (
      <tr className={'null'} key={_id + idx}>
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td>${price}</td>
        <td>
          <button className={styles.button} onClick={() => onDeleteBook(_id)}>Delete From Cart</button>
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
      <div className={styles["shopping-cart-table"]}>
        <h2>Your Order</h2>
        <br></br>
        <table className={null}>
          <thead className={null}>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className={null}>
            {cartItems.map(renderRow)}
          </tbody>
        </table>
        <br />
        <button onClick={onEmptyCart} className={styles.button}>Purchase selected books</button>
      </div>
    </PageLayout>
  )
}

export default CartPage