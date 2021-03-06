// -------------------------------variables------------------------------- //
const booksSection = document.querySelector('#booksCollection');
const newBookSection = document.querySelector('#newBookSection');
const contactForm = document.querySelector('#contactForm');

const pagesSwap = (list) => list.forEach((child) => {
  if (child.classList.contains('list')) {
    child.addEventListener('click', () => {
      booksSection.classList.remove('hide');
      newBookSection.classList.add('hide');
      contactForm.classList.add('hide');
    });
  } else if (child.classList.contains('newBook')) {
    child.addEventListener('click', () => {
      newBookSection.classList.remove('hide');
      booksSection.classList.add('hide');
      contactForm.classList.add('hide');
    });
  } else {
    child.addEventListener('click', () => {
      contactForm.classList.remove('hide');
      newBookSection.classList.add('hide');
      booksSection.classList.add('hide');
    });
  }
});

export default pagesSwap;