import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Carousel} from 'react-bootstrap';

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
      const response = await axios.get('http://localhost:3001/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Books not found',error);
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


  // render() 

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>Best Books</h2>
        <ul>

        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))};
        </ul>
      </>
    )
  }

  <div id="bookCarousel" class="carousel slide" data-ride="carousel">

  {/* <indicators> */}
  <ol class="carousel indicators">
  <li data-target="#bookCarousel" data-slide="0" class="active"></li>
  <li data-target="#bookCarousel" data-slide="1"></li>
  <li data-target="#bookCarousel" data-slide="2"></li>
  </ol>

  {/* <wrapper for slides> */}
  <div class="carousel inner">
  <div class="carousel-item active"><img src="NWL.jpg" alt="Not Without Laughter"></img>
  <div>
    <h3>Not Without Laughter</h3>
      <p>Harlem Renaissance</p>
      <p>Fiction</p>
  </div>
  </div>
  <div class="carousel-item active"><img src="SP.jpg" alt="Selected Poems"></img>
  <div>
  <h3>Selected Poems</h3>
    <p>Books Of Poems</p>
    <p>Non Fiction</p>
  </div>
  </div>
  <div class="carousel-item active"><img src="TBS.jpg" alt="The Big Sea"></img>
  <h3>The Big Sea</h3>
    <p>Autobiographical</p>
    <p>Non Fiction</p>
  </div>

  </div>
  <a class="left carousel-control" href="#bookCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#bookCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
  </div> 
// }

export default BestBooks;
