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

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
// console.log((hamburger === 3 && cola && fries));

if (hamburger === 3 && (cola === 2 || fries === 3) && nuggets) {
    console.log("Все сыты!");
} else {
    console.log("Мы уходим");
}
console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);
console.log(!0);
// console.log((hamburger || cola || fries));

// let johnReport, alexReport, samReport, mariaReport = "done";
// console.log(johnReport || alexReport || samReport || mariaReport);