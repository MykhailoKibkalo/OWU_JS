
 // TASK 1

// let str = 'Првивет';
// let num = 123;
// let flag = true;
// let txt = 'true';
//
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);


// ---------------------------------------------
//     TASK 2

// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = 5 % 3;
//
// document.write(a1 + "<br>");
// document.write(a2 + "<br>");
// document.write(a3 + "<br>");
// document.write(a4 + "<br>");
// document.write(a5 + "<br>");
//
// ------------------------------------------------

    // TASK 3

// let a1 = 5 % 3;
// let a2 = 3 % 5;
// let a3 = 5 + "3";
// let a4 = "5" - 3;
// let a5 = 75 + "kg";
//
// document.write(a1 + "<br>");
// document.write(a2 + "<br>");
// document.write(a3 + "<br>");
// document.write(a4 + "<br>");
// document.write(a5 + "<br>");

// ____________________________________________________

 // Task 4

// let height = prompt('write height');
// let weight = prompt('write weight');
// let s = height * weight;
// document.write(s);


// -------------------------------------------------------
//  task 5

//  let heightC = prompt("Write height");
// let d = prompt("Write diametr");
// let r = d / 2;
// let v = 3.14 * r**2 * heightC;
// document.write('v= ' + v);


 // task 6

// let n = prompt('write katet #1');
// let m = prompt('write katet #2');
// let nm = Math.pow(n,2) + Math.pow(m,2);
// let k = Math.sqrt( nm ,2);
// document.write('Gipotenusa is ' + k);


 // ---------------------------------------

 // Task 7

//  let str = "Hello world";
// document.write(str);
// alert(str);
// console.log(str);

 // ----------------------------------------------------------

     // task 8

// alert("KMO \n22 \nJS");

 // --------------------------------------------------

 // task 9
//  let str1 = 'Who ';
// let str2 = 'are ';
// let str3 = 'you?';
// let concatenation = str1 + str2 + str3;
// document.write(concatenation);

 // -------------------------------------------------------------
// task 10

 // let str = "20";
 // let a = 5;
 // document.write(str + a + "<br/>");
 // document.write(str - a + "<br/>");
 // document.write(str * "2" + "<br/>");
 // document.write(str / 2 + "<br/>");

// task 11
//
//  console.log(parseInt("3.14"))
//  console.log(parseInt("-7.875"))
//  console.log(parseInt("435")
//  console.log(parseInt("Вася"))

 // -------------------------------
 // task 12
 // let str = prompt("Enter something", "ho-ho")
 // console.log(str);

 // -------------------
     // task13

//  let a = +prompt("a = ");
// let b = +prompt("b = ");
// let c = a + b;
// document.write('a + b = ' + c);

 // --------------------------\
 // task14

//  let name = prompt('your name');
// let age = prompt('your age');
// alert("dear " + name + " we happy that you " + age);
//  ---------------------------------------------------------------

 // task 15
let a = +prompt('First num');
let b = +prompt('second num');
let c = +prompt('thrid num');

       if ( a > b || b > c ) {
    document.write(a,">",b,">",c)
} else if (a > c || c > b) {
    document.write(a,">",c,">",b)
} else if (b > a || a > c) {
    document.write(b,">",a,">",c)
} else if (b > c || c > a) {
    document.write(b,">",c,">",a)
} else if (c > a || a > b) {
    document.write(c,">",a,">",b)
} else if (c > b || b > a) {
    document.write(c,">",b,">",a)
// } else if (a = b||b = c) {
//     document.write(a,"=",b,"=",c)
}
