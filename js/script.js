'use strict'; // Мы работаем соврименным режиме (Строгый режим);
// a =15; console.log(a)


// ######################################## Переменные и строгий режим ########################################
// let number = 5; // _,$; | error, alert; (изменяемый)
// const leftBorderWidth = 1; // (не изменяемый)

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };
// obj.a = 10;
// console.log(obj);

// var Name = 'ivan';
// Name = 0;
// console.log(Name);

// {
//     var result = 50; // (let и const(не видят))
// }
// console.log(result);

// ######################################## Правила и типы названия переменных ########################################
// const vehisleBodyWidth = 5000,
//       vehisleBodyLength = 4000;
// console.log('Ширина кузова автомобиля: ' + vehisleBodyWidth  +  '\nДлина: ' + vehisleBodyLength);

// ['data', 'fara', 'sdd'].map(item => {});

// // Request (Запрос)
// // data
// // response

// // папки файлы
// // Верблюжья нотация (сamel case, camelCase) Стиль написания слов
// // Нотация Паскаля (Pascal case, PascalCase)
// // Змеиная нотация (snake case, snake_case)
// // Шашлычная нотация (kebab case, kebab-case)
// // Плоская нотация (flat case, flatcase)
// // UPPER_SNAKE_CASE
// let COLOR_RED = '#F00';

// const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
// // ЗДЕСЬ БУДЕТЬ ВАШ КЛЮЧЬ, ЭТОТ КЛЮЧЬ МОЖЕТЬ НЕ РАБОТАТЬ
// const _apikey = 'ápikey-d4eecbec66dedb fae4eab45d312fc1df';


// ######################################## Классификация типов данных в JS ########################################
// let number = 4; // (число)
// console.log(4/0); // Infinity
// console.log('string' * 9); // NaN 
// const persone = `1`; //  (1 число)-('' страка)
// const  bool = false;
// console.log(); // (error)
// // console.log(something); NaN
// let und;
// console.log(und); //undefined

// const obj = {    // объект
//     Name: 'john',    // под ключом "name" хранится значение "John"
//     age: 20, //  под ключом "age" хранится значение 30
//     isMarried: false
// };
// console.log(obj.Name); // (.[""])
//                 //0             1      2       3       4   5
// const arr = ['plum.png', 'orange.jpg', 6, 'aple.bmp', {}, [] ];
// console.log(arr[1]);

// ################### Разница между объектами и массивами и неочевидные синтаксические возможности ###################
// const arr = ["a", "b", "c"]; // (Массив)
// arr[10] = "3456";
// console.log(arr);
// const arrObj = {
//     a: "a",
//     "1": "b",
//     2: "c",
//     abc: {
//         df: [{}, {}],
//         def: {
//             d:21
//         }
//     }
// };
// console.log(arrObj.abc.def.d);

// const b = "b";
// // arrObj.b = "1234";
// arrObj[b] = "1234";
// console.log(arrObj["b"]);
// console.log(arrObj.b);
// console.log(arrObj[1]);

// // const obj = {a: 1, b: 2, c: 3}; // синтаксис "литерал объекта"
// const obj = {
//     "Anna": 500,
//     "alex": 400
// };
// // console.log(obj.alex);
// // let user = new Object(); // синтаксис "конструктор объекта"

// ######################################## Простое общение с пользователем ########################################
// const sd = alert("Hello");

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18", 18);
// console.log(typeof(answer)); // (строка)

// const answers = [];
// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваше фамиля?", "");
// answers[2] = prompt("Сколько вам лет?", "");
// document.write(answers);
// console.log(typeof(answers));

// ################################################ Интерполяция (ES6) ################################################
// const category = "toys";
// console.log('https://somerl.com/' + category + "/" + "4");
// console.log(`https://somerl.com/${category}/4`);

// const user = "Ivan";
// alert(`Привет:${user}`);

// ################################################## Операторы в JS ##################################################
// console.log("arr" + " - object");
// console.log(4 + " - object");
// console.log("object - " + 4);
// console.log(4 + "5");

// let incr = 10, // (инкремент) (= присваивание)
//     decr = 10; // (декремент)
// // ++incr;
// // decr--;
// console.log(++incr);
// console.log(decr--);
// console.log(2 + 2 * 2 == "6"); // (== равенства) (=== Строгое равенство)

// console.log(5.0 == 5); //TRUE
// console.log(5.0 === 5); //TRUE
// console.log(5.0 == '5'); //TRUE
// console.log(5.0 === '5'); //FALSE
// console.log('5.0' == 5); //TRUE 
// console.log('5.0' === '5'); //FALSE

// console.log(12 !== "12");
// console.log(12 != "12");

// // && (true - true = true а все остальныйе false)
// // || (false - false = false а все остальныйе true)
// const isChecked = false,
//       isClose = false;
// console.log(isChecked || !isClose);

// ################################### Практика, ч.1. Начинаем создавать приложение.###################################
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
//     //boolean-(булевая значение) true(истина) false(ложь)
// };
// const a = prompt('Один из последних просмотренных фильмов?', ""),
//       b = prompt('На сколько оцените его?', ""),
//       c = prompt('Один из последних просмотренных фильмов?', ""),
//       d = prompt('На сколько оцените его?', "");
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

// ##################################################### Условия. #####################################################
// Иногда нам нужно выполнить различные действия в зависимости от условий. Для этого мы можем использовать инструкцию if
// иvусловный оператор ?, который также называют оператором «вопросительный знак».

// if (2 == "2") {
//     console.log("Ok!");
// } else {
//     console.log("error");
// }

// const num = 50;
// if (num < 49) {
//     console.log("error");
// } else if (num > 100) {
//     console.log("Много");
// } else {
//     console.log("Ok!");
// }

// //  Тернарный оператор
// // (1-Оргумент)    (2-Оргумент)         (3-Оргумент)
// (num === "50") ? console.log("Ok!") : console.log("error");

// // Switch
// // это условный оператор, который сравнивает выражение сразу с несколькими возможными вариантами и выполнять
// // один || несколькоблоков кода на основе обнаруженных соответствий. Оператор switch по сути может заменить 
// // несколько блоков else if.

// switch (num) {
//     case 49:
//         console.log("Неверно");
//         break;
//     case 100:
//         console.log("Неверно");
//         break;
//     case 50:
//         console.log("Вы точку");
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

// ############################################# Логические операторы #############################################
// Логические операторы В JavaScript есть четыре логических оператора: || (ИЛИ), && (И) и ! (НЕ), ?? 
// (Оператор нулевого слияния). Здесь мы рассмотрим первые три, оператор ?? будет в следующей статье.
// Несмотря на своё название, данные операторы могут применяться к значениям любых типов. Полученные 
// результаты также могут иметь различный тип.

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log("Я сыть!");
// }
// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 1;
// const cola = 0;
// console.log((hamburger === 3 && cola && fries));

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "dssd");
// if (hamburger === 3 && cola && fries) {
//     console.log("Все сыты!");
// } else {
//     console.log("Мы уходим");
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 3;
// // console.log((hamburger === 3 && cola && fries));

// if (hamburger === 3 && (cola === 2 || fries === 3) && nuggets) {
//     console.log("Все сыты!");
// } else {
//     console.log("Мы уходим");
// }
// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);
// console.log(!0);
// console.log((hamburger || cola || fries));

// let johnReport, alexReport, samReport, mariaReport = "done";
// console.log(johnReport || alexReport || samReport || mariaReport);

// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3);
// console.log( NaN || null || !3 || undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Сделано');
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Сделано!');
// }

// ############################################# Циклы #############################################
// При написании скриптов зачастую встаёт задача сделать однотипное действие много раз.
// Например, вывести товары из списка один за другим. Или просто перебрать все числа от 1 до 10 и 
// для каждого выполнить одинаковый код.Для многократного повторения одного участка кода предусмотрены циклы.

// let num = 50;

// // while(пока)
// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }

// // do(делать)
// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num <= 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break;
//         // continue;
//     }
//     console.log(i);
// }
// for (let i = 0; i < 10; i++) {
//     console.log(`Наш баланс ${i}$`);
// }

// const tasks =['Задача 1', 'Задача 2', 'Задача 3'];
// for (let i = 0; i < tasks.length; i++){
//     if (tasks[i] === 'Задача 2') {
//         // continue;
//         break;
//     }
//     console.log(tasks[i]);
// }

// const arr = ['!', 'JS', 'люблю', 'Я'];
// const resultArray = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     resultArray.push(arr[i]);
// }
// console.log(resultArray.join(" "));
// ############################################# Цикл в цикле и метки #############################################

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }
// *
// **
// ***
// ****
// *****
// ******
//  let result = "";
//  const lengtH = 7;
// for (let i = 1; i < lengtH; i++) {
//     for (let j = 0; j < i; j++) {
//         result+= "*";
//     }
//     result+= "\n";
// }
// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// for (let i = 1; i < 5; i++) {
//     console.log(`Отец ${i}`);
//     for (let j = 1; j < 5; j++) {
//         console.log(`Сын ${j}`);
//     }
//     for (let k = 1; k < 5; k++) {
//         console.log(`Малыш ${k}`);
//     }
// }

// const tasks = [[1, 'Отец 1'], [2, 'Отец 2']];
// for (let i = 0; i < tasks.length; i++) {
//     for (let j = 0; j < tasks[i].length; j++) {
//         console.log(tasks[i][j]);
//     }
// }

// ##################################### Практика, ч2. Применяем условия и циклы #####################################
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания
// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ""),
//           b = prompt('На сколько оцените его?', "");

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Сделано');
//     } else {
//         console.log('error');
//         i--;
//     }
// }
// if (personalMovieDB.count < 10 && personalMovieDB.count != '' ) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }
// console.log(personalMovieDB);

// ##################################### JavaScript Решает #####################################
// Вывести число от 4 до 400 на экран
// let out = document.getElementById('out');
// let tmp = "";
// for (let i = 4; i < 400; i++) {
//     tmp = tmp + i + ' ';
// }

// Вывести число в последовательности 4 7 10 13 с помозщью цикла
// for (let i = 4; i <= 13; i=i+3) {
//     tmp = tmp + i + ' ';
// }

// Вывести число 654 653 652 до нуля.
// for (let i = 654; i >= 652; i=i-1) {
//     tmp = tmp + i + '<br>';
// }

// С помощью цикла напечатайте таблицу умножения на 5 от 1 до 9
// for (let i = 0; i <= 9; i=i+1) {
//     tmp = tmp + 5 + '*' + i + '=' + 5 * i + '<br>';
// }

// Выведите с помощью цикла спецсимволов от 1000 до 2000 Напомню что спецсимвол
// получается комбинацией &# число; например &#1222
// for (let i = 7000; i <= 10000; i=i+1) {
//     tmp = tmp + '&#' + i + ' ';
// }

// out.innerHTML = tmp;

// ##################################### Циклы FOR и WHILE в JavaScript Фрилансер #####################################
// let num = 0;
// while (num <= 5) {
//     console.log(num);
//     num++;
// }

// while (num) {
//     console.log(num);
//     num--;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 5);

// let num = 0;
// for (; num < 5; num++) {
//     console.log(num);
//     if (num == 2) {
//         break;
//     }
// }
// console.log(`Робото окончено в, num =${num}`);

// let num = 0;
// for (; num < 5; num++) {
//     if (num == 2) {
//         continue;
//     }
//     console.log(num);
// }

// firstFor: for (let num = 0; num < 2; num++) {
//     for (let size = 0; size < 3; size++) {
//         if (size == 2) {
//             continue firstFor;
//         }
//         console.log(size);
//     }
// }

// while - Проверяет условие перед каждой итерацией.
// do..whilem - Проверяет условие после каждой итерации.
// for (;;) - Проверяет условие перед каждой  итерацией,
//            есть возможность задать дополнительные настройки.

// Циклы использование while do while
// let num = 0;
// while (num <= 5) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num <= 5);

// let num = 8;
// while (num >= 0) {
//     console.log(num);
//     num--;
// }

// Циклы использование while do while
// for (let num = 0; num < 3; num++) {
//     console.log(`Число ${num}`);
// }

// let num = 0;
// while (num < 3) {
//     console.log(`Число ${num}`);
//     num++;
// }

// do {
//     console.log(`Число ${num}`);
//     num++;
// } while (num < 3);

// for (let i = 0; i < 2; i++) {
//     console.log(`Отец ${i}`);
//     for (let j = 0; j < 3; j++) {
//         if (j == 1) {
//             break
//         }
//         console.log(`Сын ${j}`);
//     }
// }

// ##################################### Вложенные циклы JS Таблица #####################################
// let out = document.querySelector('#out');
// console.log(out);
// // for (let i = 1; i < 10; i++) {
// //     for (let j = 0; j < i; j++) {
// //         out.innerHTML += "*";
// //     }
// //     out.innerHTML += "<br>";
// // }

// for (let i = 1; i <= 10; i++) {
//     // out.innerHTML += "3" + "+" + i + "=" + (i + 3)+ "<br>"; 
//     out.innerHTML += `3*${i}=${3 * i} <br>`;
// }

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         out.innerHTML += `${i}*${j}=${i * j}<br>`;
//     }
//     out.innerHTML += '<hr>';
// }

// ##################################### Домащняя работа циклы JS Таблица #####################################
// let num = prompt('ЧИСЛО'),
//     num1 = prompt('КОНЕЦ');
// // while (num < num1) {
// //     console.log(num);
// //     num++;
// // }
// for (num; num <= num1; num++) {
//     console.log(num);
// }

// const arr = [1, 4, 7, 8];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//         continue;
//     }
//     console.log(arr[i]);
// }

// let i = 0;
// while (arr[i] <= 5 && i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < 0);

// const arr = [1, 4, 7, 8];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let element of arr) {
//     console.log(element);
// }

// for (let index in arr) {
//     console.log(arr[index]); //arr[index]
// }

// ##################################### Функции, стрелочные ф-ции #####################################

// FUNCTION DECLARATION
// Создается до начала выполнения скрипта,можно вызвать перед объявлением
// function showFirstMessage() {
//     console.log('Hello World');
// }
// showFirstMessage();

// function showFirstMessage(text) {
//     console.log(text);
// }
// showFirstMessage('Hello World');

// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     // let num = 10;
//     // num = 12;
//     console.log(num);
// }
// showFirstMessage('Hello World');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;
//     //
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// FUNCTION EXPRESSION
// Создается только тогда, когда доходит поток кода,можно вызвать только после объявления.
// const logger = function() {
//     console.log("Hello");
// };
// logger();

// СТРЕЛОЧНЫЕ ФУНКЦИИ
// Не имеет своего контекста (this)
// const calc = (a, b) => a + b;
// const calc = (a, b) => {

//     return (a + b);
    
// };
// console.log(calc(2, 3));

// ##################################### Домашняя работа  Функции #####################################
// function showMessage() {
//   alert( 'Всем привет!' );
// }

// showMessage();
// showMessage();

// function showMessage() {
//     let message = "Привет, я JavaScript!"; // локальная переменная
  
//     alert( message );
//   }
  
//   showMessage(); // Привет, я JavaScript!
  
//   alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри функции

// let userName = 'Вася';
// function showMessage() {
//     let message = 'Привет ' + userName;
//     alert(message);
// }
// showMessage();

// let userName = 'Вася';
// function showMessage() {
//     let userName = 'Петя'; // (1) изменяем значение внешней переменной
//     let message = 'Привет, ' + userName;
//     alert(message);
// }
// alert(userName); // Вася перед вызовом функции
// alert(userName);
// showMessage(); // Петя, значение внешней переменной было изменено функцией

// function showMessage(from, text) { // параметры: from, text
//     alert(from + ':' + text);
// }
// showMessage('Аня', 'Привет'); // Аня: Привет! (*)
// showMessage('Аня', 'Как дела'); // Аня: Как дела? (**)

// function showMessage(from, text) {
//     from = '*' + from + '*'; // немного украсим "from"
//     alert(from + ': ' + text);
// }

// let from = 'Аня';
// showMessage(from, 'Привет'); // *Аня*: Привет
// значение "from" осталось прежним, функция изменила значение локальной переменной
// alert(from); // Аня

// функции
// function toPower(num, power) {
//     const res = num + power;
//     return res;
// }
// console.log(toPower(4, 6));
// // Стрелочный функции 
// const toPowerArrow = (num, power) => num + power;
// console.log(toPowerArrow(4, 6));

// function showMessage(from, text="Текст не дабавлен") {
//     alert(from + ":" + text);
// }
// showMessage('Аня'); // Аня: текст не добавлен

// ##################################### Еще раз про аргументы функций #####################################
// const usdCurr = 28;
// const eurCurr = 32;
// function convert(amount, curr) {
//     console.log(curr * amount);
// }
// convert(500, usdCurr);
// convert(500, eurCurr);

// ##################################### Про важность return #####################################
// const usdCurr = 28;
// const discount = 0.9;
// function convert(amount, cur) {
//     return cur * amount;
// }

// function promation(result) {
//     console.log(result * discount);
// }

// // const res = convert(500, usdCurr);
// promation(convert(500, usdCurr));

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 5) {
//             return;
//         }
//     }
//     console.log('Done');
// }
// test();

// function doNothing() {}
// console.log(doNothing() === undefined);

// ############################## Домашняя работа toUpperCase, toString().slice(-1) ##############################
// const res = prompt("Введите имя");
// const i = res.toUpperCase();
// console.log(i);

// function userUpper(text) {
//     let res = text.toUpperCase();
//     return res;
// }
// console.log(userUpper("nursultan"));


// function sum(num, sum, um) {
//     return num + sum + um;
// }
// console.log(sum(1, 2, 3));
// const nameA = 'adilet';
// const res = nameA.toString().slice(-1);
// const res2 = nameA[0];

// console.log(res);
// console.log(res2);

// function gen(name) {
//     const res = name[0];
//     const res2 = name.slice(-1);
//     const res3 = res + res2;
//     return res3;
// }


// console.log(gen('adilet'));

// ############################## Методы и свойства строк и чисел ##############################
// length
// const str = 'text';
// console.log(str.length);

// const arr = [1, 2, 3];
// console.log(arr.length);

// const str1 = 'text';
// console.log(str1[0] + str1[3]);

// const str2 = 'text';
// console.log(str2.toUpperCase());
// console.log(str2.toLocaleLowerCase());

// const fruit = 'Some Fruit';
// console.log(fruit.indexOf('Fruit'));

// const logg = 'Hello World';
// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));

// ############################## Практика , ч3. Используем функции ##############################
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

// let numberOfFilms;
// function start() {
//     numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?').trim();

//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
//     }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function remeberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt('Один из последних просмотренных фильмов?').trim(),
//             b = prompt('На сколько оцените его?');
//          if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//              personalMovieDB.movies[a] = b;
//              console.log('Done');
//          } else {
//              console.log('error');
//              i--;
//          } 
//      }
// }
// remeberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30 ) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }
// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }

// }
// writeYourGenres();
// showMyDB(personalMovieDB.privat);


// ############################################### Callback- функции ###############################################
// function first() {
//     // Do sщmething(Сделай что-нибудь)
//     setTimeout(function() {
//         console.log(1);
//     },500);
// }

// function Second() {
//     console.log(2);
// }
// first();
// Second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done () {
//     console.log('Я прошел этот урок!');
// }
// ///////////////////////////////////////
// learnJS('JavaScript', done);
// learnJS('JavaScript', function() {
//     console.log('Я прошел этот урок!');
// });
///////////////////////////////////////

// ####################################### Объекты, деструктуризация объектов #######################################

// const options = {
// //  ключь | значение
//     Name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     mekeTest: function() {
//         console.log('test');
//     }
// };
// options.mekeTest();

// const {border, bg} =options.colors;
// console.log(border,);
// console.log(Object.keys(options).length);
// console.log(options.Name);
// delete options.Name;
// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// ####################################### Массивы и псевдомассивы #######################################
// const arr = [2, 3, 6, 8, 10];
// arr.sort(compareNun); // метод сортирует содержимое arr
// console.log(arr);
// function compareNun(a, b) {
//     return a - b;
// }
////////////////////////////
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);
//////////////////////////
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });
////////////////////////////////////////////////////
// const arr = [1, 2, 3, 6, 8]; 
// arr.pop(); // Удаляет последний элемент из массива
// arr.push(10); // Добавляет элемент в конец массива:
// console.log(arr);
////////////////////////////////////////////////////
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(','); // Метод split() возвращает новый массив.
// products.sort();
// console.log(products.join("; "));

// ########################## Передача по ссылке или по значению, Spread оператор (ES6-ES9) ##########################

// let a = 5,
//     b = a;
// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj; // Сылку
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;
// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// // console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray[1] = 'dancho';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger', 'rutube'],
//       internet = [...video, ...blogs, 'vk', 'foocebuc'];
// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);

// const array = ['a', 'b'];
// const newAarray = [...array];
// console.log(newAarray);

// const q = {
//     one: 1,
//     two: 2
// };
// const newObj = {...q};
// console.log(newObj);

// function resCom() {
//     for (let i = 0; i < 1; i++) {
//         let a = prompt("Nursultan");
//         if (a != '') {
//             console.log('Данияр молодец');
//         } else {
//             console.log('Это prompt');
//             i--;
//         }
//     }
// }
// resCom();

// ########################## Мастер класс ##########################
const valuts = {
    com: 1.30,
    rub: 1.20,
};

const valut1 = document.querySelector('#valut1');
const valut2 = document.querySelector('#valut2');
const convert = document.querySelector('#convert');

valut1.addEventListener('input', item => {
    console.log(convert.value);
    if (convert.value === 'com_to_rub') {
        valut2.value = (valut1.value * valuts.com).toFixed(2);
    } else if (convert.value === 'rub_to_com') {
        valut2.value = (valut1.value / valuts.rub).toFixed(2);
    }
});

convert.addEventListener('change', item => {
    if (convert.value === 'com_to_rub') {
        valut2.value = (valut1.value * valuts.com).toFixed(2);
    } else if (convert.value === 'rub_to_com') {
        valut2.value = (valut1.value / valuts.rub).toFixed(2);
    }
});
