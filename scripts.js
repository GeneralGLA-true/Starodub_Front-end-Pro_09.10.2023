/* const user = prompt("Вкажіть своє ім'я");

alert('Hello, '+ user +'! How are you?'); */

//////////// homework 3

/////3.1

/* const firstString = prompt('введіть першу строку');
const secondString = prompt('введіть другу строку');
const thirdString = prompt('введіть третю строку');

//alert(`${firstString} ${secondString} ${thirdString}`);
alert(firstString + secondString + thirdString); */

////3.2

/* const someNumbers = prompt("Введіть п'ятизначне число", 55555);
let sepStr = new String;

for (let i = 0; i < someNumbers.length; i++) {
  sepStr += someNumbers[i] + ' ';
}

alert(sepStr); */


/////////////////////////////////////// homework 4

/* const a = +prompt("Введіть число A", 5);
const b = +prompt("Введіть число B", 5);

alert(`
  ${a} + ${b} = ${a + b}
  ${a} - ${b} = ${a - b}
  ${a} * ${b} = ${a * b}
  ${a} / ${b} = ${a / b}`); */


  //////////////////////////////////  homework 5

/* const hours = prompt("Вкажіть кількість годин", 24);
const seconds = hours * 3600;
alert(`У ${hours} годинах ${seconds} секунд`); */


//////////////////////////////////    homework 6

/* const user = {};
const capital = "Київ" || "Лондон" || "Вашингтон";
const currentYear = 2023;
let age = '';
let locationUser = '';
let sportLog = '';

user.birthYear = prompt(`Вкажіть рік народження`, 1995);
user.cityResidense = prompt(`Вкажіть місто проживання`, 'Харків');
user.favoriteSport = prompt(`Вкажіть улюблений вид спорту`, 'Лакрос');

if (user.birthYear === null) {
  alert('Шкода, що Ви не захотіли ввести свій рік народження');
}

if (user.cityResidense === null) {
  alert('Шкода, що Ви не захотіли ввести свіє місто');
}

if (user.favoriteSport === null) {
  alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту');
}

if (user.birthYear) {
  age = `Тобі ${currentYear - user.birthYear} рочків`;
} else {
  age = 'Розтин покаже твій вік';
}

switch (true) {

  case user.cityResidense === capital:
    locationUser = `Ти живеш у столиці ${user.cityResidense}`;
    break;

  case user.cityResidense === null:
    locationUser = 'Тобі все одно не сховатись...';
    break;

  default:
    locationUser = `Ти живеш у місті ${user.cityResidense}`;
    break;
}
console.log(user.favoriteSport)
switch (user.favoriteSport) {
  case 'Лакрос':
  sportLog = 'Круто! Хочеш стати Полом Рабілем?';
    break;

  case 'Керлінг':
  sportLog = 'Круто! Хочеш стати Джоном Шустером?';
    break;
  
  case 'Текбол':
    sportLog = 'Круто! Хочеш стати Адамом Блажовичем?'; 
    break;

  case null:
    sportLog = 'Кімнатна людинка?';
    break;

  default:
    sportLog = 'Цікаво...'; 
    break;
}

alert(`
${age},
${locationUser};
${sportLog};
`) */

/////////////////////////////////// homework 7
/* 
let numOrStr = prompt('input number or string');

switch (true) {
  case numOrStr === null:
    console.log('ви скасували')
    break;

  case numOrStr.trim() === '':
    console.log('Empty String');
    break;

  case isNaN( +numOrStr ):
    console.log('number is Ba_NaN');
    break;

  default:
    console.log('OK!')
    break;
}

 */
////////////////////////////////   homework 8


//// 1 пункт

/* const max = 20;

for (let a = 10; a <= max; a++) {

 if (a != max) {
  document.write (a + ',');
 } else {
  document.write (a);
 }
}
 */
//// 2 пункт
/* const max = 20;

for (let a = 10; a <= max; a++) {

 if (a != max) {
  document.write (a * a + ',');
 } else {
   document.write (a * a);
  }
} */

//// 3 пункт

/* let a = 7;
let b = 1;
const max = 10;

for (; b <=max; b++) { 
 document.write('<p>' + a + '*' + b + '=' + a*b);
}  */

//// 4 пункт 

/* let a = 1;
let b = 0;
const max = 15;

for (; a <=max; a++) {
 b += a;
}

document.write(b); */

/* //// 5 пункт

let a = 15;
let b = 1;
const max = 35;

for (; a <=max; a++) {
 b *= a;
}

document.write(b); */

//// 6 пункт

/* let a = 1;
let b = 0;
const max = 500;

for (; a <=max; a++) {
   b += a;
}

document.write(b/max); */

//// 7 пункт 

/* let a = 30;
let b = 0;
const max = 80;

for (; a <=max; a++)
 if (a % 2 == 0) {
  b += a;
 }

document.write(b); */

//// 8 пункт 

/* let a = 100;
const max = 200;

for (; a <= max; a++) {
 if (a % 3 == 0) {
  document.write (a + ' ');
 }
} */

/// 9-11 пункти

/* let a = +prompt('Введіть натуральне число');

switch (true) {

 case (a === false || a < 1):
 alert('Невірно');
 break;

 default: alert('Прийнятно');
 console.log(a);
}

let b = 1;
let c = 0;
let summa = 0;

for (; b <= a; b++) {

 if (a % b == 0) {
  document.write (b + " ");
  
  if (b % 2 == 0) {
   c++;
   summa += b;
  }
 }
}

document.write('<p> '+ c +' ' + 
       '<p> '+ summa +' '
       ); */

//// 12 пункт 

/*let c = 0;
const max = 10;

for (a = 1; a <= max; a++){
 for (b =1; b <= max; b++){
  c = a * b;
  document.write('<p>' + a + '*' + b + '=' + c);
 }
} */

//////////////////////////// homework 9

/* function arraySort(a,b){
  return a-b;
};

const array = [];
const userLength = +prompt('Введіть довжину масиву');

if (userLength == false || isNaN(userLength) ) {
  alert('Довжина позначається цифрою!')
} else {
    array.length = userLength;
    let i = 0;

    do {
      array[i] = +prompt('введіть число');
      if (isNaN(array[i]) || array[i] == false){
        continue;
      };
      i++;
  } while (i < array.length);
};

console.log('array ', array);

array.sort(arraySort);
console.log('array ', array);

array.splice(1, 3);
console.log('array ', array); */


/////////////////////////////  homework 10
/* 
let array = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log(array);

function sum (a, b) {
  return a + b;
};

function multiplicator (a, b) {
  return a * b;
};

function resetToZero (item) {
  if (item != max){
    return item = 0;
  } else {
    return item = max;
  }
};

///Знайти суму та кількість позитивних елементів.

const positArray = array.filter(function (item){return item > 0});
const sumPositiveElements = positArray.reduce(sum);
console.log(`1. Сума позитивних елементів = ${sumPositiveElements}, а їх кількість у масиві = ${positArray.length}.`);

/// Знайти мінімальний елемент масиву та його порядковий номер. Знайти максимальний елемент масиву та його порядковий номер.

function arraySort(a,b){
  return a-b;
};
const arrayCopy = array.slice();
arrayCopy.sort(arraySort);
const min = arrayCopy[0];
const max = arrayCopy[arrayCopy.length - 1];
const minIndex = array.indexOf(min);
const maxIndex = array.indexOf(max);

console.log(`2. Мінімальний елемент масиву ${min} та його порядковий номер ${minIndex}. Максимальний елемент масиву ${max} та його порядковий номер ${maxIndex}.`);

/// Визначити кількість негативних елементів

const negativeArray = array.filter(function (item){return item < 0});
console.log(`3. Кількість негативних елементів = ${negativeArray.length}.`);

/// Знайти кількість непарних позитивних елементів

const unpairedPositiveElement = positArray.filter(function (item) {return item % 2 != 0});
console.log(`4. Кількість непарних позитивних елементів = ${unpairedPositiveElement.length}.`);

/// Знайти кількість парних позитивних елементів.

const doublesPositiveElements = positArray.filter(function (item){return item % 2 === 0});
console.log(`5. Кількість парних позитивних елементів = ${doublesPositiveElements.length}.`);

/// Знайти суму парних позитивних елементів.

const sumDoubledElements = doublesPositiveElements.reduce(sum);
console.log(`6. Сума парних елементів масиву = ${sumDoubledElements}.`);

/// Знайти суму непарних позитивних елементів.

const sumUnpairedElem = unpairedPositiveElement.reduce(sum);
console.log(`7. Сума непарних позитивних елементів = ${sumUnpairedElem}.`);

/// Знайти добуток позитивних елементів.

const mulPositiceElements = positArray.reduce(multiplicator);
console.log(`8. Добуток позитивних елементів = ${mulPositiceElements}.`);

/// Знайти найбільший серед елементів масиву, ост альні обнулити.

const newArray = array.map(resetToZero);
array = newArray;
console.log(array); */


/////////////////////////////   хомеворке 11

/* const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'qwer', 'rewq'];
console.log(array);

function removeElement(arr, element) {
  const indexForDelete = arr.indexOf(element);
  arr.splice(indexForDelete, 1);  
};

removeElement(array, 'qwer');
console.log(array); */


////////////////////////// homework 12

/* const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const letPassLength = +prompt('Введіть довжину ключа');

function generateKey(length, symbols) {
  let pass = new String;
  for (let i = 0; i < length; i++) {
    pass += symbols.charAt(Math.random() * symbols.length);
   }
  
  return pass;
}

const key = generateKey(letPassLength, characters);
console.log(key); */



////////////// homework 13

////////////  1 пункт

/* const mass = [1, 2, 3, 4, 'a', 'b', 5, 6, 'c', 'q', 6, 3];
console.log(mass);

function averageMass (array) {
 let sum = 0;
 let j = 0;
 let average = 0;

 for (let i = 0; i < array.length; i++) {
 
  if (isNaN(array[i]) != true) {
   sum += array[i];
   j++;
  }
 }
 
 return average = sum / j;
}

const result = averageMass(mass);
console.log(result); */

///// 2 пункт

/* const x = +prompt('Введіть x');
const znak = prompt('Введіть знак');
const y = +prompt('Введіть y');

function doMath(x, znak, y) {

 switch (znak) {
  case '+':
   value = x + y;
   break;
  case '-':
   value = x - y;
   break;
  case '/':
   value = x / y;
   break;
  case '*':
   value = x * y;
   break;
  case '^':
   value = x ** y;
   break;
  case '%':
   value = x % y;
   break;
  default:
   alert('щось пішло не так(')
   break;
 }
 return value;
}

const val = doMath(x, znak, y);
alert(val); */

////// 3 пункт

/* function manualArrayCreation () {
 let mass = [];
 const massLenght = +prompt('Введіть довжину масиву');
 const mass2Lenght = +prompt('Введіть довжину другорядного масиву');

 for (let i = 0; i < massLenght; i++) {
  mass[i] = new Array (mass2Lenght);
 
  for (let j = 0; j < mass2Lenght; j++) {
   mass[i][j] = prompt('Введіть знаечення масиву' + ' ' + (i + 1));
  }
 }
 return mass;
}

const array = manualArrayCreation();
console.log(array); */

////// 4 пункт

/* let somethingString = 'Hello world';
console.log(somethingString);
const massive = ['l', 'd'];
console.log(massive);

function removeChar (someString, mass) {
 for (let i = 0; i < mass.length; i++){
  for (let j = 0; j < someString.length; j++) {
   if (mass[i] === someString.charAt(j)) {
    someString = someString.replace(mass[i], '');
    j--;
   }
  }
 
 } 
return someString;
}

somethingString = removeChar(somethingString, massive);
console.log(somethingString); */

///////////////// homework 14 

/* function getSumFunc () {
  let value = 0;
  return function (b) {
    return value += b;
  }
}

let sum = getSumFunc();

console.log(sum(10));
console.log(sum(15)); */

//////////////////// homework 15 

/* class Human {
  constructor (name, sex) {
    this.name = name;
    this.sex = sex;
  };
};

class Apartment {
  dwellers = [];

  addDweller () {
    for (let i = 0; i < arguments.length; i++) {
    this.dwellers.push(arguments[i]);
  }
  };
};

class House {
  apartments = [];
  
  constructor (capacity) {
    this.maxCapacity = capacity;
  };

  addApartment () {
    for (let i = 0; i < arguments.length; i++) {
      if (this.apartments.length < this.maxCapacity) {
        this.apartments.push(arguments[i]);
      } else {
        console.log('This house is full!');
        break;
        };
    };
  };
};

const human = new Human('Alex', 'male');
const human1 = new Human('Mia', 'female');
const human2 = new Human('Stepan', 'male');
const human3 = new Human('Masha', 'female');
const human4 = new Human('Igor', 'male');
const human5 = new Human('Anna', 'female');
const human6 = new Human('Valera', 'male');
const human7 = new Human('Kate', 'female');
const human8 = new Human('Ronald', 'male');
const human9 = new Human('Alexia', 'female');

console.log(human, human1, human2, human3, human4, human5, human6, human7, human8, human9);

const apart = new Apartment;
apart.addDweller(human, human1);
console.log(apart);

const apart2 = new Apartment;
apart2.addDweller(human2, human3);
console.log(apart2);

const apart3 = new Apartment;
apart3.addDweller(human4, human5);
console.log(apart3);

const apart4 = new Apartment;
apart4.addDweller(human6, human7);
console.log(apart4);

const apart5 = new Apartment;
apart5.addDweller(human8, human9);
console.log(apart5);

const house = new House (2);
house.addApartment(apart, apart2, apart3);
console.log(house);

const house2 = new House (3);
house2.addApartment(apart3, apart4, apart5);
console.log(house2); */

///////////////// homework 16 

/* class Human {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  };

  consInfo () {
    console.log(`ім'я - ${this.name}, вік - ${this.age}.`);
  };
};

class Car {
  
  constructor (manuf, model, year) {
    this.manufacturer = manuf;
    this.model = model;
    this.release = year;
  }

  assignOwner (human) {
    const adult = 18;
    if (human.age >= adult) {
      this.owner = human;
    } else {
      console.log('Вік власнима має бути більше 18!')
    };
  };

  constInfo () {
    console.log(`виробник - ${this.manufacturer}, модель - ${this.model}, рік випуску - ${this.release}`);
    if (this.owner)
    this.owner.consInfo();
    
  }
}
const human = new Human ('Petro', 28);
console.log(human);
human.consInfo();

const human2 = new Human ('Igor', 16);
console.log(human2);
human2.consInfo();

const human3 = new Human ('Alex', 38);
console.log(human3);
human3.consInfo();



const car = new Car ('BMW', '328', '2014');
car.assignOwner(human);
console.log(car, '----------------- car')
car.constInfo();

const car2 = new Car ('Nissan', 'Juke', '2014');
car2.assignOwner(human2);
console.log(car2, '------------  car2');
car2.constInfo();

const car3 = new Car ('Fiat', '500', '2018');
car3.assignOwner(human3);
console.log(car3, '-------------- car3');
car3.constInfo(); */


/////////////////////// homework 17

/* class Student {
  constructor (name, lastName, year) {
    this.name = name;
    this['last name'] = lastName;
    this['year of birth'] = year;
  };

  visiting = new Array (25);
  rating = new Array;

  get studentAge () {
    const currentYear = 2023;
    console.log('Вік студента', currentYear - this["year of birth"]);
  }

  lessons = 0;
  visitingLessons = 0;

  present (score) {
    if (this.lessons < 25) {
    this.visiting[this.lessons] = true;
    this.rating.push(score);
    this.lessons++;
    this.visitingLessons++;
    return this;
    } else {
      console.log('Студент відвідав всі заняття!');
    }
  };

  absent () {
    if (this.lessons < 25) {
    this.visiting[this.lessons] = false;
    this.lessons++;
    return this;
    } else {
      console.log('Студент відвідав всі заняття!');
    }
  };

  summary () {
    let averageScore = 0;
    let averageVisiting = this.visitingLessons/this.lessons;

    for (let i = 0, sum = 0; i < this.rating.length; i++) {
      sum += this.rating[i];
      averageScore = sum / this.rating.length;
    }

    switch (true) {
      case averageScore > 90 && averageVisiting > 0.9:
        console.log("Молодець!");
        break;
      case averageScore > 90 || averageVisiting > 0.9:
        console.log("Добре, але можна краще");
        break;
      default:
        console.log("Редиска!")
        break;
    }

    console.log(`Середня оцінка студента ${Math.round(averageScore)}, відвідуванність ${averageVisiting}`)
  };
}

const stud = new Student ('Igor', 'Duliai', 1979)
stud.studentAge;
stud.present(100).present(90).present(90).present(100).present(100).present(100).present(90).present(90).present(100).present(100).present(100).present(90).present(90).present(100).present(100).present(100).present(90).present(90).present(100).present(100).present(100).present(90).present(90).present(100).absent().present(100);
console.log(stud);
stud.summary();

const stud2 = new Student ('Gordon', 'Freeman', 1972)
stud2.studentAge;
stud2.present(100).present(90).present(90).present(100).present(100).present(100).present(90).present(90).present(100).present(100).present(100).present(90).present(90).present(100).present(100).present(100).present(90).present(90).absent().absent().absent().absent().absent().absent().absent().present(100);
console.log(stud2);
stud2.summary();

const stud3 = new Student ('Greta', 'Thunberg', 2003)
stud3.studentAge;
stud3.present(31).present(90).present(90).present(42).present(56).present(44).present(90).present(90).present(22).present(33).present(11).present(90).present(90).present(50).present(50).present(50).present(90).present(90).absent().absent().absent().absent().absent().absent().absent().present(100);
console.log(stud3);
stud3.summary(); */


///////////////////////////// homework 18 

/* const table = document.createElement('table');
const body = document.querySelector('body');
body.appendChild(table);

let counter = 1;
const magicNumber = 10;

for(let i = 0; i < magicNumber; i++){
  const tableRow = document.createElement('tr');
  table.appendChild(tableRow);

  for(let j = 0; j < magicNumber; j++){
    const tableData = document.createElement('td');
    tableData.style.outline = "2px solid red";
    tableData.style.padding = '5px';
    tableRow.appendChild(tableData);
    tableData.textContent = counter;
    counter ++;
  }
}

table.style.margin = '0 auto';
table.style.fontSize = '50px';
table.style.textAlign = 'center'; */



///////////////////  homework 19


/* const images = [
  'https://i.pinimg.com/564x/e0/97/73/e097739f0acfbe8bd2ffd50c70efa9ba.jpg',
  'https://i.pinimg.com/564x/10/db/d4/10dbd4fcf99e7e6775697da493e4f100.jpg',
  'https://i.pinimg.com/564x/bd/02/9c/bd029c822e77becb24759577517f65a2.jpg',
  'https://i.pinimg.com/564x/97/85/3a/97853a8e839a2bc8eed25d6a2483e585.jpg',
  'https://i.pinimg.com/564x/6a/5c/6b/6a5c6b4f99d3d2b05dfd81fed4791c27.jpg',
  'https://i.pinimg.com/564x/ee/be/cb/eebecb8f59de08fec25c8af600a5c775.jpg',
  'https://i.pinimg.com/564x/44/b7/c2/44b7c20082ea3f08ca0c704b22213cb2.jpg',
  'https://i.pinimg.com/564x/2d/4a/82/2d4a8208e3f0f0acefa78a0c89f79983.jpg',
  'https://i.pinimg.com/564x/92/e8/ab/92e8ab1e4114b1239d89b5df96e68573.jpg'
]

const img = document.createElement('img');
const body = document.querySelector('body');
const button = document.createElement('button');

button.textContent = 'Кнопка виклику єдинорогів';
button.style.margin = '0 auto';
button.style.display = 'block';

img.style.margin = '10px auto';
img.style.display = 'block';

body.appendChild(button);
body.appendChild(img);

 function getUnicornImage() {
  const randomImg = Math.floor(Math.random() * images.length);
  img.setAttribute('src', images[randomImg]);
  console.log('clic', randomImg);
} 

button.addEventListener('click', getUnicornImage); */

/////////////////////////// homework 20 

const button1 = document.createElement('a');
const button2 = document.createElement('a');
const body = document.querySelector('body');

button1.textContent = "Перша кнопка";
button2.textContent = "Друга кнопка";

button1.setAttribute('href', 'http://xn--80adth0aefm3i.xn--j1amh');
button2.setAttribute('href', '//hackyourmom.com/');

function protocolChanger(event) {
  event.preventDefault();
  const link = event.target.href
  if (!(link.startsWith("http") || link.startsWith("https"))) {
    let correctLink = link.replace('file:', 'https:');
    console.log('Посилання змінено на ', correctLink);
    event.target.setAttribute ('href', correctLink);
  };
};

function protocolCheker (event) {
  const link = event.target.href;
  if (!(link.startsWith("http") || link.startsWith("https"))) {
    console.log(link, 'Посилання без протоколу!');
    } else {
      console.log(link);
      };
};

function letButtonStyle () {
  for (let i = 0; i < arguments.length; i++){
    arguments[i].style.background = 'red';
    arguments[i].style.padding = '10px';
    arguments[i].style.textDecoration = 'none';
    arguments[i].style.color = 'black';
    arguments[i].style.fontWeight = '600';
    arguments[i].style.fontSize = '50px';
    arguments[i].style.borderRadius = '20px';
    arguments[i].style.margin = '20px';
  };
};

letButtonStyle(button1, button2);

body.appendChild(button1);
body.appendChild(button2);

body.addEventListener('mouseover', (event) => {
  if(event.target.tagName === 'A') {
    protocolCheker(event);
  };
});

body.addEventListener('click', (event) => {
  if(event.target.tagName === 'A') {
    protocolChanger(event);
  };
});


/////////////// homework 21