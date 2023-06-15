import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Carousel} from 'react-bootstrap';
import image from './NWL.jpg'
// class BestBooks extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       books: []
//     }
//   }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  const BestBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      
      fetchBooks ();
  }, []);
  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://erics-can-of-books.onrender.com/books');
      setBooks(response.data);
    } catch (error) {
      // console.error('Books not found',error);
    }
  }

  //Defining a state variable to store book data
  let bookState = null;
  let bookData = fetchBooks
  bookState = bookData;

  //Conditional rendering according to the number of books
  const numberOfBooks = books.length;

  if (numberOfBooks > 0) {
    books.forEach((fetchBooks) => {
      console.log (books.title);
    });
  } else {
    console.log("No books available");
  }
let noBooksHTML = <></>
if (numberOfBooks == 0) {
  noBooksHTML = <h1>No Books Available</h1>
}

    return (
      <>
        <h2>Best Books</h2>
        {noBooksHTML}
      <Carousel>
      {books.map((book) => (
          <Carousel.Item key={book.id}>
          <img src={image}></img>
         <Carousel.Caption>{book.title}</Carousel.Caption>
          </Carousel.Item>
        ))}
        
      </Carousel>
        
      </>
    )
  }
// }

export default BestBooks;
