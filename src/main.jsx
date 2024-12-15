import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/71sOqrd6JHL._AC_UL600_SR600,400_.jpg'
    alt=''
  />
);
const Title = () => <h2>Mom, I Want to Hear Your Story:</h2>;
const Author = () => {
  return <h4> Jeffrey Mason</h4>;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookList />
  </StrictMode>
);
