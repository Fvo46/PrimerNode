const Math = {};

function add(x1, x2){
    return x1 + x2;
}

function substract(x1, x2) {
    return x1 - x2
}

function multiply(x1, x2) {
    return x1 * x2
}

function divide(x1, x2) {
   if (x2 == 0) {
       console.log("me queres hacer crashear?")
   } else {
       return x1 / x2;
   }
}

Math.add = add;
Math.substract = substract
Math.multiply = multiply
Math.divide = divide

/* puedo exportar cada funcion o propiedad de objeto
con exports, o todo un objeto con module.exports */

module.exports = Math;