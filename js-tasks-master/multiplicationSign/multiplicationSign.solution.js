/*
	Написати функцію яка визначить знак добутку послідовності чисел
	Вхідні параметри:
		numbers - масив дійсних чисел
	Результат роботи:
		"POSITIVE" якщо добуток більше нуля
		"NEGATIVE" якщо добуток менше нуля
		0 вважається "POSITIVE" значенням
		приклад в multiplicationSign.test.js
*/

var solution = function(numbers) {
     var multiply = 1;
	 for(var i=0; i<numbers.length; i++){
		 multiply = multiply * numbers[i];
	 }
	 if(multiply < 0){
		 return "NEGATIVE";
	 }
	 else if(multiply > 0){
		 return "POSITIVE";
	 } 
	 else {
		 return "POSITIVE";
	 }
};

module.exports = solution;