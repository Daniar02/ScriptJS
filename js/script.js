'use strict'; // Мы работаем соврименным режиме (Строгый режим);
// a =15; console.log(a)


// ######################################## Переменные и строгий режим ########################################
let number = 5; // _,$; | error, alert; (изменяемый)
const leftBorderWidth = 1; // (не изменяемый)

number = 10;
console.log(number);

const obj = {
    a: 50
};
obj.a = 10;
console.log(obj);

var Name = 'ivan';
Name = 0;
console.log(Name);

{
    var result = 50; // (let и const(не видят))
}
console.log(result);

// ######################################## Правила и типы названия переменных ########################################
const vehisleBodyWidth = 5000,
      vehisleBodyLength = 4000;
console.log('Ширина кузова автомобиля: ' + vehisleBodyWidth  +  '\nДлина: ' + vehisleBodyLength);

['data', 'fara', 'sdd'].map(item => {});

// Request
// data
// response

// папки файды
// cnake_case
// UPPER_SNAKE_CASE
let COLOR_RED = '#F00';

const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
// ЗДЕСЬ БУДЕТЬ ВАШ КЛЮЧЬ, ЭТОТ КЛЮЧЬ МОЖЕТЬ НЕ РАБОТАТЬ
console.log(_apiBase);
