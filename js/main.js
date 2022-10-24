'use strict';
console.log('main.js');

const htmlEls = {
  form: document.forms.createPost,
  title: document.getElementById('title'),
  image: document.getElementById('image'),
  date: document.getElementById('date'),
  author: document.getElementById('author'),
  body: document.getElementById('body'),
  postsContainer: document.getElementById('postsContainer'),
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
  generatePost(formValues, htmlEls.postsContainer);
  // console.log('formValues ===', formValues);
});

/*
<article class="card post">
  <img src="https://picsum.photos/id/1019/5472/3648" alt="sdsd">
  <h3 class="post__title">title</h3>
  <h4 class="post__author">Autorius: </h4>
  <p class="post__date">dsds</p>
  <p class="post__text">sdsd</p>
</article>
*/
function generatePost(valuesObj, dest) {
  const articleEl = document.createElement('article');
  articleEl.className = 'card post';
  dest.append(articleEl);

  // img create
  const imgEl = document.createElement('img');
  imgEl.src = valuesObj.image;
  imgEl.alt = valuesObj.title;
  articleEl.append(imgEl);

  crEl('h3', articleEl, 'post__title', valuesObj.title);
  crEl('h4', articleEl, 'post__author', valuesObj.author);
  crEl('p', articleEl, 'post__date', valuesObj.date);
  crEl('p', articleEl, 'post__text', valuesObj.body);
}

function crEl(tagName, dest, className, text) {
  const el = document.createElement(tagName);
  if (className) el.className = className;
  if (text || text === 0) el.textContent = text;
  dest.append(el);
  console.log(el);
  return el;
}
