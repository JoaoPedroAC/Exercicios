/* // forma rapida
const numOne = [1, 2, 3];
const numTwo = [4, 5, 6];
const concating = numOne.concat(numTwo, 'terminei');
console.log(concating);
*/

// podemos usar tambem o spread operator(...rest)
const numOne = [1, 2, 3];
const numTwo = [4, 5, 6];
const numThree = [...numOne, ...numTwo, ...[7, 8, 9], 'Terminei'];
console.log(numThree);

