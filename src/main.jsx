import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { books } from './books';
import Book from './Book';

const BookList = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
        {books.map((book, index) => {
          console.log(book);
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookList />
  </StrictMode>
);
