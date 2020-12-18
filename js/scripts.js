document.write('--- 1 задание --- \n');

let s = 'aaa@bbb@ccc';

document.write(s.replace(/@/g, '!'));


document.write('\n\n --- 2 задание --- \n');

let date = '2025-12-31';

document.write(date.replace(/(2025)-(12)-(31)/g, '$3/$2/$1'));


document.write('\n\n --- 3 задание --- \n');

let str = 'Я учу javascript!';

document.write(str.substring(2, 16) + '\n');
document.write(str.substr(2, 14) + '\n');
document.write(str.slice(2, 16));


document.write('\n\n --- 4 задание --- \n');

let array = [4, 2, 5, 19, 13, 0, 10],
    sum = 0;

for (let i = 0; i < array.length; i++) {
    array[i] = Math.pow(array[i], 3);
    sum += array[i];
}

document.write('Квадратный корень из суммы кубов элементов массива ' + Math.sqrt(sum));


// --- 5 задание --- 

let a = prompt('5 задание. Введите переменную a:'),
    b = prompt('5 задание. Введите переменную b:'),
    c = a - b;

alert('5 задание. Переменная c: ' + Math.abs(c));


document.write('\n\n --- 6 задание --- \n');

function date_now(n) {
    if (n > 0 && n < 10) {
        return '0' + n;
    } else {
        return n;
    }
}

let datenow = new Date();

document.write(datenow.getHours() + ':' + datenow.getMinutes() + ':' + datenow.getSeconds() + ' ' + date_now(datenow.getDate()) + '.' + date_now(datenow.getMonth() + 1) + '.' + datenow.getFullYear()); 


console.log('--- 7 задание ---');

let str2 = 'aa aba abba abbba abca abea';

console.log(str2.match(/ab+a/g));


console.log('--- 8 задание ---');

function phone(namber) {

    let regexp = /\+?\s?\d{2,3}\s?[-(]?\d{2}\s?[-)]?\s?\d{3}[-]?\d{2}[-]?\d{2}[-]?/gi; 

    if (regexp.test(namber) == false) {
        return false;
    } else {
        return true;
    }

}

console.log(phone(prompt('8 задание. Введите номер телефона:')));


console.log('--- 9 задание ---');

function getemail(email) {

    let regexp = /^([a-z]+[\d-_\.]*){3,}@[a-z]+\.[a-z]{2,11}$/gi; 

    if (regexp.test(email) == false) {
        return false;
    } else {
        return true;
    }

}

console.log(getemail(prompt('9 задание. Введите email:')));


console.log('--- 10 задание ---');

function adr(a) {

    let regexp = /(^[a-z:\/]*[a-z\.?]+\.[a-z]{2,4})([\w-\/]*)([\?\=\&\w-\/]*)([\#\w]*)/i;

    arr = a.match(regexp);

        for (let i = 1; i < arr.length; i++) {
            console.log(arr[i]);
        }
}

let arr = [];

adr('https://tech.onliner.by/2018/04/26/smartdo200/?utm_source=main_tile&utm_medium=smartdo200#zag3');
