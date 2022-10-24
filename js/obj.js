'use strict';
console.log('obj.js');

const user = {
  name: 'John',
  age: 34,
  town: 'Vilnius',
};
const user1 = {
  name: 'Mike',
  age: 54,
  town: 'Kaunas',
};

function printName(obj) {
  console.log('And the name is:', obj.name);
}

// iskviesti funkcija kad ji atspausdintu 'John'

printName(user);
printName(user1);
