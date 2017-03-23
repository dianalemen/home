/*
	Написати фунцію для сортування масиву довільних об'єктів
	Вхідні параметри:
	    items - масив довільних об'єктів однакової структури, наприклад: [{name: "name1"}, {name: "name2"}]
	    field - поле по якому відбувається сортування
	    order - стрічка "asc" якщо необхідно сортувати по зростанню, та "desc" якщо по спаданню
	    selection - поле яке має фігурувати в результуючій послідовності
	Результат:
		стрічка в якій мають бути через кому зазначеня поля selection послідовності
		items відсортованої по спаданню/зростанню(параметр order) значення в полі field
		приклад в sorter.test.js
 */

var solution = function(items, field, order, selection) {
var arr2 = [];
var selection = [];

for (var i = 0; i<items.length; i++){
	arr2.push(items[i].name);
  };
var order = items.sort(function(one, two) {
    if (one.age < two.age) return -1;
    if (one.age > two.age) return 1;
    return 0;
});


for(var i in order){
   selection.push(order[i].name);
}
return(selection.join(', '));

};

module.exports = solution;