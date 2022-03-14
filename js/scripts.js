var add = (num1, num2) => {
return num1 + num2;
};

var sub = (num1, num2) => {
return num1 - num2;
};

var mult = (num1, num2) => {
return num1 * num2;
};

var divide = (num1, num2) => {
if(num2 != 0);
  return num1/num2;
};

var num1 = parseInt(prompt("Enter num1: "));
var num2 = parseInt(prompt("Enter num2: "));
var result = divide(num1, num2);
alert(result);
