import React, { useState, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PageLayout from '../../components/page-layout';
import styles from './index.module.scss'
import getBook from '../../utils/book'


const BookPage = () => {
  const [book, setBook] = useState({})
  const params = useParams()
  const id = params.bookid

  const getBookFunc = useCallback(async () => {
    const book = await getBook(id)
    console.log(id);
    console.log("book: ", book);
    setBook(book)
  }, [id])

  const renderBook = () => {
    return (
      <PageLayout>
        <section className={styles['book-section']}>
          <div className={styles['book-card']}>
            <div className={styles['image']}>
              <div className={styles['content']}>
                <div className={styles['book-cover']}>
                  <img alt='' src='https://source.unsplash.com/4LiUI-Y2mI8/300x400' />
                </div>
              </div>
            </div>
            <div className={`${styles.text}` + ' ' + `${styles['book-text']}`}>
              <span className={styles['genre']}>
                {book.ganre}
              </span>
              <h1 className={styles['heading']}>
                {book.name}
              </h1>
              <div className={styles.author}>
                by {book.author}
              </div>
              <article className={styles.description}>
                {book.description}
              </article>
              <footer className={styles.footer}>
                <h1 className={styles['heading']}>
                  Price: {book.price}$
        </h1>
                <button className={styles.button}>
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