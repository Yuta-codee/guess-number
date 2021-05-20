// function reverseWords(str) {
//   //.split(''))
//   var arr = [];
//   var nahan = '';
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] == ' ') {
//       arr.push(nahan);
//       nahan = '';
//     } else if (str[i] !== ' ') {
//       nahan += str[i];
//     }
//   }
//   arr.push(nahan);
//   return arr.reverse().join(' ');
// }
// console.log(reverseWords('hello world!')); // Hello

// const flip = (d, a) => {
//   if (d == 'R') {
//     return a.sort(function (a, b) {
//       return a - b;
//     });
//   } else if (d == 'L') {
//     return a.sort(function (a, b) {
//       return b - a;
//     });
//   }
// };

const flip = (d, a) =>
  d == 'L' ? a.sort((a, b) => b - a) : a.sort((a, b) => a - b);

console.log(flip('L', [1, 4, 5, 3, 5]));

// jika (r) dari yg terkecil
// jika (l) dari yg terbesar
