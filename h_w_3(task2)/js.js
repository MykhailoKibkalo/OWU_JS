// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно
// присутствовать только 1 раз в одном объекте )

let objMike = {name: 'Mike', height: '182', sex: 'M', width:'55'};
let objVape = {power: 220, price:1500, color:'grey'};
let objTable = {type: 'office', material:'wood', case: 3};

// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект.

let obj1 = {name: 'Bixbi', age: 21, skills: ['js','php' , 'c++'], other:{hobbies:'lego', friends: false}};


// Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

let Pixel1 = {display: 'amoled', diagonal:'5"', RAM:4, ROM:32, OS:'Android', features: ['clear system', 'fast work', 'camera'], etc:{nfc: true, wifi: true, bluetooth:'v 4.2'}};


// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (let value in objMike){
//     console.log(value);
// }
// console.log("_______________________________________")
// for (let value in objVape){
//     console.log(value);
// }
// console.log("_______________________________________")
// for (let value in objTable) {
//     console.log(value);
// }
// console.log("_______________________________________")

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// console.log(Object.keys(objTable));
// console.log(Object.keys(objVape));
// console.log(Object.keys(objMike));
// console.log(Object.keys(Pixel1));

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения
// полей могу быть выдуманными)

// let cars = [
//     {model: 'bmw',year:1999, hp:322, color:'white'},
//     {model: 'lexus',year:1992, hp:234, color:'blue'},
//     {model: 'bmw',year:1993, hp:412, color:'green'},
//     {model: 'bmw',year:1995, hp:132, color:'red'},
// ]

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения
// полей могу быть выдуманными)

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель
// является отдельным объектом с полями имя, возраст, пол, стаж.

// - проитерировать каждый массив из задания 5,6,7 при помощи while.

let arrTable = Object.keys(objTable);
let arrVape = Object.keys(objVape);
let arrMike = Object.keys(objMike);
let element = 0;
while (element < arrTable.length) {

    console.log(arrTable[element]);
    element++
}

// - проитерировать каждый массив из задания 5,6,7 при помощи for .

for (let i = 0; i < arrMike.length; i++) {
    const arrMikeElement = arrMike[i];
    console.log(arrMikeElement);
}

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

for (const string of arrMike) {
    console.log(string);

}

//   - взять объекты из задания 1 и превратить каждый в json.

// - взять json из задания 11 и превратить их обратно в объекты.

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив