import React from 'react'
import PageLayout from '../../components/page-layout';
import Title from '../../components/title'
import Books from '../../components/books';


const ErrorPage = () => {
  return (
    <PageLayout>
      <Title title="Books" />
      <Books/>
    </PageLayout>
  )
}

export default ErrorPage