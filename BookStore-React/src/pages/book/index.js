import React, { useState, useCallback, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import PageLayout from '../../components/page-layout';
import styles from './index.module.scss'
import getBook from '../../utils/book'
import userContext from '../../Context';


const BookPage = () => {
  const [book, setBook] = useState({})
  const context = useContext(userContext)
  const params = useParams()
  const id = params.bookid

  const getBookFunc = useCallback(async () => {
    const book = await getBook(id)
    setBook(book)
  }, [id])

  const addBookToCart = async () => {
    const promise = await fetch(`http://localhost:9999/api/books/addToCart/${params.bookid}/${context.user.id}`)
    const updatedUser = await promise.json()
    return updatedUser
  }

  const renderBook = () => {
    return (
      <PageLayout>
        <section className={styles['book-section']}>
          <div className={styles['book-card']}>
            <div className={styles['image']}>
              <div className={styles['content']}>
                <div className={styles['book-cover']}>
                  <img alt='' src={book.imageURL} />
                </div>
              </div>
            </div>
            <div className={`${styles.text}` + ' ' + `${styles['book-text']}`}>
              <h1 className={styles['heading']}>
                {book.name}
              </h1>
              <div className={styles.author}>
                by {book.author}
              </div>
              <span className={styles['genre']}>
                Ganre: {book.ganre}
              </span>
              <article className={styles.description}>
                Description: {book.description}
              </article>
              <footer className={styles.footer}>
                <h1 className={styles['heading-price']}>
                  Price: {book.price}$
        </h1>
                <button onClick={addBookToCart} className={styles.button}>
                  Add To Cart
          </button>
              </footer>
            </div>
          </div>
        </section>

      </PageLayout>
    )
  }

  useEffect(() => {
    getBookFunc()
  }, [getBookFunc])

  return (
    <div className={/* styles["origamis-wrapper"] */ null}>
      {renderBook()}
    </div>
  )
}

export default BookPage