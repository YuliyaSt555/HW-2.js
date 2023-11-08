"use strict"
let age = prompt ('Сколько вам лет');
//1
{
    let name = prompt ('Как вас зовут');
    let city = prompt ('В каком городе вы проживаете');
    let phone = prompt ('Ваш номер телефона');
    let email = prompt ('Ваша электронная почта');
    let company = prompt ('Где вы работаете?');

    document.write (`Меня зовут ${name}. Мне ${age}. Я проживаю в городе ${city} и работаю в ${company}. Мои контактные данные: ${phone}, ${email}. `);
}

//2
{
    let year=2023-age;
    document.write(name+" родился в "+year+" году.");
    
}

//3
let num = '192468';

let num1 = (num[0] + num[1] + num[2]);
console.log(num1);
let num2 = (num[3] + num[4] + num[5]);
console.log(num2);

if (num1 == num2){
        console.log('да');
    }
else{
    console.log('нет');
}

//4

let a = -3;

if (a > 0){
    console.log(' верно ');
} else {
    console.log(' неверно');
}


let a = 10;
let b = 2;

//5

let sum = a + b;
console.log(sum);
console.log(a - b);
console.log(a * b);
console.log(a / b);

if ((a + b) > 1){
    console.log(Math.pow((a + b), 2));
}

//6

if (a > 2 && a < 11 || b >= 6 && b < 14){
    console.log('Верно');
} else {
    console.log('Неверно');
}

//7

let n = 24;
if (n >= 0 && n <= 15 ){
    console.log('Первая четверть часа');
} else if (n > 15 && n <= 30){
    console.log('Вторая четверть часа');
} else if (n > 30 && n <= 45){
    console.log('Третья четверть часа');
} else {
    console.log('Четвертая четверть часа');
}

let day = 30;

 //8

 if (day >= 1 && day <= 10){
    console.log('первая декада месяца');
 } else if (day > 10 && day <= 20){
    console.log('Вторая декада месяца');
 } else {
    console.log('Третья декада месяца');
 }

 if (day <= 10) console.log('Первая декда месяца');
 if (day > 10 && day <= 20) console.log('Вторая декада месяца');
 if (day > 20 && day <= 31) console.log('Третья декада месяца');

 //9

 let days = prompt('сколько дней');
let year = days / 365;
let month = days / 31;
let week = days / 7;
let hour = days * 24;
let minute = hour * 60;
let sec = minute * 60;

console.log(hour + ' часов '); 
console.log(minute + ' минут '); 
console.log(sec + ' секунд ' );

if (days < 365) {
    console.log('Меньше года');
} else {
    console.log(year);
}

if ( days < 31) {
    console.log('Меньше месяца');
} else {
    console.log(month);
}

if (week < 7) {
    console.log('Меньше недели');
} else {
    console.log(week);
} 

//10
let day = 30;
day = prompt ('Введите число до 365 и узнаете какой это месяц');
    let months = 365/12/30.5*day;
    if ( months == 1 && months <= 31) {
        console.log ('Январь' );
    } else if (months > 31 && months <= 59) {
        console.log ('Февраль');
    } else if (months >59 && months <= 90) {
        console.log ('Март');
    } else if (months > 59 && months <= 120) {
        console.log ('Апрель');
    } else if (months > 120  && months <= 151) {
        console.log ('Май');
    } else if  (months > 151 && months <= 181) {
        console.log ('Июнь');
    } else if  (months > 181 && months <= 212) {
        console.log ('Июль');
    } else if  (months > 212 && months <= 243) {
        console.log ('Август');
    } else if  (months > 243 && months <= 273) {
        console.log ('Сентябрь');
    } else if  (months > 273 && months <= 304) {
        console.log ('Октябрь');
    } else if (months >304 && months <= 334) {
        console.log ('Ноябрь');
    } else {
        console.log ('Декабрь');
    } 

   if (months <= 59 && months > 334) {
        console.log ('зима');
        alert ('зима');
    } else if  (months > 59 && months <= 151) {
        console.log ('весна');
        alert ('весна');
    } else if  (months > 151 && months <= 243) {
        console.log('лето');
        alert ('лето');
    } else { 
            console.log ('осень');
            alert ('осень');
    }
   



