import React, { useContext } from 'react'
// import { useHistory } from "react-router-dom"
import styles from './index.module.scss'
// import image from '../../images/blue-origami-bird.png'
import UserContext from '../../Context'
import history from '../../utils/history';
// import BookPage from '../../pages/book';

const BookCard = ({ _id, name, price, imageURL, description, author, ganre }) => {
    const context = useContext(UserContext)
    const loggedIn = context.user.loggedIn

    return (
        <div class={styles["book-cards"]}>
            <div className={styles["book-card"]}>
                <div className={styles["content-wrapper"]}>
                    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F07%2Fchances-are-1-2000.jpg&q=85" alt="" className={styles["book-card-img"]} />
                    <div className="card-content">
                        <div className={styles["book-name"]}>{name}</div>
                        <div className={styles["book-by"]}>by {author}</div>
                        <div className={styles["book-by"]}>ganre {ganre}</div>
                        <div className={styles["book-by"]}>price {price}</div>
                        {loggedIn ? (<button onClick={() => { history.push(`/book/${_id}`) }}>See more</button>) : <b>Login to see more</b>}
                        <div className={styles["book-sum card-sum"]}>
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard