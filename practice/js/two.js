'use strict';
console.log('two.js');

const htmlElements = {
  h1: document.querySelector('h1'),
  form: document.forms[0],
};

console.log('htmlElements ===', htmlElements);

htmlElements.form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('js is in control');
  const ageFromInput = htmlElements.form.elements.name.valueAsNumber;
  console.log('ageFromInput ===', ageFromInput);
  htmlElements.h1.textContent = `Tavo amzius yra: ${ageFromInput}`;
  htmlElements.form.reset();
});
