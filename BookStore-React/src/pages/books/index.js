import React, { useContext } from 'react'
import PageLayout from '../../components/page-layout';
import Title from '../../components/title'
import Books from '../../components/books';
import UserContext from '../../Context'


const BooksPage = () => {
  const context = useContext(UserContext)
  const loggedIn = context.user.loggedIn

  return (
    <PageLayout>
      {loggedIn ? (<Title title={`Welcome: ${context.user.username}, enjoy our book collection`} />) : null}
      <Title title="Books" />
      <Books />
    </PageLayout>
  )
}

export default BooksPage