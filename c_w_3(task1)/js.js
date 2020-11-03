// _________________________________________________________________________________________________________________________
// TASK #1

// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший

// let element1 = document.getElementById("main_header");
// console.log(element1);
// element1.style.color = "green";

// -- робить шириниу елементу ul 400 пікселів

// let widthUL = document.getElementsByTagName("ul");
//
// for (const widthULElement of widthUL) {
//     widthULElement.style.width = "400px";
// }



// -- робить шириниу всіх елементів з класом linkList шириною 50%

// let widthLink = document.getElementsByClassName("linkList");
// for (const widthLinkElement of widthLink) {
//     widthLinkElement.style.width = "50%";
// }

// -- отримує текст який зберігається в елементі з класом listElement2

// let elementList2 = document.getElementsByClassName("listElement2");
// for (let i = 0; i < elementList2.length; i++) {
//     const elementList2Element = elementList2[i];
//     console.log(elementList2Element.innerText);
// }

// -- отримує всі елементи li та змінює ім колір фону на сірий

// let elemli = document.getElementsByTagName("li");
// for (let i = 0; i < elemli.length; i++) {
//     const elemliElement = elemli[i];
//     elemliElement.style.width = "200px";
//     elemliElement.style.backgroundColor = "grey";
// }

// -- отримує всі елементи 'a' та додає їм клас anchor

// let elementA = document.getElementsByTagName("a");
// for (let i = 0; i < elementA.length; i++) {
//     const elementAElement = elementA[i];
//     elementAElement.setAttribute("style","anchor");
// }

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let elementA = document.getElementsByTagName("a");
// for (let i = 0; i < elementA.length; i++) {
//     const elementAElement = elementA[i];
//     if (elementAElement.innerText === "link3") {
//         elementAElement.style.fontSize = "40px";
//     }
// }

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let elementA = document.getElementsByTagName("a");
// for (let i = 0; i < elementA.length; i++) {
//     const elementAElement = elementA[i]
//     const elementAInnerText = elementA[i].innerText;
//     elementAElement.setAttribute("style","element_" + elementAInnerText);
// }

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let SetBackground = prompt('Введи цвет бекграунда на англ.', "green");
// let elementSubHeader = document.getElementsByClassName('sub-header');
// for (let i = 0; i < elementSubHeader.length; i++) {
//     const elementSubHeaderElement = elementSubHeader[i];
//     elementSubHeaderElement.style.backgroundColor = SetBackground;
// }

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let SetBackground = prompt('Введи цвет бекграунда на англ.', "green");
// let elementSubHeader = document.getElementsByClassName('sub-header');
// for (let i = 0; i < elementSubHeader.length; i++) {
//     const backgroundElement = elementSubHeader[i];
//     if (backgroundElement.innerText === 'content 2 segment') {
//         backgroundElement.style.backgroundColor = SetBackground;
//     }
// }


// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let userInnerText = prompt('Введи свой текст', 'Hello my name is Michael, I am 22 y.o. I am lerning JS and very happy');
// let elementContent1 = document.getElementsByClassName('content_1');
// for (let i = 0; i < elementContent1.length; i++) {
//     const elementContent1Element = elementContent1[i];
//     elementContent1Element.innerText = userInnerText;
// }

// -- отримати елементи p та змінити їм padding на довільне значення

// let elementP = document.getElementsByTagName('p');
// for (let i = 0; i < elementP.length; i++) {
//     const elementPElement = elementP[i];
//     elementPElement.style.padding = "50px";
// }


// -- отримати елементи з класом text2 та змінити їм текст на довільне значення


// let UserInnerText = prompt('Please, write random text','random random random random random random');
// let elementText2 = document.getElementsByClassName("text2");
// for (let i = 0; i < elementText2.length; i++) {
//     const elementText2Element = elementText2[i];
//     elementText2Element.innerText = UserInnerText;
// }


