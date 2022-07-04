const error = document.querySelector('#error');

const showmessage = (test, msg) => {
  if (test) {
    error.textContent = msg;
    return test;
  }
  error.textContent = msg;
  return test;
};

const validations = (input, msg, input2, msg2) => {
  if (input.trim() === '') {
    return showmessage(false, msg);
  } if (input2.trim() === '') {
    return showmessage(false, msg2);
  }
  return showmessage(true, '');
};

export default validations;