// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]


// function Tag (titleOfTag,action,attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//
// let titleOfTagA = '<a/>';
// let actionA = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.';
// let attrsA = [
//     {
//         accesskey: 'Активация ссылки с помощью комбинации клавиш.'
//     },
//     {
//         coords: 'Устанавливает координаты активной области.'
//     },
//     {
//         download: 'Предлагает скачать указанный по ссылке файл.'
//     }
// ]
//
// let a = new Tag(titleOfTagA,actionA,attrsA);
// console.log(a);
//
// let titleOfTagDiv = '<div>';
// let actionDiv = '';
// let attrsDiv = [
//     { align:'Задает выравнивание содержимого тега <div>'},
//     { title:'Добавляет всплывающую подсказку к содержимому'}
// ];
//
// let div = new Tag(titleOfTagDiv,actionDiv,attrsDiv);
// console.log(div);

//
//
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
//


// class TagName {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag || 'No tittle';
//         this.action = action || 'No action';
//         this.attrs = attrs || [];
//     }
// }
//
// let titleOfTagA = '<a>';
// let actionA = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег....';
// let attrsA = [
//     { align:'Задает выравнивание содержимого тега <div>'},
//     { title:'Добавляет всплывающую подсказку к содержимому'}
// ];
//
// let a = new TagName(titleOfTagA,actionA,attrsA);
// console.log(a);
//
// let titleOfTagDiv = '<div>';
// let actionDiv = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.';
// let attrsDiv = [
//     {align:'Задает выравнивание содержимого тега <div>.'},
//     {title:'Добавляет всплывающую подсказку к содержимому.'}
// ]
//
// let div = new TagName(titleOfTagDiv,actionDiv,attrsDiv);
// console.log(div);

//
//
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
//
// let car = {
//     model: 'a4',
//     producer: 'audi',
//     year: 1992,
//     max: 230,
//     volume: 2.2,
//     drive: function () {
//         console.log ('Їдемо зі швидкістью ' + car.max);
//     },
//     info: function () {
//         console.log (car.model);
//         console.log (car.producer);
//         console.log (car.year);
//         console.log (car.max);
//         console.log (car.volume);
//     },
//     increaseMaxSpeed: function (newSpeed) {
//         car.max = newSpeed;
//         console.log("Тепер їдемо зі швидкістю " + newSpeed + "!!!!");
//     },
//     changeYear: function (newYear) {
//         car.year = newYear;
//         console.log("Дата випуску авто " + newYear + " рік");
//     },
//     addDriver: function (driver){
//         car.driver = driver;
//         console.log("Водій " + car.producer + " " + car.model + " " + car.driver);
//     }
// }
// car.drive();
// car.info();
// car.increaseMaxSpeed(400);
// car.changeYear(2019);
// car.addDriver('Ivan Ivanovich')
// console.log(car);




// =======================
// =======================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//

class Car {
    constructor(model,producer,year,maxSpeed,volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;

    }
    drive () {
        console.log('Їдемо зі швидкістю ' + myCar.maxSpeed);
    };

    info () {
        console.log (myCar.model);
        console.log (myCar.producer);
        console.log (myCar.year);
        console.log (myCar.max);
        console.log (myCar.volume);
    };
    increaseMaxSpeed (newSpeed) {
        myCar.max = newSpeed;
        console.log("Тепер їдемо зі швидкістю " + newSpeed + "!!!!")
    };

    changeYear (newValue) {
        myCar.year = newValue;
        console.log("Дата випуску авто " + newValue + " рік");
    };
    addDriver (driver) {
        myCar.driver = driver;
        console.log("Водій " + myCar.producer + " " + myCar.model + " " + myCar.driver)
    }
}

let myCar = new Car('A4',    'Audi',    1999,    221,    2.2);


myCar.info();
myCar.increaseMaxSpeed(400);
myCar.changeYear(2019);
myCar.addDriver('Ivan Ivanovich')
console.log(myCar);




//
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
//
// class Popelushka {
//     constructor(name, age, footSize) {
//         this.name = name || "Lizka";
//         this.age = age || 22;
//         this.footSize = footSize || 37;
//     }
// }
//
// let Liza = new Popelushka();
// let Anna = new Popelushka('Anna',21,38);
// let Vika = new Popelushka('Vika', 42, 40);
// let Ivanka = new Popelushka('Ivanka',12,32);
// let Kate = new Popelushka('Kate',42,29);
// let Sofa = new Popelushka('Sofa',25, 38);
//
// let arrP = [Liza,Anna,Vika,Ivanka,Kate,Sofa];
//
// class Prince {
//     constructor(name,age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// let prince = new Prince('Misha', 22 , 37);
//
// for (let i = 0; i < arrP.length; i++) {
//     const size = arrP[i].footSize;
//     if (size === prince.size) {
//         console.log(prince.name + ' знайшов свою Попелюшку ' + arrP[i].name);
//     }
//
// }

// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
//
//
// function Popelushka (name, age, fSize) {
//         this.name = name || "Lizka";
//         this.age = age || 22;
//         this.fSize = fSize || 37;
// }
//
// let Liza = new Popelushka();
// let Anna = new Popelushka('Anna',21,38);
// let Vika = new Popelushka('Vika', 42, 40);
// let Ivanka = new Popelushka('Ivanka',12,32);
// let Kate = new Popelushka('Kate',42,29);
// let Sofa = new Popelushka('Sofa',25, 38);
//
// let arrP = [Liza,Anna,Vika,Ivanka,Kate,Sofa];
//
// function Prince (name,age,size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
//
// let prince = new Prince('Misha',22,37);
//
// function findLove (arrey) {
//     for (let i = 0; i < arrey.length; i++) {
//         const size = arrey[i].fSize;
//         if (prince.size === size) {
//             console.log(prince.name + " love with " + arrey[i].name);
//         }
//     }
// }
//
// findLove(arrP);