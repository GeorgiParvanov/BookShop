import React, { useContext } from 'react'
import styles from './index.module.scss'
import UserContext from '../../Context'
import history from '../../utils/history';

const BookCard = ({ _id, name, price, imageURL, description, author, ganre }) => {
    const context = useContext(UserContext)
    const loggedIn = context.user.loggedIn

    const addBookToCart = async () => {
        const promise = await fetch(`http://localhost:9999/api/books/addToCart/${_id}/${context.user.id}`)
        const updatedUser = await promise.json()
        return updatedUser
    }
    
    return (
        <div className={styles["book-cards"]}>
            <div className={styles["book-card"]}>
                <div className={styles["content-wrapper"]}>
                    <img src={imageURL} alt="" className={styles["book-card-img"]} />
                    <div className="card-content">
                        <div className={styles["book-name"]}>{name}</div>
                        <div className={styles["book-by"]}>by {author}</div>
                        <div className={styles["book-by"]}>ganre: {ganre}</div>
                        <div className={styles["book-by"]}>price {price}$</div>
                        {loggedIn ? (<button onClick={() => { history.push(`/book/${_id}`) }} className={styles.button}>See more</button>) : <b>Login to see more or purchase the book</b>}
                        {loggedIn ? (<button onClick={addBookToCart} className={styles.button}>Add To Cart</button>) : null}
                        {/* <div className={styles["book-sum card-sum"]}>
                            {description}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard