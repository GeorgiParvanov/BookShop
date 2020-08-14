const getBook = async (id) => {
    const promise = await fetch(`http://localhost:9999/api/books/book/${id}`)
    const book = await promise.json()
    return book
}

export default getBook