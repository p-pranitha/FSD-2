"use strict";
var Calculator;
(function (Calculator) {
    function add(a, b) {
        return a + b;
    }
    Calculator.add = add;
    function multiply(a, b) {
        return a * b;
    }
    Calculator.multiply = multiply;
})(Calculator || (Calculator = {}));
console.log(Calculator.add(5, 10));
console.log(Calculator.multiply(5, 10));
