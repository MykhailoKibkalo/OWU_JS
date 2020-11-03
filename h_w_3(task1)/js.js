// let objectDog = {
//     name: 'Jasmine',
//     age: 1,
//     HP: 0.1,
//     breed: 'Korgi',
//     eys: 'blue'
// };
//
// let objectHuman = {
//     name: 'Liza',
//     age: 22,
//     HP: 3,
//     breed: 'woman',
//     eys: 'green'
// };
//
// let objectCar = {
//     name: 'BMW',
//     age: 21,
//     HP: 192,
//     breed: 'sedan',
//     eys: 'xenon'
// };
//
// let objectHouse = {
//     age: 34,
//     room: 2,
//     floor: 12,
//     town: 'Lviv',
//     price: 8000
// }
//
// let objectBook = {
//     name: 'H.P. Secret Room',
//     age: 22,
//     author: 'Rouling',
//     page: 322,
//     interest: true
// }
//
// let arrDog = ['Jasmine','Marusya','Rex','Rey','Jack'];
// console.log(arrDog);
// let arrHuman = ['Liza','Mike','Peter','Denys','Ivan'];
// console.log(arrHuman);
// let arrCar = ['BMW','Marcedes','Lexus','Maseratti','Ford'];
// console.log(arrCar);
//
//
// let objectHome = {
//     floor: 3,
//     materials:{wood: 'teak', metal: 'zinc',glass:'crystal'},
//     people: ['Liza','Misha','Ivan','Inessa'],
//     town: 'Lviv',
//     price: 100000
// }
//
// console.log(objectHome);

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// console.log(users[7].status);
// console.log(users[4].status);
// console.log(users[9].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[3].age, users[9].age);
// console.log(users[4].age, users[4].name);
// console.log(users[5].age, users[5].status);

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// - отримує текст з параграфа з id "content"

//
// let innerTextP = document.getElementById('content').innerText;
// console.log(innerTextP);

// - отримує текст з блоку з id "rules"

// let InnerTextRules = document.getElementById('rules').innerText;
// console.log(InnerTextRules);

// - замініть текст параграфа з id 'content' на будь-який інший

// let innerTextP = document.getElementById('content');
// innerTextP.innerText = 'Hello, it`s a new text in CONTENT ';

// - замініть текст параграфа з id 'rules' на будь-який інший

// let TextRules = document.getElementById('rules');
// TextRules.innerText = 'Первое правило - никаких правил!';

// - змініть кожному елементу колір фону на червоний

// let colorDiv = document.getElementsByTagName('div');
// for (let i = 0; i < colorDiv.length; i++) {
//     const colorDivElement = colorDiv[i];
//     colorDivElement.style.backgroundColor = 'red';
// }
//
// let colorP = document.getElementsByTagName('p');
// for (let i = 0; i < colorP.length; i++) {
//     const colorPElement = colorP[i];
//     colorPElement.style.backgroundColor = 'red';
// }
//
// let colorLi = document.getElementsByTagName('li');
// for (let i = 0; i < colorLi.length; i++) {
//     const colorLiElement = colorLi[i];
//     colorLiElement.style.backgroundColor = 'red';
// }


// - змініть кожному елементу колір тексту на синій

// let colorDiv = document.getElementsByTagName('div');
// for (let i = 0; i < colorDiv.length; i++) {
//     const colorDivElement = colorDiv[i];
//     colorDivElement.style.color = 'blue';
// }
//
// let colorP = document.getElementsByTagName('p');
// for (let i = 0; i < colorP.length; i++) {
//     const colorPElement = colorP[i];
//     colorPElement.style.color = 'blue';
// }
//
// let colorLi = document.getElementsByTagName('li');
// for (let i = 0; i < colorLi.length; i++) {
//     const colorLiElement = colorLi[i];
//     colorLiElement.style.color = 'blue';
// }

// - отримати весь список класів елемента з id=rules і вивести їх в console.log

// let classes = document.getElementById('rules');
// console.log(classes.classList);

// - отримати всі елементи з класом fc_rules

// let arrRules = document.getElementsByClassName('fc_rules');
// console.log(arrRules);

// - поміняти колір тексту у всіх елементів fc_rules на червоний

// let colorRules = document.getElementsByClassName('fc_rules');
// for (let i = 0; i < colorRules.length; i++) {
//     const colorRule = colorRules[i];
//     colorRule.style.color = 'red';
// }