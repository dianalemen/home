/*
	Написати функцію яка поверне перші n чисел кратних m
	Вхідні параметри: два натуральних числа: n та m
	Результат: масив який містить перші n чисел які діляться на m без залишку
	приклад в sequence.test.js
*/

var solution = function(n, m) { 
var count = 0;
var arr = [];
	if(m==0) return "ERROR";
		for (var i=1; count < n; i++){
	      arr.push(i*m);
          count++;
        
        
		} return arr;
    };


	


module.exports = solution;