'use strict';
console.log('main.js');

const htmlEls = {
  form: document.forms.createPost,
  title: document.getElementById('title'),
  image: document.getElementById('image'),
  date: document.getElementById('date'),
  author: document.getElementById('author'),
  body: document.getElementById('body'),
};

// console.log('htmlEls ===', htmlEls);

/**
 * Main app function
 */
function init() {}

// Event Listeners

htmlEls.form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Js is in control');

  // sukurti formValues objekta
  const formValues = {
    title: htmlEls.title.value.trim(),
    image: htmlEls.image.value.trim(),
    date: htmlEls.date.value.trim(),
    author: htmlEls.author.value.trim(),
    body: htmlEls.body.value.trim(),
  };
  generatePost(formValues);
  console.log('formValues ===', formValues);
});

function generatePost(valuesObj, dest) {}
