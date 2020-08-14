import React, { useContext } from 'react'
import {
  Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import history from './utils/history';

import Books from './pages/books'
import Book from './pages/book'
import Cart from './pages/cart'

// import Publications from './pages/publications'
// import ShareThoughtsPage from './pages/share-thoughts'
// import ProfilePage from './pages/profile'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'
import LogoutPage from './pages/logout'
import ErrorPage from './pages/error'
import UserContext from './Context'

const Navigation = () => {
  const context = useContext(UserContext)
  const loggedIn = context.user.loggedIn

  return (
    <Router history={history}>
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
        <Route path="/logout">
          {loggedIn ? (<LogoutPage />): (<Redirect to="/login" />)}
        </Route>
        <Route path="/book/:bookid">
          {loggedIn ? (<Book />): (<Redirect to="/login" />)}
        </Route>
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  )
}

export default Navigation