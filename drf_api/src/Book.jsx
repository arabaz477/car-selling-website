import { useState, useEffect } from "react";
import axios from "axios";
import "./Style.css"

function Book() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/books/")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (

    <div className="container">
 <h1>Books Data</h1>

      {books.map((book) => (
       <div key={book.id} className="demo">
  <img src={book.image} alt={book.book_name} />

  <div className="card-content">
    <h2>{book.book_name}</h2>

    <p><strong>Price:</strong> ₹{book.book_price}</p>
    <p><strong>Type:</strong> {book.book_type}</p>
    <p><strong>Writer:</strong> {book.book_writer}</p>

    <button>Buy Now</button>
  </div>
</div>
      ))}
    </div>
  );
}

export default Book;