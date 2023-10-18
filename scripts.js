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

const user = {};
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
`)

/////////////////////////////////// homework 7

/* let numOrStr = prompt('input number or string');

switch (true) {
  case numOrStr === null:
    console.log('ви скасували')
    break;

  case numOrStr === '':
    console.log('Empty String');
    break;

  case isNaN( +numOrStr ):
    console.log('number is Ba_NaN');
    break;

  default:
    console.log('OK!')
    break;
} */