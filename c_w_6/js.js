
// Відфільтрувати масив за наступними крітеріями :


// - двигун більше 3х літрів

let cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];
//
// let VolumeMore3 = cars.filter(value => value.volume > 3);
//
// console.log(Volume2);


// - двигун = 2л

// let Volume2 = cars.filter(value => value.volume === 2);
// console.log(Volume2);

// - виробник мерс

// let Mercedes = cars.filter(value => value.producer === 'mercedes');
// console.log(Mercedes);

// - двигун більше 3х літрів + виробник мерседес

// let Merc3 = cars.filter(value => value.producer === 'mercedes' && value.volume >= 3);
// console.log(Merc3);

// - двигун більше 3х літрів + виробник субару

// let Sub3 = cars.filter(value => value.producer === 'subaru' && value.volume >= 3);
// console.log(Sub3);

// - сили більше ніж 300

// let PowerMore300 = cars.filter(value => value.power > 300);
// console.log(PowerMore300);

// - сили більше ніж 300 + виробник субару

// let Power300Sub = cars.filter(value => value.power > 300 && value.producer === 'subaru');
// console.log(Power300Sub);


// - мотор серіі ej

// let EjMotor = cars.filter(value => value.engine.startsWith('ej'));
// console.log(EjMotor);

// - сили більше ніж 300 + виробник субару + мотор серіі ej

// let Power300SubEjMotors = cars.filter(value => value.engine.startsWith('ej') && value.power > 300 && value.producer === 'subaru');
// console.log(Power300SubEjMotors);

// - двигун меньше 3х літрів + виробник мерседес

// let MercLow3 = cars.filter(value => value.power < 300 && value.producer === 'mercedes');
// console.log(MercLow3);

// - двигун більше 2л + сили більше 250

// let V2Power250 = cars.filter(value => value.volume > 2 && value.power > 250);
// console.log(V2Power250);

// - сили більше 250  + виробник бмв

// let BMWPower200 = cars.filter(value => value.power > 250 && value.producer === 'bmw');
// console.log(BMWPower200);

// ______________________________________________________________________________________________________________________________________________________
//
//
//
// - взять слдующий массив
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'DShevchenko', number: 16}},
    {id: 3, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'FShevchenko', number: 1}},
    {id: 4, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'GShevchenko', number: 121}},
    {id: 2, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'VShevchenko', number: 90}},
    {id: 7, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'HShevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'HShevchenko', number: 2}},
    {id: 5, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'GShevchenko', number: 22}},
    {id: 11, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'VShevchenko', number: 43}},
    {id: 10, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'ZShevchenko', number: 12}},
    {id: 9, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'BShevchenko', number: 16}},
    {id: 8, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'YShevchenko', number: 121}}
    ];
// -- отсортировать его по id пользователей

// let SortIdUser = usersWithAddress.sort((a,b)=> {
//     return a.id - b.id;
// });
// console.log(SortIdUser);

// -- отсортировать его по id пользователей в обратном опрядке

// let SortIdUserReverse = usersWithAddress.sort((a,b) => {
//     return b.id - a.id;
// });
// console.log(SortIdUserReverse);


// -- отсортировать его по возрасту пользователей

// let AgeSortUser = usersWithAddress.sort((a, b) => {
//     return a.age - b.age;
// })
// console.log(AgeSortUser);

// -- отсортировать его по возрасту пользователей в обратном порядке

//     return b.age - a.age;

// -- отсортировать его по имени пользователей

// let NameUserSort = usersWithAddress.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     return -1;
// })
// console.log(NameUserSort);

// -- отсортировать его по имени пользователей в обратном порядке

// if (a.name > b.name) {
//         return -1;
//     }
//     return 1;

// -- отсортировать его по названию улицы  в алфавитном порядке


// let StSort = usersWithAddress.sort((a, b) => {
//     if (a.address.street > b.address.street) {
//         return 1;
//     }
//     return -1;
// })
// console.log(StSort);


// -- отсортировать его по номеру дома по возрастанию

// let StNumSort = usersWithAddress.sort((a, b) => {
//     return a.address.number - b.address.number;
// })
//
// console.log(StNumSort);

// -- отфильтровать (оставить) тех кто младше 30

// let year30 = usersWithAddress.filter(value => value.age < 30);
// console.log(year30);

// -- отфильтровать (оставить) тех у кого отрицательный статус

// let statusF = usersWithAddress.filter(value => value.status === false);
// console.log(statusF);


// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

// let StatusFYear30 = usersWithAddress.filter(value => value.status === false && value.age < 30);
// console.log(StatusFYear30);

// -- отфильтровать (оставить) тех у кого номер дома четный

// let evenHouse = usersWithAddress.filter(value => value.address.number % 2 === 0);
// console.log(evenHouse);


//
//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.

let car = [
    {mark:'subaru',power:234,owner:{name:'Michael',age:27,exp:3},price:24300,year:2002},
    {mark:'bmw',power:243,owner:{name:'Sasha',age:26,exp:2},price:23000,year:2004},
    {mark:'merc',power:234,owner:{name:'Max',age:29,exp:1},price:25400,year:2002},
    {mark:'mitsu',power:552,owner:{name:'Andrui',age:24,exp:7},price:26400,year:2006},
    {mark:'lanos',power:353,owner:{name:'Peter',age:25,exp:5},price:26500,year:2004},
    {mark:'lada',power:343,owner:{name:'Ivan',age:28,exp:4},price:27600,year:2003},
    {mark:'jiga',power:323,owner:{name:'Den',age:28,exp:3},price:28600,year:2001},
];

car.map(function (value, index) {
    if (index % 2 === 0) {
        value.power = value.power * 1.1;
        value.owner.name = 'New Owner';
        value.owner.age = Math.floor(Math.random()*10 + 21);
        value.owner.exp = Math.floor(Math.random()*5 + 15);
    }
} )
console.log(car);

//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
//
