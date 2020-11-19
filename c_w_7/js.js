// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".


// let text = document.getElementById('text');
// let btn = document.getElementById(' btn')
//
// btn.onclick = () => {
//    text.style.opacity = '0';
//    btn.onclick = () => {
//        text.style.opacity = '1';
//
//    }
// }




//
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.


// let btn = document.getElementById(' btn')
//
// btn.onclick = () => {
//     btn.style.opacity = '.1';
// }
//


//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


//
// textForm = document.forms.form1;
//
// let btn = document.getElementById('btn');
// btn.onclick = () => {
//      if (textForm.text1.value >= 18) {
//          console.log('Вітаю, ти в команді');
//      } else {
//          console.log('Приходь наступного року')
//      }
// }


// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.getElementById('munu');
// let subMenu = document.getElementById('submenu');
// let flag = false;
//
// menu.onclick = () => {
//     subMenu.hidden ? subMenu.hidden = false : subMenu.hidden = true;
// };



//
// // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// //     Вывести список комментариев в документ, каждый в своем блоке.
// //     Добавьте каждому комментарию по кнопке для сворачивания его body.
// //
// // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// //     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// // let btn =document.getElementById('btn1');
// // form1 = document.forms.form1;
// // form2 = document.forms.form2;
// //
// // btn.onclick = () => {
// //    let textForm = form1.text1.value + ' ' +
// //                   form1.text2.value + ' ' +
// //                   form2.text1.value + ' ' +
// //                   form2.text2.value;
// //     console.log(textForm);
// // }
// //
//
// //
// // - Створити функцію, яка генерує таблицю.
// //     Перший аргумент визначає кількість строк.
// //     Другий параметр визначає кліькіть ячеєк в кожній строці.
// //     Третій параметр визначає елемент в який потрібно таблицю додати.
// //
// //
// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
// //
// // - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// //
// //
// // - Сворити масив не цензцрних слів.
// //     Сворити інпут текстового типу.
// //     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// // кинути алерт з попередженням.
// //     Перевірку робити при натисканні на кнопку
// //
// //
// // - Сворити масив не цензцрних слів.
// //     Сворити інпут текстового типу.
// //     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// //     Кинути алерт з попередженням у випадку якщо містить.
// //     Перевірку робити при натисканні на кнопку
// //
// //
// //
// // -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// //     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// //
// // -- взять массив пользователей
// // let usersWithAddress = [
// //     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
// //     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
// //     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
// //     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
// //     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
// //     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
// //     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
// //     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
// //     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
// //     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
// //     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// //     ];
// //
// // let in1 = document.getElementById('in1');
// // let in2 = document.getElementById('in2');
// // let in3 = document.getElementById('in3');
// //
// // function funIn1 () {
// //
// //
// //     if (in1.checked) {
// //
// //         let filterIn1 = usersWithAddress.filter(value => value.status === false);
// //         console.log(filterIn1);
// //     } else
// //         console.clear()
// // }
// //
// // function funIn2 () {
// //
// //     if (in2.checked) {
// //
// //         let filterIn2 = usersWithAddress.filter(value => value.age >= 29);
// //         console.log(filterIn2);
// //     } else
// //         console.clear()
// // }
// //
// // function funIn3 () {
// //
// //
// //     if (in3.checked) {
// //
// //         let filterIn3 = usersWithAddress.filter(value => value.address.city === 'Lviv')
// //         console.log(filterIn3);
// //     } else
// //         console.clear()
// }
//     // ];
//
//
// // Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// // 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// // Данные выводить в документ
// //
// //
// //
// // *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// // при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// // НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// //     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
// //
// //
// // *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
// //
