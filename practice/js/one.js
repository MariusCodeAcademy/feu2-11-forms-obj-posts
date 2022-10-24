'use strict';
console.log('one.js');

const htmlEls = {
  btn: document.getElementById('btnName'),
  input: document.getElementById('name'),
};
console.log('htmlEls ===', htmlEls);

htmlEls.btn.addEventListener('click', () => {
  console.log('pavyko');
  const nameFromInput = htmlEls.input.value.trim();
  // exit clause
  if (nameFromInput === '') return;
  alert(nameFromInput);
  // clean input
  htmlEls.input.value = '';
});
