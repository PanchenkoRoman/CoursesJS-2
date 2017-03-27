#Class Work

###Задача 1. 
Каков будет результат выполнения этого кода?
```
var value = 0;
function f() {
  if (1) {
    value = true;
  } else {
    var value = false;
  }
  alert( value );
}
f();
```

Изменится ли внешняя переменная value ?

- value == true

Как изменится рузультат, если из строки var value = false убрать ключевое слово var?

- никак

###Задача 2.
Напишите функцию, возвращающую количество собственных вызовов. 

```
function count(){
var curr = 1;
return function count1(){
	return curr++;
}
}
var counter1 = count();
alert(counter1());
alert(counter1());
alert(counter1());
```

###Задача 3. 
Следующий код создает массив функций-стрелков shoooters. По замыслу, каждый стрелок должен выводить свой номер: 

Сейчас все функции-стрелки выводят 10 вместо своего номера. 
Поправьте код, чтобы при вызове каждой из них она выводила свой номер(индекс в массиве). 
Предложите несколько вариантов. 

```
function makeArmy() {
var shooters = []; 

for (var i = 0; i< 10; i++) {
      var shooter = function() { // функция-стрелок
alert(i); // выводит свой номер
}; 
shooters.push(shooter); 
} 
return shooters; 
}
var army = makeArmy(); 
army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10, а должен 5. 

```
