function square(number) {
    return number * number;
}

console.log(Object.getOwnPropertyDescriptors(square));

console.log(Object.getOwnPropertyDescriptor(square, '__proto__'));

console.log(Object.getOwnPropertyDescriptor(Object.prototype,'__proto__'));







function multiply(x, y) {
    console.log(arguments);
    return x * y;
}

console.log(multiply());
console.log(multiply(1));
console.log(multiply(1, 2));
console.log(multiply(1, 2, 3));