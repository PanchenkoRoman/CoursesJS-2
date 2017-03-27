#Class Work 

###Задача 1 

Напишите функцию printNumber, которая последовательно выводит в консоль числа от 1 до 20, с интервалом между числами 100мс. 
То есть, весь вывод должен занимать 2000мс, в течение которых каждые 100мс в консоли появляется очередное число. 

```
var counter = 0;
function printNumber() {console.log(counter++)}; 

var timer = setInterval(printNumber, 100); 

setTimeout(function() {
	clearInterval(timer); 
}, 2100);
```

###Задача 2 

Превратите объект leader из примера ниже в JSON:

```
var leader = {
  name: "Василий Иванович",
  age: 35
};

var leaderStr = JSON.stringify(leader);
leader = JSON.parse(leaderStr);
``` 
После этого конвертируйте получившуюся строку обратно в объект.

###Задача 3
Напишите функцию, которая принимает один аргумент и возвращает его тип данных. 
Выполните обработку исключений в случае передачи двух и больше аргументов.

function typeData(obj){
	if(arguments.length == 1){
	return typeof obj;
	}else alert('введите один аргумент');
}
typeData(3);