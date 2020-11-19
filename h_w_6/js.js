// - создать массив с 20 числами.

let array20 = [2,42,40,53,64,7,5,43,7,8,60,76,45,678,550,340,56,34,576,320,19,15,857,23,12,12,48,97,867,7,8];
// console.log(array20);

// -- при помощи метода sort и колбека  отсортировать массив.

array20.sort((a, b) => a - b);
// console.log(array20);


// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// array20.sort((a, b) => b - a);
// console.log(array20);

// -- при помощи filter получить числа кратные 3

// let multiple3 = array20.filter(value => value % 3 === 0);
// console.log(multiple3);

// -- при помощи filter получить числа кратные 10

// let multiple10 = array20.filter(value => value % 10 === 0);
// console.log(multiple10);

// -- перебрать (проитерировать) массив при помощи foreach()

// array20.forEach((value,index ) => console.log(value,index));


// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let arrayX3 = array20.map(value => value = value * 3);
// console.log(arrayX3);


// - создать массив со словами на 15-20 элементов.

let word20 = ['hello','hi','what','are','you','do','watch','home','loke','lake','mama','mouse','knife','child','now','phone']

// -- отсортировать его по алфавиту в восходящем порядке.

// word20.sort((a, b) => a > b ? 1 : -1);
// console.log(word20);

// -- отсортировать его по алфавиту  в нисходящем порядке.

// word20.sort((a,b) => a > b ? -1 : 1);
// console.log(word20);

// -- отфильтровать слова длиной менее 4х символов

// let word4 = word20.filter(value => value.length < 4);
// console.log(word4);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let newArray = word20.map(value => value = value+'!');
// console.log(newArray);
// console.log(word20);

//
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
        ];

// - відсортувати його за  віком (зростання , а потім окремо спадання)

// users.sort((a, b) => b.age - a.age);
// console.log(users);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// users.sort((a, b) => a.name.length - b.name.length);
// console.log(users);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу
// його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

let copyArray = JSON.stringify(users);
let usersId = users.map( (value,) => {
    value.id = Math.floor(Math.random()* 100) + 1;
    return value;
});
users = JSON.parse(copyArray);
console.log(users);
console.log(usersId);

// - відсортувати його за індентифікатором

// usersId.sort((a, b) => a.id - b.id);
// console.log(usersId);

//
//
// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком
