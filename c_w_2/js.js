// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let arr = ['a','b','c'];
// console.log(arr);
// for (i = 1; i <= 3; i++) {
//     arr.push(i);
// }

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let arr = [1,2,3];
// arr[0] = 3;
// arr[1] = 2;
// arr[2] = 1;
// console.log(arr);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let arr = [1,2,3];
// arr.push(4,5,6);
// console.log(arr);


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let arr = [1,2,3];
// arr.unshift(4,5,6);
// console.log(arr);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let arr = ['js', 'css', 'jq'];
// let del = arr.shift();
// console.log(del);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let arr = ['js', 'css', 'jq'];
// let del = arr.pop();
// console.log(del);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

// let arr = [1,2,3,4,5];
// console.log(arr.slice(3, 5));


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

// let arr = [1,2,3,4,5];
// console.log(arr.slice(0,2));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

// let arr = [1,2,3,4,5];
// arr.splice(1,1);
// arr.splice(1,1);
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1,2,3,4,5];
// arr.splice(3,0,'a');
// arr.splice(4,0,'b');
// arr.splice(5,0,'c');
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arr = [1,2,3,4,5];
// arr.splice(1,0,'a');
// arr.splice(2,0,'b');
// arr.splice(6,0,'c');
// arr.splice(8,0,'e');
// console.log(arr);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// -----------------------------------------------------------------------------------------------------------


// let arr = [1,2,3,4,5,6,7,8,9,10,11];
// let a = 2;
// for (i = 0; i <= 10; i++) {
//     let b = arr[i] % a;
//     if (b === 0) {
//         console.log(arr[i]);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arr = [2929,2,3,4,5,6,7,8,9,18738];
// let arr2 = [];
// for (i = 0; i <= 9; i++){
//     let a = arr[i];
//     arr2.push(a);
// }
// console.log(arr2);
//
// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// let arr = [292329,24,34,42,53,64,7,8,9,18721238];
// let arr2 = [];
// for (i = 0; i <= 9; i++){
//     let a = arr[i];
//     arr2[i] = a;
// }
// console.log(arr2);

// 7. замінити кожне число кратне 3 на слово "okten"



// let arr = [1,2,3,4,5,6,7,8,9,10];
// let a = 3;
// for (i = 0; i <= 9; i++){
//     let b = arr[i] % a;
//     if (b === 0) {
//         arr[i] = 'okten';
//     }
//
// }
// console.log(arr);

// - заповнити його 50 парними числами за допомоги циклу.

// let arr = [];
// for (i = 2; i <= 100; i = i + 2) {
//     arr.push(i);
// }
// console.log(arr);

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
    // диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

// let arr =[];
// for (i = 0; i <= 100; i++){
//     arr[i] = Math.random();
// }
// console.log(arr);



    // диапазон рандома 8 до 732.
// let arr =[];
//
// for (i = 0; i <= 100; i++){
//     arr[i] = Math.floor((Math.random() * 732) + 8);
// }
// console.log(arr);

// вывести на консоль  каждый третий елемент

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// for (i = 0; i <= 14; i++) {
//     let b = arr[i] % 3;
//     if (b === 0) {
//         console.log(arr[i]);
//     }
// }