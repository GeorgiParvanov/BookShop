const getNavigation = (user) => {

  const authLinks = [
    {
      title: "Books",
      link: "/"
    },
    {
      title: "Cart",
      link: "/cart"
    },
    {
      title: "Logout",
      link: "/logout"
    },
    // {
    //   title: "Book",
    //   link: `/book/:${bookId}`
    // }
  ]

  const guestLinks = [
    {
      title: "Books",
      link: "/"
    },
    {
      title: "Register",
      link: "/register"
    },
    {
      title: "Login",
      link: "/login"
    }
  ]
  const loggedIn = user && user.loggedIn
  return loggedIn ? authLinks : guestLinks
}

export default getNavigation