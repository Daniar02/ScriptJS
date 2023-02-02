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

// ################################################### Мастер класс ###################################################
// const valuts = {
//     com: 1.30,
//     rub: 1.20,
// };

// const valut1 = document.querySelector('#valut1');
// const valut2 = document.querySelector('#valut2');
// const convert = document.querySelector('#convert');

// valut1.addEventListener('input', item => {
//     console.log(convert.value);
//     if (convert.value === 'com_to_rub') {
//         valut2.value = (valut1.value * valuts.com).toFixed(2);
//     } else if (convert.value === 'rub_to_com') {
//         valut2.value = (valut1.value / valuts.rub).toFixed(2);
//     }
// });

// convert.addEventListener('change', item => {
//     if (convert.value === 'com_to_rub') {
//         valut2.value = (valut1.value * valuts.com).toFixed(2);
//     } else if (convert.value === 'rub_to_com') {
//         valut2.value = (valut1.value / valuts.rub).toFixed(2);
//     }
// });

// ################################ Основы ООП, прототипно-ориентированное наследование ################################
// let str = "some";
// let strObj = {
//    new: String(str)
// };
// console.log(typeof(str));
// console.log(typeof(strObj));
// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor:100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const jonh = Object.create(soldier);
// // const jonh = {
// //     health: 100
// // };

// // jonh.__proto__ = soldier;
// // Object.setPrototypeOf(jonh, soldier);

// // console.log(jonh.armor);
// jonh.sayHello();

// ################################ Угадай число ################################

// let num = 55;
// const sum = 0;
// for (let i = 0; i < 1; i++) {
//     let guess = prompt("Угадай");
//     if (guess == num) {
//         console.log('Угадал');
//     } else if (guess > num) {
//         console.log("Больше");
//         i--;
//     } else if(guess < num){
//         console.log("Меньше");
//         i--;
//     } else if (guess length < 5)
// }

// let num = 77;
// let pop = 0;

// while(pop < 7) {
//     const x = prompt('Угадай число');
//     pop++;
//     console.log(pop);
//     if(x > num) {
//         console.log('Больше');
//     }else if(x < num){
//         console.log('Меньше');
//     }else if(x == num) {
//         console.log('Угадал');
//         break;
//     } 
// } 

// if(pop == 7){
//     console.log(`вы проиграли\nЯ зогадал: ${num}`);
// }

// ################################ switch ################################
// const role = "manager";
// if (role == "manager") {
//     console.log('менеджер');
// } else if (role === 'admin') {
//     console.log('админ');
// } else if(role === 'ceo') {
//     console.log('CEO');
// } else {
//     console.log('error');
// }

// switch(role) {
//     case 'manager': // role === 'manager'
//         console.log('менеджер');
//         break;
//     case 'admin':  // role === 'admin'
//         console.log('админ');
//         break;
//     case 'ceo':  // role === 'ceo'
//         console.log('CEO');
//         break;
//     default:
//         console.log('error');
// }

// const num = 1;
// switch (true) {
//     case num > 0: // true === num > 0
//         console.log('Положительный');
//         break;
//     case num < 0:
//         console.log('Отрицательный');
//         break;
//     default:
//         console.log("Ноль!");
// }

// const bmwX5 = 150;
// const mersAmg = 150;
// const budget = 200;
// // let message;
// // if (budget > bmwX5) {
// //     message = "BMW";
// // } else if (budget > mersAmg) {
// //     message = "MERS";
// // } else { 
// //     message = "Велосипед";
// // }
// // console.log(`Я куплю: ${message}`);

// let message =  budget > mersAmg ? "MERS" : budget > bmwX5 ? 'BMW' : "Велосипед";
// console.log(`Я куплю: ${message}`);

// const num = prompt("Сколько будет 7 + или - 15?");
// switch(true) {
//     case num === "Я не робот":
//     case +num === 22:
//     case +num === -8:
//         console.log("Успех");
//         break;
//     default: 
//     console.log("Вы робот!");
// }

// if (num === "Я не робот") {
//     console.log("Успех");
// } else {
//     const numNum = Number(num);
//     switch(numNum) {
//         case 22:
//         case -8:
//             console.log("Успех");
//             break;
//         default:
//             console.log("Вы робот!");
//     }
// };

// ################################################ Function ################################################
// function nameUber(name, uber) {
//     if(uber == 'lower') {
//         return name.toLowerCase();
//     }
//     if(uber == 'upper') {
//         return name.toUpperCase();
//     }
    
// }
// console.log(nameUber('Nursultan', 'upper'));

// function powerOftwo(num) {
//     console.log(num);
//     return num * num;
// }
// console.log(powerOftwo(5));
// // Анонимные функции
// const poft = function (num) {
//     console.log(num);
//     return num * num;
// };
// console.log(poft(6));
// // Стрелочные функции
// const poft1 = num => num * num;
// console.log(poft1(4));

// const poft2 = num => {
//     console.log(num);
//     return num * num;
// };
// console.log(poft2(3));
// ///////////////////
// function toPower(num, power = 2) {
//     const res = num * power;
//     return res;
// }
// console.log(toPower(2, 3));
// console.log(toPower(2));
// // // Стрелочные функции
// const toPowerArrow  = (num, power) => num * power;
// console.log(toPowerArrow(2, 3));
// console.log(toPowerArrow(2));
/////////////////////////////////////////////////
// function canAccsseWebsite(age) {
//     if (age < 18) {
//         return 'нет';
//     }
//     return 'да';
// }
// console.log(canAccsseWebsite(19));
// // // Стрелочные функции
// const canAccsseWebsite2 = age => age < 18 ? 'нет' : 'да';
// console.log(canAccsseWebsite2(19));
//////////////////////////////////////////////////
// const KG_IN_USD = 7;
// const KM_IN_USD = 5;

// function calculateW(present) {
//     return present * KG_IN_USD;
// }
// function calculateKM(distance) {
//     return distance * KM_IN_USD;
// }
// function getExchagePrice(present1, present2, distance) {
//     const  price1 = calculateW(present1);
//     const  price2 = calculateW(present2);
//     const distancePrice = calculateKM(distance);
//     console.log(price1);
//     console.log(price2);
//     console.log(distancePrice);
//     return price1 + price2 + distancePrice;
  
// }
// console.log(getExchagePrice(1, 2, 10));
/////////////////////////////////////////
// function computeCredit(age, hasJob = false) {
//     switch(true) {
//         case age > 24 && hasJob:
//             return 500;
//         case age > 24:
//             return 100;
//         default:
//             return 0;
//     }
// }
// function canBuy(productPrice, age, money, hasJob = false) {
//     const creditMoney = computeCredit(age, hasJob);
//     return productPrice <= money + creditMoney;
// }
// console.log(canBuy(2000, 25, 1900, true));

// ################################################ Массив ################################################
// const num = ["1", "2", '3', "4"];
// console.log(num.length);
// console.log(num[num.length -3]);
// console.log(num.at(0));
// push(дб конце) unshift(дб начало) pop(уд конце) shift(уд начало)
// indexOf(поиск) includes(true false)
// const elIndex = num.indexOf("3");
// console.log(elIndex);
// console.log(num.includes("2"));
// if (num.includes("2")) {
//     console.log('Доступ есть');
// }
// ///////////////////////////////////////
// const res = num.slice(2); // (2 до конца)
// console.log(res);
// const res1 = num.slice(2, 3); // (2 до 3 вырезаеть)
// console.log(res1); 
// const res2 = num.slice(-1); // (последний)
// console.log(res2);
///////////////////////////////////////////
// const res3 = num.splice(2, 5).reverse();
// console.log(res3);
/////////////////////
// const sum = ["5", "6"];
// const res4 = num.concat(sum); // concat(дб массив массив)
// console.log(res4); 
/////////////////////
// const url = "daniar/nursultan/nurbolot";
// const res = url.split('/'); // split(разбить)
// console.log(res);
////////////////////
// const tasks = ['Задача 1'];
// function Add(task) {
//     tasks.push(task);
// }

// function Remove(task) {
//     const index = tasks.indexOf(task);
//     if (index === -1) {
//         return;
//     }
//     return tasks.splice(index, 1);
// }

// function Prioritize(task) {
//     const result = Remove(task);
//     if (!result) {
//         return;
//     }
//     tasks.unshift(result[0]);
// }

// Add('Задача 2');
// Add('Задача 3');
// console.log(tasks);
// Remove('Задача 2');
// console.log(tasks);
// Prioritize('Задача 3');
// console.log(tasks);
/////////////////////////////////////////////
// const userData = ['Данияр', 20, 'Бишкек'];
// function getData() {
//     return ['Данияр', 20, 'Бишкек'];
// }
// // const neme = getData()[0];
// // const age = getData()[1];
// // const city = getData()[2];
// const [neme, age, city] = getData();
// console.log(neme, age, city);
/////////////////////////////////////////
// Rest(Остаольное)
// const num = [1, 2, 3, 4, 5, 6];
// const [one, two, ...others] = num;
// console.log(one, two, others);
///////////////////////////////////
// const url = 'https://purpleschool.ru/course/javascript';
// const url2 = 'purpleschool.ru/course/javascript';
// function getUrlPParts(url) {
//     const [protocol, _, host, ...path] = url.split('/');
//     if (protocol === 'https:' || protocol === 'http:') {
//         if (!host.includes('.')) {
//             return;
//         }
//         console.log(protocol, _, host, path);
//         console.log(`Протокол: ${protocol.split(':')[0]}`);
//         console.log(`Доменное имя: ${host}`);
//         console.log(`Путь внутри сайта: /${path.join('/')}`);
//     }
// }
// getUrlPParts(url2);

// ################################################ Цикл ################################################
// const num = ['1', '2', '3', '4'];
// for (let i = 0; i < num.length; i++) {
//     if (num[i] === "2") {
//         continue;
//     }
//     console.log(`${num[i]}`);
// }
/////////////////////////////
// const arr = ['!', "JS", "люблю", "я"];
// const resultArray = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     resultArray.push(arr[i]);
// }
// console.log(resultArray.join(' '));
/////////////////////////////////////
// for (let i = 1; i < 3; i++) {
//     console.log(`Отец ${i}`);
//     for (let j = 1; j < 5; j++) {
//         console.log(`Сын ${j}`);
//     }
//     for (let k = 1; k < 5; k++) {
//         console.log(`Малыш ${k}`);
//     }
// }
//////////////////////////////////////////
// const num = [[1,'Отец 1'], [2, 'Отец 2']];
// for (let i = 0; i < num.length; i++) {
//     for (let j = 0; j < num[i].length; j++) {
//         console.log(num[i][j]);
//     }
// }
/////////////////////////////////////////
// for (let i = 0; i < 5; i++) {
//     console.log(`фор ${i}`);
// }
// let i = 0;
// while (i < 5) {
//     console.log(`фор ${i}`);
//     i++;
// }
// const num = [1, 4, 8, 7];
// // for (let i = 0; i < num.length; i ++) {
// //     if (num[i] > 5) {
// //         break;
// //     }
// //     console.log(num[i]);
// // }

// // let i = 0;
// // while(num[i] <= 5 && i < num.length) {
// //     console.log(num[i]);
// //     i++;
// // }
// // let j = 0;

// // do {
// //     console.log(j);
// //     j++;
// // } while(j < 0);

// for (let element of num) {
//     console.log(element);
// }
// for (let index in num) {
//     console.log(num[index]);
// }
///////////////////////
// const operations = [1000, -700, 300, -500, 10000];
// const startingBalance = 100;
// function getBalance(arrayOfOperations, initailBalance) {
//     let balance = initailBalance;
//     for (const element of arrayOfOperations) {
//         balance += element;
//     }
//     return balance;
// }
// console.log(getBalance(operations, startingBalance));
// function chechOperations(arrayOfOperations, initailBalance) {
//     let balance = initailBalance;
//     let isOk = true;
//     for (const element of arrayOfOperations) {
//         balance += element;
//         if (balance < 0) {
//             isOk = false;
//             break;
//         }
//     }
//     return isOk; 
// }
// console.log(chechOperations(operations, startingBalance));
// function avarageOperations(arrayOfOperations) {
//     let positiveCount = 0;
//     let positiveSum = 0;
//     let negativeCount = 0;
//     let negativeSum = 0;
//     for (const element of arrayOfOperations) {
//         if (element > 0) {
//             positiveCount++;
//             positiveSum += element;
//         }
//         if (element < 0) {
//             negativeCount++;
//             negativeSum += element;
//         }
//     }
//     return [positiveSum / positiveCount, negativeSum / negativeCount];

// }
// console.log(avarageOperations(operations));

// ################################################ function ################################################
// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function number(a, b) {
//     return a * b;
// }
// //Функция высшего порядка
// function calclate(a, b, fn) {
//     console.log(fn.name);
//     const res = fn(a, b);
//     return res;
// }
// let res = calclate(3, 5, add);
// console.log(res);
// res = calclate(3, 5, subtract);
// console.log(res);
// res = calclate(3, 5, number);
// console.log(res);
//////////////////////////////////////////
// function power(pow) {
//     return function(num) {
//         return num * pow;
//     };
// }
// Стрелечный функции
// const power = pow => num => pow*num;
// ////////////////////////////////
// const powerOfTwo = power(2);
// console.log(powerOfTwo(5));
// console.log(powerOfTwo(10));

// const powerOfThree = power(4);
// console.log(powerOfThree(5));
// console.log(powerOfThree(10));

// console.log(power(2)(5));
//////////////////////////////
// ################################################ Итерации в массивах ################################################
///////////////////// forEach ////////////////////////
// const score = [5, 10, 0, 5];
// // for (const [i ,el] of score.entries()) {
// //     console.log(`Пункт ${i + 1}: ${el}`);
// // }
// score.forEach((scoreEl, i) => {
//     console.log(`Раунд ${i + 1}: ${scoreEl}`);
// });
///////////////////// map ////////////////////////
// const transactionInUSD = [10, -7, 50, -10, 100];
// const transactionInRUB = [];
// for (const transition of transactionInUSD) {
//     transactionInRUB.push(transition * 60);
// }
// // console.log(transactionInUSD);
// // console.log(transactionInRUB);

// const transactionInRUB2 = transactionInUSD.map((transition, i) => {
//     return transition * 60;
// });
// console.log(transactionInUSD);
// console.log(transactionInRUB2);
/////////////////////  ////////////////////////
// const operations = [100, -20, 7 ,-20, 50];
// const positiveOperations = [];
// for (const operation of operations) {
//     if (operation > 0) {
//         positiveOperations.push(operation);
//     }
// }
// console.log(positiveOperations);
///////////////////// filter ////////////////////////
// const positiveOperations = operations.filter(operation => {
//     return operation > 0;
// });
// console.log(positiveOperations);
// const positiveRUBOperations = operations.filter(operation => {
//     return operation > 0;
//     })
//     .map(operation => operation * 60);
// console.log(positiveRUBOperations);
///////////////////// Упражнения ////////////////////////
// const prices = [[100, 200], [120,100], [200,350]];
// const result = prices.map(product => product[1] - product[0])
//                      .filter(price => price > 0);
// console.log(result);
////////////////////////////////////////////
// const operations = [100, -20, 7, -30, 50];
// let balance = 0;
// for (const operation of operations) {
//     balance += operation;
// } 
// console.log(balance); 
///////////////////// Reduce ////////////////////////////
// const finalBalance = operations.reduce((acc, operation, i) => {
//     console.log(`Итератция ${i}, acc: ${acc}, operation: ${operation}`);
//     return acc += operation;
// },0);
// console.log(finalBalance);
// ////////////// //////////////////////
// const minElement = operations.reduce((acc, operation) => {
//     if (operation > acc) {
//         return acc;
//     } else {
//         return operation;
//     }
// },0);
// console.log(minElement);
// 0 - acc = 0, opoeration = 100;
// 1 - acc = 100, operation = -20;
// 2 - acc = 80, operation = 7;
// 3 - acc = 87, operation = -30;
// 4 - acc = 57, operation = 50;
//////////////////////
// const arr = [ 2, 4, 4, 10];
// const avg = arr.reduce((acc, el, i) => {
//     if (i != arr.length - 1) {
//         return acc + el;
//     } else {
//         return (acc + el) / arr.length;
//     }
// }, 0);
// console.log(avg);
////////////////// find и findIndex /////////////////
// const arr = [2, 4, 4, 10];
// let elGT5;
// for (const el of arr) {
//     if (el > 5) {
//         elGT5 = el; // =(присваивание)
//         break;
//     }
// }
// console.log(elGT5);
//////////// find /////////
///////////// findIndex ///////////
// elGT5 = arr.find(el => el > 5);
// const elGT5Index = arr.findIndex(el => el > 5);
// console.log(elGT5Index);
// console.log(elGT5);
////////////// Уп ////////////
// const arr = [2, 4, 4, 10, 20];
// function some(array, element) {
//     const res = array .find(el => el === element);
    
// }
// console.log(some(arr, 0));
// console.log(arr.some(el => el === 2));
////////////// flat и flatMap ////////////
// const prices = [[2, 4], [3, 4], [10, [20, 50]]];
// const res = prices.flat(3);
// const res2 = prices.flatMap(el => el.concat([2]));
// console.log(res);
// console.log(res2);

// ################################################ Итерации в массивах ################################################
// let a = 5,
//     b = a;
// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;
// copy.a = 10;

// console.log(copy);
// console.log(obj);

// ################################################ Итерации в массивах ################################################
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
// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };
// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(add);
// console.log(clone);
// // console.log(Object.assign(numbers, add));

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'daniar';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'retube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'in'];
// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);

// const array = ['a', 'b'];
// const array1 = ['a', 'b'];
// const newAarray = [...array, ...array1, 'c', 'd'];
// console.log(newAarray);

// const g = {
//     one: 1,
//     two: 2
// };
// const newObj = {...g, on:3};
// console.log(newObj);

// ################################################ ООП ################################################
// const solider = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };
// const jonh = Object.create(solider);
// // const jonh = {
// //     health: 100,
// // };
// // Object.setPrototypeOf(jonh, solider);
// jonh.sayHello();

// ################################### Практика , ч4. Используем объекты. ###################################
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// Код возьмите из предыдущего домашнего задания

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', "");
    
//         while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?');
//         }
//     },
//     remeberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             let a = prompt('Один из последних просмотренных фильмов?').trim(),
//                 b = prompt('На сколько оцените его?');
//              if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                  personalMovieDB.movies[a] = b;
//                  console.log('Done');
//              } else {
//                  console.log('error');
//                  i--;
//              } 
//          }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30 ) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i < 2; i++) {
//             // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//             // if (genre === '' || genre === null) {
//             //     console.log('Вы ввели некорректные данные или  ввели их вообще');
//             //     i--;
//             // } else {
//             //     personalMovieDB.genres[i - 1] = genre;
//             // }
//             let genres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase();
//             if (genres === '' || genres === null) {
//                 console.log('Вы ввели некорректные данные или  ввели их вообще');
//                 i--;
//             } else {
//                 personalMovieDB.genres = genres.split(', ');
//                 personalMovieDB.genres.sort();
//             }
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
    
//     }
// };


// ##################  Отлавливаем ошибки в своем коде при помощи консоли разработчика. Breakpoints ##################
// function hello() {
//     console.log('Hello World');
// }
// hello();

// function hi() {
//     console.log('Say hi!');
// }
// hi();

// const arr = [1, 14, 4, 30, 54],
//       sorted = arr.sort(compareNun);
// function compareNun(a, b) {
//     return a - b;
// }
// console.log(sorted);

// ##########################################  Динамическая типизация в JS ##########################################

    // // To String
    // // 1)
    // console.log(typeof(String(null)));
    // console.log(typeof(String(4)));
    // // 2)
    // console.log(typeof(null + ''));

    // const num = 5;

    // console.log("https://vk.com.catalog/" + num);

    // const fontSize = 26 + "px";
    // console.log(fontSize);

    // // To Number
    // // 1)
    // console.log(typeof(Number('4')));
    // // 2)
    // console.log(typeof(+('4')));
    // // 3)
    // console.log(typeof(parseInt('15px', 10)));

    // let answ = +prompt("hello", "");

    // // To boolean
    // // false - 0, '', null, undefined, NaN;
    // // 1)
    // let switcher = null;

    // if (switcher) {
    //     console.log('Working...');
    // }
    // switcher = 1;

    // if (switcher) {
    //     console.log('Working...');
    // }
    // // 2)
    // console.log(typeof(Boolean('4')));
    // // 3)
    // console.log(typeof((!!'434344')));
    

// ##################################  Замыкание и лексическое окружение ##################################

// let number = 5;debugger
// function logNumber() {
//     // let number = 5;debugger
//     console.log(number);debugger
// }
// number = 6;debugger
// logNumber();
// number = 8;debugger
// logNumber();

// function createCounter() {
//     let counter = 0;
//     function myFunction() {
//         counter = counter + 1;debugger
//         return counter;debugger
//     }
//     return myFunction;
// }
// debugger
// const incrument = createCounter();
// const c1 = incrument();debugger
// const c2 = incrument();debugger
// const c3 = incrument();debugger
// console.log(c1, c2, c3);

// ##################################  Задачи с собеседований на понимание основ ##################################
//1) Какое будет выведено значение: let x = 5; alert( x++ ); ?
// let x = 5; alert(x++);
//2) Чему равно такое выражение: [ ] + false - null + true ?
// console.log([] + true - null + true); //"false" "NaN" 
//3) Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// let y = 1;
// let x = y = 2;
//  alert(x);
//4) Чему равна сумма [ ] + 1 + 2?
// console.log([] + 1 + 2);
//5) Что выведет этот код: alert( "1"[0] )?
// alert("1" [0]);
//6) Чему равно 2 && 1 && null && 0 && undefined ?
// console.log(2 && 1 && null && 0 && undefined);
// И запинается на лжи
//7) ИЛИ запинается на правде
// Есть ли разница между выражениями? !!(a && b) и (a && b)?
// console.log(!!(1 && 2) === (1 && 2));
//8) Что выведет этот код: alert(null || 2 && 3 || 4) ?
// alert(null || 2 && 3 || 4);
//9) a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a === b);
//10) Что выведет этот код: alert(+"Infinity"); 
// alert(+"Infinity");
//11) Верно ли сравнение: "ёжик" > "яблока"
// console.log('Ёжик' > 'яблоко');
//12) Чему равно 0 || &quot;&quot; || 2 || undefined || true || falsе ?
// console.log(0 || "" || 2 || undefined || true || false );

// ##################################  Получение элементов со страницы ##################################
// const box = document.getElementById('box');
// console.log(box);

// const btns = document.getElementsByTagName('button')[1]; //(2-элемент массива)
// console.log(btns); //[1];(2-элемент массива внутри од-эл[0])

// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts = document.querySelectorAll('.heart');
// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);

// const oneHeart1 = document.querySelector('div');
// console.log(oneHeart1);

// function showMessage(text, age,plus) {
//     if(plus.includes('plus')){
//         return text + age;

//     }
// }
// console.log(showMessage(1, 2, "jgfjgf"));

// ################################## Действия с элементами на странице ##################################

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),
//       hearts = wrapper.querySelectorAll('.heart'),
//       oneHeart = wrapper.querySelector('.heart');
// // box.style.backgroundColor = 'blue';
// // box.style.width = '500px';
// box.style.cssText = "background-Color: blue; width: 500px";

// btns[2].style.borderRadius = '100%';
// circles[0].style.backgroundColor = "red";

// // for (let i = 0; i < hearts.length; i++) {
// //     hearts[i].style.backgroundColor = "#000";
// // }

// hearts.forEach(item => {
//     item.style.backgroundColor = '#000';
// });

// const div = document.createElement('div');
// // const text = document.createTextNode('Тут был я');
// div.classList.add('black');
// // document.body.append(div);
// wrapper.append(div); // (конец)
// // wrapper.appendChild(div);
// // wrapper.prepend(div);// (начало)

// // hearts[0].before(div);
// // hearts[2].after(div);

// // wrapper.insertBefore(div, hearts[1]);

// // circles[0].remove(); //(удалить)
// // wrapper.removeChild(hearts[1]);

// // hearts[0].replaceWith(circles[0]);
// // wrapper.replaceChild(circles[0],hearts[0]);

// div.innerHTML = "<h1>Hello World </h1>";
// // div.textContent = "Wello World";
// div.insertAdjacentHTML("beforebegin", "<h2>Hello World</h2>");

// ########################### События и их обработчики ###########################
// const btns = document.querySelectorAll('button'),
//       overlay = document.querySelector('.overlay');

// // btns.onclick = function() {
// //     alert('Click');
// // };
// // btns.onclick = function() {
// //     alert('Second click');
// // };

// // btn.addEventListener('click', () => {
// //     alert('Click');
// // });

// // let i = 0;
// const deleteElement = ('mouseenter', (e) => {
//     console.log(e.target);
//     console.log(e.type);
//     // i++;
//     // if (i == 2) {
//     //     btn.removeEventListener("click", deleteElement);
//     // }
//     // e.target.remove();
// });
// // btns.addEventListener("click", deleteElement);
// // overlay.addEventListener("click", deleteElement);

// btns.forEach(btn => {
//     btn.addEventListener("click", deleteElement, {once: true});
// });

// const link = document.querySelector('a');
// link.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log(event.target);
// });


// // btn.addEventListener('mouseenter', (e) => {
// //     // alert('Second click');
// //     ////////
// //     // console.log(e.target);
// //     // /////////
// //     // e.target.remove();
// //     // console.log('Hover');
// // });


// ########################## Навигация по DOM - элементам, data-атрибуты, преимущество forof ##########################
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"').nextSibling);
// console.log(document.querySelector('[data-current="3"').previousSibling);
// console.log(document.querySelector('[data-current="3"').nextElementSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName == "#text") {
//         continue;
//     }
//     console.log(node);
// }

// ###################################### Рекурсия ######################################
// // function pow(x, n) {
// //     let result = 1;

// //     // умножаем result на x n раз в цикле
// //     for (let i = 0; i < n; i++) {
// //         result *= x; //(result = x * result;)    
// //     }
// //     return result;
// // }

// // function pow(x, n) {
// //     if (n === 1) {
// //         return x;
// //     } else {
// //         return x * pow(x, n -1);
// //     }
// // }

// // console.log(pow(2, 2)); // 4
// // console.log(pow(2, 3)); // 8
// // console.log(pow(2, 4)); // 16
// /////////////////////////////////////////
// let students = {
//     js: [{
//         name: 'john',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],
//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],
//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }],
//         semi: {
//             students: [{
//                 name: 'Test',
//                 progress: 100
//             }]
//         }
//     }
// };
// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students +=  course.length;
//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students +=  subCourse.length;
//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }
// // console.log(getTotalProgressByIteration(students));

// ///////// Рекурсия ////////
// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//         let total = 0;

//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }

//         return [total, data.length];
//     } else {
//         let total = [0, 0];

//         for (let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressByRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }
//         return total;
//     }
// }
// const result = getTotalProgressByRecursion(students);

// console.log(result[0]/result[1]);

// ###################################### События на мобильных устройствах ######################################
// // touchstart
// // touchmove
// // touchend
// // touchenter
// // touchleave
// // touchcancel

// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');
        
//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault();

//         console.log('start');
//         console.log(e.targetTouches);
//     });

//     box.addEventListener('touchmove', (e) => {
//         e.preventDefault();

//         console.log(e.targetTouches[0].pageX);
//     });

//     // box.addEventListener('touchend', (e) => {
//     //     e.preventDefault();

//     //     console.log('End');
//     // });
// });
// // touches
// // targetTouches
// // changetTouches


// ###################################### Async, defer, динамические скрипты ######################################

// const p = document.querySelectorAll('p');
// console.log(p);

// function loadScript(src) {
//     const sctipt = document.createElement('script');
//     sctipt.src = src;
//     sctipt.async = false;
//     document.body.append(sctipt);
// }

// loadScript("js/test.js");


// ################################ Оператор нулевого слияния (Nullish, ) ES11 ################################
// const box = document.querySelector(".box");

// const newHeight = 100;
// const newWidth = 500;

// function changeParams(elem, h , w) {
//     elem.style.height = `${h ?? 200}px`;
//     elem.style.width = `${w ?? 200}px`;
//     elem.innerHTML = (h ?? 200) * (w ?? 200);
// }
// changeParams(box, newHeight, newWidth);

// let userName;
// let userKey;
// console.log(userName ?? userKey ?? 'user');

// ################################ Оператор опциональной цепочки (.) ES11. ################################
// const box = document.querySelector('.box');
// const block = document.querySelector('.block');

// console.log(block);

// // if (block) {
// //     console.log(block.textContent);
// // }

// // console.log(block?.textContent);

// // console.log(1 + 2);

// const userData = {
//     name: 'Ivan',
//     age: null,
//     say: function () {
//         console.log("Hello");
//     }
// };
// userData.say();
// userData.kay?.();

// // if (userData && userData.skills && userData.skills.js) {
// //     console.log(userData.skills.js);
// // }

// console.log(userData?.skills?.js);

// ################################ Оператор опциональной цепочки (.) ES11. ################################\
// const boxesQuery = document.querySelectorAll('.box');
// const boxesGet = document.getElementsByClassName('box');

// boxesQuery.forEach(box => {
//     if(box.matches('.this')) {
//         console.log(box);
//     }
// });

// console.log(boxesQuery[0].closest('.wrapper'));



// // boxesQuery[0].remove();
// // boxesGet[0].remove();

// // for (let i = 0; i < 5; i++) {
// //     const div = document.createElement('div');
// //     div.classList.add('box');
// //     document.body.append(div);
// // }

// // console.log(boxesQuery);
// // console.log(boxesGet);
// // // console.log(document.body.children);

// // console.log(Array.from(boxesGet));

// ################################ Тип данных Symbol ################################
// // let id = Symbol('id');

// // const obj = {
// //     'name': 'Test',
// //     [Symbol("id")]: 1,
// //     // getId: function() {
// //     //     return this[id];
// //     // }
// // };

// // // let id = Symbol('id');
// // // let id2 = Symbol('id');

// // // console.log(id == id2);

// // // obj[id] = 1;

// // // console.log(obj.getId());

// // console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// // // for (let value in obj) {
// // //     console.log(value);
// // // }

// const myAwesomeDB = {
//     movies: [],
//     actors: [],
//     [Symbol.for('id')]: 123
// };

// // Сторонний код библиотеки

// myAwesomeDB.id = '323232';
// console.log(myAwesomeDB[Symbol.for('id')]);
// console.log(myAwesomeDB);

// ################################ Итерируемые конструкции ################################
// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };
// // in
// // for (const key in user) {
// //     console.log(user[key]);
// // }

// // const arr = ['b', 'a', 'c'];

// // for (const key in arr) {
// //     console.log(arr[key]);
// // }

// // const str = 'string';

// // for (const key in str) {
// //     console.log(str[key]);
// // }
// // of
// // for (const key of user) {
// //     console.log(key);
// // }

// const arr = ['b', 'a', 'c'];
// Array.prototype.someMethod = function() {};
// for (const key of arr) {
//     console.log(key);
// }

// // const str = 'string';

// // for (const key of str) {
// //     console.log(key);
// // }

// const salaries = {
//     jonh: 500,
//     ivan: 1000,
//     ann: 5000,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// salaries[Symbol.iterator] = function() {
//     return {
//         curent: this.jonh,
//         last: this.ann,

//         next() {
//             if (this.curent < this.last) {
//                 this.curent = this .curent + 500;
//                 return {done: false, value: this.curent};
//             } else {
//                 return {done: true};
//             }
//         }
//     };
// };

// const iterator = salaries[Symbol.iterator]();
// console.log(iterator.next());

// // for (let res of salaries) {
// //     console.log(res);
// // }

// ################################ map() ################################
const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

const userMap = new Map(Object.entries(user));


const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);

const shops =[
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000,15000, 25000];

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);

console.log(map);
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;
// map.keys()

// const goods = [];
// for (let shop of map.keys()) {
//     goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

// for (let price of map.values()) {
//     console.log(price);
// }

// for (let [shop, price] of map.entries()) {
//     console.log(price, shop);
// }

// map.forEach((value, key, map) => {
//     console.log(key, value);
// });