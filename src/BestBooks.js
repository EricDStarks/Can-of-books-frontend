import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Carousel} from 'react-bootstrap';
import image from './NWL.jpg'
import {Button} from 'react-bootstrap'
import BookModal from './BookModal';
import EditModal from './EditModal';

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
    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [id, setId] = useState("");
    
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

  const deleteBook = async (e) => {
    try {
      console.log("goooo")
      const response = await axios.delete(`https://erics-can-of-books.onrender.com/books/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
    const updateBookList = (newBook) => {
      setBooks((prevBooks) => [...prevBooks, newBook]);
    };

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
const openModal = (BookModal) => {
  
};

    return (
      <>
        <h2>Langston Hughes</h2>
        {noBooksHTML}
      <Carousel>
      {books.map((book) => (
          <Carousel.Item key={book.id}>
          <img src="https://innovating.capital/wp-content/uploads/2021/05/placeholder-image-dark.jpg"
></img>
          
         <Carousel.Caption>
         <h3>{book.title}</h3>
         <p>{book.description}</p>
         <p>{book.status}</p>
         
         <p>{book._id}</p>
         <Button variant="secondary" onClick={function (e){
          console.log("WORKS")
          e.preventDefault()
          setShowUpdate(true)
          setId(book._id)
         }}>Edit</Button>
          <Button variant="danger" onClick={function (e){
            deleteBook();
            setId(book._id)
          }}>Delete Book</Button>
         </Carousel.Caption>
          </Carousel.Item>
        ))}
        
      </Carousel>

      <Button onClick={function (){
        setShow (true)
      }}>
            Add Book
          </Button>
        <BookModal show={show} setShow={setShow}/>
        <EditModal id={id} showUpdate={showUpdate} setShowUpdate={setShowUpdate}/>
      </>
    )
  }


export default BestBooks;
