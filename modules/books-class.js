/* eslint-disable max-classes-per-file */

export default class BookConstructor {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

export class BooksDataClass {
  constructor() {
    return [];
  }
}

export const booksData = new BooksDataClass();

export class Dynamic {
  static loadBooks(index) {
    // creatingElements
    const bookUl = document.querySelector('#books');
    const bookLi = document.createElement('li');
    const titleP = document.createElement('p');
    const authorP = document.createElement('p');
    const deleteBtn = document.createElement('button');
    // content inside
    titleP.textContent = `"${booksData[index].title}"`;
    authorP.textContent = `by ${booksData[index].author}`;
    deleteBtn.textContent = 'Remove';
    // div for title and author
    const divTitleAndAuthor = document.createElement('div');
    // appendChilds
    divTitleAndAuthor.appendChild(titleP);
    divTitleAndAuthor.appendChild(authorP);
    bookLi.appendChild(divTitleAndAuthor);
    bookLi.appendChild(deleteBtn);
    bookUl.appendChild(bookLi);
    // giving classes
    bookLi.setAttribute('class', 'liStyles');
    deleteBtn.setAttribute('id', index);
    deleteBtn.setAttribute('class', 'buttons');
    divTitleAndAuthor.setAttribute('class', 'displayFlex');

    deleteBtn.addEventListener('click', () => {
      booksData.splice(index, 1);
      bookUl.removeChild(bookLi);
      localStorage.setItem('books', JSON.stringify(booksData));
    });
  }
}