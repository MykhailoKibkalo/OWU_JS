// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = ['hello','my','name','Michael'];
// console.log(arr);


// let arr = [1,2,3,3,1];
// console.log(arr);

// let arr = ['hello', 1488, 'my', 228, 'gobal', true, false];
// console.log(arr);

// let arr = [];
// arr[0] = 'zero';
// arr[1] = 1;
// arr[2] = 'num2';
// arr[3] = 3;
// console.log(arr);
// let del=  arr.pop();
// alert('its deleted element = ' + del);
// arr.push('its end element');
// console.log(arr[3]);

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i <= 10;i++) {
//     document.write(i + '<div style="color: blue; margin-bottom: 15px"> Hello this world </div>');
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 21) {
//     document.write(i + '<h1 style="margin-bottom: 20px; color: coral "> Стільки днів я вже не пив </h1>')
//     i += 1;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// const arr = [2, 3, 5, 6, 7, 8, 9, 10, 11, 21];
// for (let i = 0; i < 10; i++) {
//     console.log(arr[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// const arr = ['hello', false, true, 'new', 12, 42, false, 'false', 'true'];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == 'boolean') {
//         console.log(arr[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// const arr = ['hello', false, true, 'new', 12, 42, false, 'false', 'true'];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == 'number') {
//         console.log(arr[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// const arr = ['hello', false, true, 'new', 12, 42, false, 'false', 'true'];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == 'string') {
//         console.log(arr[i]);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль
// всі його елементи в циклі.

// const arr = [];
// arr.unshift('first');
// arr[1] = 'num2';
// arr[2] = 3;
// arr[3] = 4;
// arr[4] = true;
// arr[5] = false;
// arr[6] = '7even'
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


// for (let i = 1; i < 11; i++) {
//     console.log('step ',i);
//     document.write('step ' + i + '<br>');
// }



// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i < 101; i++) {
//     console.log('step ',i);
//     document.write('step ' + i + '<br>');
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i < 101; i = i + 2) {
//     console.log('step ',i);
//     document.write('step ' + i + '<br>');
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// const a = 2;
// for (let i = 1; i < 101; i++) {
//     let b = i % a;
//     if (b === 0) {
//     console.log('step ',i);
//     document.write('step ' + i + '<br>');
// }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// const a = 2;
// for (let i = 1; i < 101; i++) {
//     let b = i % a;
//     if (b !== 0) {
//         console.log('step ',i);
//         document.write('step ' + i + '<br>');
//     }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (let m = 2; m >= 0; m--){
// for (let s = 60; s >= 1; s--) {
//     document.write(m +' min ' + s + '<br>');
// }
// }
/*
 - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
*/

for (let hour = 2; hour >= 0; hour--){
    for(let minut = 20; minut >= 0; minut--){
        for (let sec = 60; sec >= 0; sec--){
            document.write(hour + ' годин ' + minut + ' хвилин ' + sec + ' секунд ' + '<br>');
}
}
}