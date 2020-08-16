import React from 'react'
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import Title from '../../components/title';


const ErrorPage = () => {
  return (
    <PageLayout>
      <Title title="Page Not Found" />
      <div className={styles.container}>
        <h1>Sorry, this page isn't available.</h1>
        <p>The link you followed may be broken, or the page may have been removed.</p>
      </div>
    </PageLayout>
  )
}

export default ErrorPage