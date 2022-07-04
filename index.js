/* eslint-disable max-classes-per-file */
// ------------------------ imports -------------------------- //

import booksClass, {booksData, Dynamic} from "./modules/books-class.js";
import validations from "./modules/validations.js";
import pagesSwap from "./modules/pageSwap.js";
import { DateTime } from "./modules/luxon.js";

// ------------------------ VARIABLES -------------------------- //
const addBtn = document.querySelector('#addBtn');
const title = document.querySelector('#titleId');
const author = document.querySelector('#authorId');
const navA = document.querySelectorAll('.navbar-a');
const navAList = Array.from(navA);
const dateP = document.querySelector('.dateParagraph');

// ----------------------- EVENT LISTENER ------------------- //

addBtn.addEventListener('click', () => {
  const titleName = title.value;
  const authorName = author.value;
  const titleMsg = 'title space is in blank';
  const authorMsg = 'author space is in blank';

  if (validations(titleName, titleMsg, authorName, authorMsg)) {
    const addNewBook = new booksClass(titleName, authorName);
    booksData.push(addNewBook);
    Dynamic.loadBooks(booksData.length - 1);
    localStorage.setItem('books', JSON.stringify(booksData));
    title.value = '';
    author.value = '';
  }
});

// ---------------------- LOCAL STORAGE ---------------------- //

window.addEventListener('load', () => {
  if (localStorage.getItem('books')) {
    booksData.push(...JSON.parse(localStorage.getItem('books')));
  }
  for (let i = 0; i < booksData.length; i += 1) {
    Dynamic.loadBooks(i);
  }
});

// ------------------------ DATE ----------------------------- //

let dt = DateTime.now()
dateP.textContent = `${dt.toLocaleString(DateTime.DATETIME_MED)}`;


// ------------------------ pageSwap ----------------------------- //

pagesSwap(navAList);
