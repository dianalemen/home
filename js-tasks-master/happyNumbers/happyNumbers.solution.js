/*
	Написати функцію яка поверне кількість щасливих квитків в заданому наборі
	щасливим називається квиток у якого або сума перших трьох цифр дорівнює сумі останніх, або сума парних дорівнює сумі непарних
	Вхідні данні:
		numbers - масив стрічок, в кожній з яких записано шестизначне число
	Результат: кількість унікальних "щасливих" чисел
	приклад в happyNumbers.test.js
*/

var solution = function(numbers) {
 var count= 0;

 for (var i=0; i<numbers.length; i++){
		
	var arr = numbers[i].split('');
		if(arr[0]*1+arr[1]*1+arr[2]*1 == arr[3]*1+arr[4]*1+arr[5]*1 || arr[0]*1+arr[2]*1+arr[4]*1 == arr[1]*1+arr[3]*1+arr[5]*1){
    		 count++;
        }
 } return count;
	
};

module.exports = solution;