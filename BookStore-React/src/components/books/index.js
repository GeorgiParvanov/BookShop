import React, { useState, useCallback, useEffect } from 'react'
// import styles from './index.module.css'
import BookCard from '../bookCard'
import getBooks from '../../utils/books'


const Books = (props) => {
  const [books, setBooks] = useState([])

  const getBooksFunc = useCallback(async () => {
    const books = await getBooks(props.length)
    setBooks(books)
  }, [props.length])

  const renderBooks = () => {
    //   return JSON.stringify(books)
    return books.map((book, index) => {
      return (
        <BookCard key={book._id} index={index} {...book} />
      )
    })
  }

  useEffect(() => {
    getBooksFunc()
  }, [props.updatedOrigami, getBooksFunc])

  return (
    <div className={/* styles["origamis-wrapper"] */ null}>
      {renderBooks()}
    </div>
  )
}

export default Books
