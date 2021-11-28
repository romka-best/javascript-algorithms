/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function isPrime(n) {
    for (let i = 2; n > i; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

function primes(num) {
    const primes = [];
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primes.push(i)
        }
    }
    return primes;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]