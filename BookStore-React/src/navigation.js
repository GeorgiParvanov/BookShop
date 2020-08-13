import React, { useContext } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Books from './pages/books'
// import Book from './pages/book'
import Cart from './pages/cart'

// import Publications from './pages/publications'
// import ShareThoughtsPage from './pages/share-thoughts'
// import ProfilePage from './pages/profile'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'
import ErrorPage from './pages/error'
import UserContext from './Context'

const Navigation = () => {
  const context = useContext(UserContext)
  const loggedIn = context.user.loggedIn

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Books} />
        <Route path="/cart"> 
          {loggedIn ? (<Cart />): (<Redirect to="/login" />)}
        </Route>
        <Route path="/register">
          {loggedIn ? (<Redirect to="/" />) : (<RegisterPage />)}
        </Route>
        <Route path="/login">
          {loggedIn ? (<Redirect to="/" />) : (<LoginPage />)}
        </Route>
        {/* <Route path="/profile/:userid">
          {loggedIn ? (<ProfilePage />): (<Redirect to="/login" />)}
        </Route> */}
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation