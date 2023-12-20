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

/* const button1 = document.createElement('a');
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
}); */


/////////////// homework 21

/* const body = document.querySelector('body');
const container = document.createElement('div');
container.style.width = '1100px'
container.style.margin = '0 auto';

const topCont = document.createElement('div');
const bottomCont = document.createElement('div');
bottomCont.style.display = 'flex';


body.appendChild(container);
container.appendChild(topCont);
container.appendChild(bottomCont);

function btnCreator() {
  return document.createElement('button')
};

function imgCreator () {
  return document.createElement('img');
};

function paragraphCreator () {
  return document.createElement('p');
}

function btnStyler () {
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].style.borderRadius = '50%';
    arguments[i].style.padding = '0';
    arguments[i].style.margin = '5px';
  }
};

function counterStyler (){
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].style.fontSize = '60px';
    arguments[i].style.width = '215px';
    arguments[i].style.textAlign = 'center';
  }
};


const smileBtn = btnCreator();
const smileBtn2 = btnCreator();
const smileBtn3 = btnCreator();
const smileBtn4 = btnCreator();
const smileBtn5 = btnCreator();

btnStyler(smileBtn, smileBtn2, smileBtn3, smileBtn4, smileBtn5);


const smile = imgCreator();
smile.setAttribute('id', 'smile1');
smile.setAttribute('src', 'images/smile1.png');

const smile2 = imgCreator();
smile2.setAttribute('id', 'smile2');
smile2.setAttribute('src', 'images/smile2.png');

const smile3 = imgCreator();
smile3.setAttribute('id', 'smile3');
smile3.setAttribute('src', 'images/smile3.png');

const smile4 = imgCreator();
smile4.setAttribute('id', 'smile4');
smile4.setAttribute('src', 'images/smile4.png');

const smile5 = imgCreator();
smile5.setAttribute('id', 'smile5');
smile5.setAttribute('src', 'images/smile5.png');


let smileCount = 0;
let smileCount2 = 0;
let smileCount3 = 0;
let smileCount4 = 0;
let smileCount5 = 0;

const smileCounter = paragraphCreator();
const smileCounter2 = paragraphCreator();
const smileCounter3 = paragraphCreator();
const smileCounter4 = paragraphCreator();
const smileCounter5 = paragraphCreator();

smileCounter.textContent = smileCount;
smileCounter2.textContent = smileCount2;
smileCounter3.textContent = smileCount3;
smileCounter4.textContent = smileCount4;
smileCounter5.textContent = smileCount5;

counterStyler(smileCounter, smileCounter2, smileCounter3, smileCounter4, smileCounter5);


topCont.addEventListener('click', function(event) {
  if (event.target.tagName === 'IMG') {
    switch (true) {
      case event.target.id === 'smile1':
        smileCount++;
        smileCounter.textContent = smileCount;
        break;
      case event.target.id === 'smile2':
        smileCount2++;
        smileCounter2.textContent = smileCount2;
        break;
      case event.target.id === 'smile3':
        smileCount3++;
        smileCounter3.textContent = smileCount3;
        break;
      case event.target.id === 'smile4':
        smileCount4++;
        smileCounter4.textContent = smileCount4;
        break;
      case event.target.id === 'smile5':
        smileCount5++;
        smileCounter5.textContent = smileCount5;
        break;
      default:
        break;
    };
  };
});

topCont.appendChild(smileBtn);
topCont.appendChild(smileBtn2);
topCont.appendChild(smileBtn3);
topCont.appendChild(smileBtn4);
topCont.appendChild(smileBtn5);

smileBtn.appendChild(smile);
smileBtn2.appendChild(smile2);
smileBtn3.appendChild(smile3);
smileBtn4.appendChild(smile4);
smileBtn5.appendChild(smile5);

bottomCont.appendChild(smileCounter);
bottomCont.appendChild(smileCounter2);
bottomCont.appendChild(smileCounter3);
bottomCont.appendChild(smileCounter4);
bottomCont.appendChild(smileCounter5); */


////////////////////// homework 22

/* const body = document.querySelector('body');
const container = document.createElement('div');
const asideLeft = document.createElement('div');
const main = document.createElement('div');
const asideRight = document.createElement('div');
const owerview = document.createElement('p');
const catList = document.createElement('ul');
catList.style.fontSize = '40px'

let arrayItem = new Array;
let indexCount = 0;
let templateContainer = new String;
main.style.display = 'flex';
main.style.fontSize = '15px';


owerview.setAttribute('id', 'owerview');
body.appendChild(container);
container.style.display = 'flex';
container.appendChild(asideLeft);
container.appendChild(main);
container.appendChild(asideRight);
asideRight.appendChild(owerview)

asideLeft.style.width = '15%';
main.style.width = '65%';
asideRight.style.width = '20%';
asideRight.style.fontSize = '20px';



const catPhones = document.createElement('li');
catPhones.textContent = 'Телефони';
catPhones.setAttribute('id', 'phones');

const catLaptops = document.createElement('li');
catLaptops.textContent = 'Ноутбуки';
catLaptops.setAttribute('id', 'laptop');

const catWathes = document.createElement('li');
catWathes.textContent = 'Годинники';
catWathes.setAttribute('id', 'wathes');

const catAudio = document.createElement('li');
catAudio.textContent = 'Аудіо';
catAudio.setAttribute('id', 'audio');


function addListChild () {
  for(let i = 0; i < arguments.length; i++) {
    catList.appendChild(arguments[i]);
  };
};
asideLeft.appendChild(catList)
addListChild(catPhones, catLaptops, catWathes, catAudio);


const phonesData = [
  [
    'https://content.rozetka.com.ua/goods/images/big_tile/328132326.jpg',
    'Мобільний телефон Samsung Galaxy A24 6/128GB Black (SM-A245FZKVSEK)',
    `Екран (6.5", Super AMOLED, 2340x1080) / Mediatek Helio G99 (2 x 2.6 ГГц + 6 x 2.0 ГГц) / основна потрійна камера: 50 Мп + 5 Мп + 2 Мп, фронтальна камера: 13 Мп / RAM 6 ГБ / 128 ГБ вбудованої пам'яті + microSD (до 1 ТБ) / 3G / LTE / GPS / ГЛОНАСС / BDS / підтримка 2х SIM-карток (Nano-SIM) / Android 13 / 5000 мА * год`,
  ],

  [
    'https://content2.rozetka.com.ua/goods/images/big_tile/364623745.jpg',
    'Мобільний телефон Apple iPhone 15 128GB Black (MTP03RX/A)',
    `Екран (6.1", OLED (Super Retina XDR), 2556x1179) / Apple A16 Bionic / подвійна основна камера: 48 Мп + 12 Мп, фронтальна камера: 12 Мп / 128 ГБ вбудованої пам'яті / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17`,
  ],

  [
    'https://content.rozetka.com.ua/goods/images/big_tile/366851813.jpg',
    'Мобільний телефон Motorola G54 Power 12/256GB eSim Mint Green (1002724)',
    `Екран (6.5", IPS, 2400x1080) / MediaTek Dimensity 7020 (2.2 ГГц + 2.0 ГГц) / подвійна основна камера: 50 Мп + 8 Мп, фронтальна камера: 16 Мп / RAM 12 ГБ / 256 ГБ вбудованої памʼяті + microSD (до 1 ТБ) / 3G / LTE / 5G / GPS / Nano-SIM + eSIM / Android 13 / 6000 мА*год`,
  ]
];

const laptopData = [
  [
    'https://content.rozetka.com.ua/goods/images/big_tile/334492325.jpg',
    'Ноутбук Lenovo IdeaPad Slim 5 16IAH8 (83BG001ARA) Cloud Grey / 16" IPS WUXGA / Intel Core i5-12450H / RAM 16 ГБ / SSD 512 ГБ / Підсвічування клавіатури',
    'Екран 16" IPS (1920x1200) WUXGA, матовий / Intel Core i5-12450H (2.0 - 4.4 ГГц) / RAM 16 ГБ / SSD 512 ГБ / Intel UHD Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / без ОС / 1.89 кг / сірий',
  ],
  [
    'https://content1.rozetka.com.ua/goods/images/big_tile/144249735.jpg',
    'Ноутбук Apple MacBook Air 13" M1 8/256GB 2020 (MGN63) Space Gray',
    'Екран 13.3" Retina (2560x1600) WQXGA, глянсовий / Apple M1 / RAM 8 ГБ / SSD 256 ГБ / Apple M1 Graphics / Wi-Fi / Bluetooth / macOS Big Sur / 1.29 кг / сірий',
  ],
  [
    'https://content2.rozetka.com.ua/goods/images/big_tile/372703245.jpg',
    'Ноутбук Acer Nitro 5 AN517-54-72WJ (NH.QF8EU.00S) Shale Black / 17.3” IPS Full HD 144 Гц / Intel Core i7-11600H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050, 4 ГБ',
    `Екран 17.3” IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i7-11600H (2.5 - 4.6 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / вебкамера / без ОС / 2.7 кг / чорний`,
  ]
]

const wathesData = [
  [
    'https://content.rozetka.com.ua/goods/images/big_tile/279974312.jpg',
    'Смарт-годинник Samsung Galaxy Watch 5 Pro 45mm eSIM Black (SM-R925FZKASEK)',
    `Сумісність:Android,Повідомлення: + (Вхідні дзвінки, ...Пульсометр: +Дисплей: Super AMOLED, Діагональ: 1,36 дюймів, Ремінець: силікон`
  ],
  [
    'https://content2.rozetka.com.ua/goods/images/big_tile/325605816.jpg',
    'Смарт-годинник Apple Watch Series 8 GPS 41mm Silver Aluminium Case with White Sport Band (MP6K3UL/A)',
    `Сумісність:iOS; Повідомлення: +Пульсометр: + (Оптичний), Час роботи: до 18 годин, Дисплей: OLED, Діагональ: 1,69 дюймівРемінець: силікон`
  ],
  [
    'https://content2.rozetka.com.ua/goods/images/big_tile/238865566.jpg',
    'Смарт-годинник Huawei Watch GT3 42 mm Frosty White (55027150)',
    `смарт-годинник для тих, хто хоче отримати елегантний класичний аксесуар, але при цьому доповнити його широким переліком корисних функцій та сучасних технологій. Корпус пристрою виготовлений із нержавіючої сталі та постачається у кількох варіантах забарвлення. У Huawei Watch GT 3 встановлюється круглий дисплей AMOLED з діагоналлю 1,32 або 1,43 дюйма в залежності від конкретного варіанту виконання. Годинник управляється операційною системою HarmonyOS 2 і вміє сповіщати про вхідні події, дозволяє керувати музикою, підтримує функцію гучного зв'язку та багато іншого. Вони мають вбудований пульсометр, пульсоксиметр, крокомір, здатні записувати стан сну та вести точний підрахунок активності протягом дня або під час тренувань. Залежно від режиму використання заряду Huawei Watch GT 3 може вистачити на 14 днів автономної роботи.`
  ]
];

const audioData = [
  [
    'https://content2.rozetka.com.ua/goods/images/big_tile/314505544.jpg',
    'Навушники Hator Hypergang PC Edition Black (HTA-805)',
    `Діапазон частот навушників: 20 Гц – 20кГц, Навушники Hator Hypergang PC Edition Black (HTA-805)`
  ],
  [
    'https://content2.rozetka.com.ua/goods/images/big_tile/383262363.jpg',
    'Навушники RZTK MS300 Black',
    `Діапазон частот навушників: 20 Гц - 20 кГц, Навушники RZTK MS300 Black`
  ],
  [
    'https://content2.rozetka.com.ua/goods/images/big_tile/318173556.jpg',
    'Навушники JBL Tune 720BT Purple (JBLT720BTPUR)',
    `Діапазон частот навушників: 20 Гц – 20 кГц, Навушники JBL Tune 720BT Purple (JBLT720BTPUR)`
  ]
];

function getProdutTemplate (arrProd) {
return indexCount++,`
<section id="section${indexCount}", style="width: 410px">
<img src="${arrProd[0]}" alt="phone">
<p>${arrProd[1]}</p>
</section>
`
};

function addToMain (productTemplate) {
  main.innerHTML += productTemplate;
};

function template(prodArray) {
  for (let i = 0; i < prodArray.length; i++) {
    const prodTemp = getProdutTemplate(prodArray[i]);
    addToMain(prodTemp);
    arrayItem = prodArray;
  };
};

function owerviewCreator(i) {
  owerview.innerHTML = ` 
  <p>${arrayItem[i][2]}</p>
  <button>Купити зараз</button>`;
};


catList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    if (main.innerHTML != '') {
      main.innerHTML = ''
    };
    switch (true) {
      case event.target.id === 'phones':
        template(phonesData);
        arrayItem = phonesData; 
        indexCount = 0;
        break;

      case event.target.id === 'laptop':
        template(laptopData);
        arrayItem = laptopData; 
        indexCount = 0;
        break;

      case event.target.id === 'wathes':
        template(wathesData);
        arrayItem = wathesData; 
        indexCount = 0;
        break; 

      case event.target.id === 'audio':
        template(audioData);
        arrayItem = audioData; 
        indexCount = 0;
        break; 

      default:
        console.log('Щось пішло не так(((')
        break;
    };
  };
});


main.addEventListener('click', (event) => {
  if (event.target.parentElement.nodeName === 'SECTION' || event.target.tagName === 'SECTION') {
    console.log('12312')
    switch (true) {
      case event.target.parentElement.id === 'section1' || event.target.id === 'section1':
        owerviewCreator(0)  
        console.log('321')       
        break;
      case event.target.parentElement.id === 'section2' || event.target.id === 'section2':
        owerviewCreator(1)  
        console.log('123')    
        break;
      case event.target.parentElement.id === 'section3' || event.target.id === 'section3':
        owerviewCreator(2)  
        console.log('123')    
        break;
      default:
        console.log('Щось пішло не так(((')
        break;
    };
  };
});

asideRight.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON'){
    alert('Товар придбано');
    location.reload();
  };
}); */


//console.log(window.localStorage)


/* ////////////////////////////////////    отсебятина + homework 24

const body = document.querySelector('body');
const container = document.createElement('div');
const asideLeft = document.createElement('div');
const asideRight = document.createElement('div');
const orderBtn = document.createElement('a');

const categoryList = document.createElement('ul');
const catSmartphones = document.createElement('li');
const catLaptops = document.createElement('li');
const catFrangrances = document.createElement('li');
const catSkinCare = document.createElement('li');
const catGroceries = document.createElement('li');
const catHomeDecoration = document.createElement('li');

if (!localStorage.getItem("countOfOrder")){
  localStorage.setItem("countOfOrder", 0);
};



function appendToCategoryList (){
  for (let i = 0; i < arguments.length; i++) {
    categoryList.appendChild(arguments[i]);
  };
};


body.appendChild(asideLeft);
asideLeft.appendChild(orderBtn);
asideLeft.appendChild(categoryList);
body.appendChild(container);
body.appendChild(asideRight);
appendToCategoryList(catSmartphones, catLaptops, catFrangrances, catSkinCare, catGroceries, catHomeDecoration);


catSmartphones.textContent = 'Smartphones';
catLaptops.textContent = 'Laptops';
catFrangrances.textContent = 'Frangrances';
catSkinCare.textContent = 'Skin care';
catGroceries.textContent = 'Groceries';
catHomeDecoration.textContent = 'Home decoration';

body.style.display = 'flex';
body.style.background = '#c6cec6'
container.style.display = 'flex';
container.style['flex-wrap'] = 'wrap';
container.style.width = '60%';
container.style.textAlign = 'center';
asideLeft.style.width = '15%';
asideLeft.style.fontSize = '25px';
asideLeft.style.background = '#a6a9a6';
asideLeft.style.textAlign = 'center'
asideRight.style.width = '25%';
asideRight.style.fontSize = '25px';
asideRight.style.textAlign = 'center';
asideRight.style.background = '#a6a9a6';
asideRight.style.padding = '20px';
orderBtn.textContent = 'Мої замовлення';
orderBtn.setAttribute('href', '#');
orderBtn.style.textDecoration = 'none';
orderBtn.style.background = '#6a746a';
orderBtn.style.padding = '5px 20px';
orderBtn.style.borderRadius = '45%';





const fetchAllProducts = async () => {
  return (await fetch("https://dummyjson.com/products")).json();
};

async function getAllProducts(category) {
  const response = await fetchAllProducts();
  const prouducts = response.products;

  console.log(prouducts, "prouducts");

  const smartphonesArray = [];
  const laptopsArray = [];
  const fragrancesArray = [];
  const skinCareArray = [];
  const groceriesArray = [];
  const homeDecorationArray = [];

  for (let i = 0; i < prouducts.length; i++){
  switch (true) {
    case prouducts[i].category === 'smartphones':
      smartphonesArray.push(prouducts[i])
      break;
    case prouducts[i].category === 'laptops':
      laptopsArray.push(prouducts[i]);
      break;
    case prouducts[i].category === 'fragrances':
      fragrancesArray.push(prouducts[i]);
      break;
    case prouducts[i].category === 'skincare':
      skinCareArray.push(prouducts[i]);
      break;
    case prouducts[i].category === 'groceries':
      groceriesArray.push(prouducts[i]);
      break;
    case prouducts[i].category === 'home-decoration':
      homeDecorationArray.push(prouducts[i]);
      break;
    default:
      alert('Something wrong(')
      break;
  }
  }

  console.log(smartphonesArray, 'smartphones');
  console.log(laptopsArray, 'laptops');
  console.log(fragrancesArray, 'fragrances');
  console.log(skinCareArray, 'skincare');
  console.log(groceriesArray, 'groceries');
  console.log(homeDecorationArray, 'home-decoration');

  switch (true) {
    case category === 'smartphones':
      category = smartphonesArray;
      break;

    case category === 'laptops':
      category = laptopsArray;
      break;

    case category === 'fragrances':
      category = fragrancesArray;
      break;

    case category === 'skincare':
      category = skinCareArray;
      break;

    case category === 'groceries':
      category = groceriesArray;
      break;

    case category === 'home-decoration':
      category = homeDecorationArray;
      break;
    default:
      alert('oooops(')
      break;
  }
  

  getChosenCategory(category);
}


function getChosenCategory (array) {
  for (let i = 0; i < array.length; i++) {
    const template = getTemplate(array[i]);
    appendToContainer(template)
  }
}

function getTemplate (prod) {
  return `
  <div class="stuff" id = "${prod.id}">
    <img src="${prod.images[0]}" alt="#" class="images">
    <p>${prod.title}</p>
    <p>${prod.price}$</p>
    </div>
  `;
};

function appendToContainer (template) {
  container.innerHTML += template;
};


asideLeft.addEventListener('click', (e) => {
  if(e.target.tagName === 'LI' || e.target.tagName === 'A'){
    if (container.innerHTML !== ''){
      container.innerHTML = '';
    }
    switch (true) {
      case e.target === catSmartphones:
        getAllProducts('smartphones');
        break;

      case e.target === catLaptops:
        getAllProducts('laptops');
        break;

      case e.target === catFrangrances:
        getAllProducts('fragrances');
        break;

      case e.target === catSkinCare:
        getAllProducts('skincare');
        break;

      case e.target === catGroceries:
        getAllProducts('groceries');
        break;

      case e.target === catHomeDecoration:
        getAllProducts('home-decoration');
        break;
      
      default:
        break;
    };

    if (e.target.tagName === 'A') {
      categoryList.style.display = 'none';
      getOrders()
    };
  };

});

async function getDescription (parentId) {
  const response = await fetchAllProducts();
  const prouducts = response.products;
  const index = getIndexOfProduct(prouducts, +parentId);

  description = getDescriptionTemplate(prouducts[index]);
  appendToDescription(description);
};

function getIndexOfProduct (prod, parentId){
  let index = 0;
  for (let i = 0; i < prod.length; i++){
    if (prod[i].id === parentId){
      index = i;
    };
  };
  return index;
}

function getDescriptionTemplate (prouducts) {
  return `
  <p>${prouducts.description}</p>
  <button id="${prouducts.id}BuyButton">Замовити</button>`
};

function appendToDescription (descrTempl){
  asideRight.innerHTML = descrTempl;
}

container.addEventListener('click', (e) => {
  if (asideRight.innerHTML != ''){
    asideRight.innerHTML = ''
  };
  if (e.target.className === 'stuff'){
    const targetId = e.target.id;
    getDescription(targetId);
 };
 if (e.target.parentElement.className === 'stuff'){
  const targetId = e.target.parentElement.id;
  getDescription(targetId);
 };
 if (e.target.className === 'deleteOrder') {
  const orderNo = parseInt(e.target.parentElement.id); 
  localStorage.removeItem(orderNo);
  e.target.parentElement.remove()
 };
 if (e.target.className === 'order') {
  const hidenDetails = e.target.querySelector('.none');
  hidenDetails.style.display = 'block'
 }
})


async function addToLocalStorage (id) {
  const response = await fetchAllProducts();
  const prouducts = response.products;
  const index = getIndexOfProduct(prouducts, id);
  const date = Date();
  const orderInfo = [index, date];
  localStorage.setItem(`${countOfOrder}`, JSON.stringify(orderInfo));
};

asideRight.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON'){
    const id = parseInt(e.target.id);
    addToLocalStorage(id);
    alert('Товар придбано');
    countOfOrder = localStorage.getItem("countOfOrder");
    +countOfOrder++
    console.log(countOfOrder)
    localStorage.setItem('countOfOrder', countOfOrder)
    location.reload();
  };
}); 


async function getOrders () {
  const response = await fetchAllProducts();
  const prouducts = response.products;

  let keys = Object.keys(localStorage);
  console.log(keys)

  for (key of keys) {
    if (key != 'countOfOrder'){
    console.log(localStorage[key]);
    //console.log(key);
    const template = oderTemplate (prouducts, key);
    appendToContainer(template)
  }
  };
};


function oderTemplate (array, orderNo) {
  const order = JSON.parse(localStorage.getItem(orderNo))
  const arrIndex = order[0]
  return `
  <div class="order" id="${orderNo}_OrderNo">
  <p>Замовлення на суму: ${array[arrIndex].price}$</p>
  <p>${order[1]}</p>
  <div class="none">
  <p>name: ${array[arrIndex].title}</p>
  <p>${array[arrIndex].description}</p>
  <p>rating: ${array[arrIndex].rating}</p>
  </div>
  <button class="deleteOrder">Видалити</button>
</div>`
};

console.log(localStorage)

//localStorage.clear()




 */

///////////////////////////////////// homework 23

/* const form = document.querySelector('form');
const body = document.querySelector('body');
const table = document.createElement('div');


form.style.width = '210px';

body.style.display = 'flex';

body.appendChild(table);

function displayForm (obj) {
  let template = '';
  for (key in obj) {
    template += `<p> ${key}: ${obj[key]} </p>`
  }
  return template
}

form.addEventListener('submit',
(e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target).entries());
  console.log(data)
  const userData = displayForm(data);
  table.innerHTML = userData
}) */




//////////////////////////// homework 25


function findIndex (array, idPost){
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].id == idPost){
      index = i;
    }
  }
  return index;
}

async function fetchPosts(idPost) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    console.log(data);
    const index = findIndex(data, idPost);
    template = getTemplate(data[index]);
    container.innerHTML = template;

  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
  
}

function getTemplate (obj) {
  return `
  <p>coment title: ${obj.title}</p>
  <p>coment body: ${obj.body}</p>`
}

const body = document.querySelector('body');
const input = document.createElement('input');
const button = document.createElement('input');
const form = document.createElement('form');
const container = document.createElement('div');

button.type = 'submit';
button.innerText = 'Find';
body.appendChild(form);
body.appendChild(container);
form.appendChild(input);
form.appendChild(button);

input.type = 'number';
input.min = '1';
input.max = '100';
input.title = 'Numbers 1-100';

form.addEventListener('submit', (e) => {
  fetchPosts(input.value);
  e.preventDefault();
});

