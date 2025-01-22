import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic  Habits',
    img: './images/book-2.jpg',
    id: 2,
  },
  {
    author: 'Elon Musk',
    title: 'Software Development',
    img: './images/book-3.jpg',
    id: 3,
  },
  {
    author: 'Mark Zuckerbark',
    title: 'Introduction to React',
    img: './images/book-4.jpg',
    id: 4,
  },
  {
    author: 'John Smilga',
    title: 'Fullstack Web Development',
    img: './images/book-5.jpg',
    id: 5,
  },
];

const BookList = () => {
  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book) => {
        console.log(book);
        return <Book book={book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '1rem 0' }}
        />
        <button type='submit'>submit form</button>
        <div>
          <button>click me</button>
        </div>
      </form>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props.book;
  console.log(props.book);
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookList />
  </StrictMode>
);
