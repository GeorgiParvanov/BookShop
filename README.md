## BookStore
BookStore is a simple Single Page Application(SPA).

## 1. How is it built
- The back-end portion uses Express, mongoose, bcrypt for password hashing and jsonwebtoken (JWT) for encoding user    data stored in cookies.
- The front-end portion uses React.

## 2. Functionality
- Unauthorized users are allowed to view the list of books that are for sale, login or register.
- Authorized users can see more about each book, add a book a cart, remove a book from the cart and purchase all the books selected in the cart.

## 3. How to run the project
- open terminal in REST-API folder and run `npm i` then run `npm start` to start the api server
- open terminal in BookStore-React folder and run `npm i` then run `npm start` to start the application
- open localhost on port 3000 and you are ready to rock and roll
