module.exports = function reverse (n) {
   let array = n.toString().split('');

   if (array[0] === '-') {
      array.splice(0, 1)
   };

   if (array[array.length - 1] === '0') {
      array.splice(-1, 1)
   };
   
   let result = array.reverse().join('');
   return +result;
}


/* function reverse (n) {
   let array = n.toString().split('');

   if (array[0] === '-') {
      array.splice(0, 1)
   };

   if (array[array.length - 1] === '0') {
      array.splice(-1, 1)
   };
   
   let result = array.reverse().join('');
   return +result;
}

console.log(reverse(162)) */