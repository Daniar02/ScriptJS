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

// ######################################## Классификация типов данных в JavaScript ######################################## 

let number = 4;
console.log(4/0); // Infinity
console.log('string' * 9); // NaN
const persone = `1`; //  (1 число)-('' страка)
const  bool = false;
console.log(); 
// console.log(something); NaN
let und;
console.log(und); //undefined

const obj = {
    Name: 'john',
    age: 20,
    isMarried: false
};
console.log(obj.Name); // (.[])
                //0             1      2       3       4   5
const arr = ['plum.png', 'orange.jpg', 6, 'aple.bmp', {}, [] ];
console.log(arr[1]);