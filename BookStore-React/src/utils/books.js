const getBooks = async (length) => {
  const promise = await fetch(`http://localhost:9999/api/books?length=${length}`)
  const books = await promise.json()
  return books
}

export default getBooks