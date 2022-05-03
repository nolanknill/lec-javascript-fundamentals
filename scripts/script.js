const sum = 1 + 5;

const booleanExample = true && true || false || false;

console.log('sum: ', sum);
console.log('booleanExample:', booleanExample);


console.log(2 + 2);
console.log('Hello' + 'World');
console.log(true);
console.log(false);
console.log(null);
console.log(100 + 50);
console.log(100 + 50 + 25 + 25);
console.log(100 - 25);
console.log(10 - 5);
console.log('Hello' - 'World');
console.log('10' - '5');
console.log('10' + '5' );
console.log(10 * 10);
console.log('10' * '10');
console.log(100 * true);
console.log(100 * false );
console.log(100 * 1);
console.log(100 * 0);
console.log(true + true + true + false);
console.log(100 / 10);
console.log(23 / 2);
console.log(23 % 2 );
console.log(22 % 2);
console.log(5 < 5);
console.log(5 <= 5);
console.log(4 < 5);
console.log(4 <= 5);
console.log(4 > 5);
console.log(5 > 5);
console.log(5 >= 5);
console.log(6 > 5);
console.log(5 > 6);
console.log('Hello' > 5);
console.log('Helo' > 'Hello');
console.log('Hello' > 'Hello');
console.log('Hello' < 'Helloa');
console.log('Hello'.length);
console.log('Help me'.length);

let variable1 = 'Hello';
let variable2 = 'Help me';

console.log(variable1.length > variable2.length);
console.log(1 === 1);
console.log(1 == 1);
console.log(1 === '1');
console.log(1 == '1');
console.log('Hello' + 10);
console.log('Hello' + '10');
console.log(10 + 'Hello');


console.log(1 != 1);
console.log(1 !== 1);
console.log(2 !== 1);
console.log(true !== false);
console.log(500 !== 500);
console.log(500 !== '500');
console.log(500 != '500');

console.log(typeof variable1);
console.log(typeof variable2);
console.log(variable1);
console.log(variable2);
console.log(typeof true);
console.log(typeof false);
console.log(typeof 14);
console.log(typeof 25.2);


let variable3;
console.log(variable3);

let variable4 = null
console.log(variable4);
let operand1 = true;
let operand2 = false;
console.log(!operand1);
console.log(operand1);

operand1 = !operand1;
console.log(operand1);
operand1 = !operand1;
console.log(operand1);
operand1 = !operand1;
console.log(operand1);
operand1 = !operand1;
console.log(operand1);

console.log(operand1);
console.log(operand2);
console.log(operand1 && operand2);

operand1 = true;
operand2 = true;
let operand3 = false;

console.log(operand1 && (operand2 || operand3));
console.log(operand1 || operand2 || operand3);
console.log(operand1 || operand2);
console.log(operand1 && operand2 && operand3);