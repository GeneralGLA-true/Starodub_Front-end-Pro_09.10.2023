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

function getSumFunc () {
  let value = 0;
  return function (b) {
    return value += b;
  }
}

let sum = getSumFunc();
res = sum(10);
console.log(res);

res = sum(15);
console.log(res);